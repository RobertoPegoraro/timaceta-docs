# Alistamento Automático

O alistamento automático é um **job (tarefa agendada)** que roda automaticamente a cada 5 minutos e processa todos os pedidos de entrada pendentes no Painel, sem necessidade de intervenção humana.

## Como ativar para o seu clã

O alistamento automático é ativado por um Admin nas configurações do clã (`Alistamento Automático: Sim`). Para que funcione, é necessário:

- **E-mail e senha do Líder** (ou Vice-Líder) cadastrados no sistema
- Pelo menos um login válido no Painel

::: warning
Se o login falhar **5 vezes consecutivas**, o alistamento automático é **desativado automaticamente** e os admins recebem uma notificação push. Um Admin precisa reativar e verificar as credenciais.
:::

---

## Fluxo Detalhado (a cada 5 minutos)

### 1. Login no Painel

O sistema tenta fazer login no Painel usando as credenciais salvas:

1. Tenta o **e-mail e senha do Líder**
2. Se falhar, tenta o **Vice-Líder**
3. Se ambos falharem: registra uma falha (contador)
4. Após **5 falhas consecutivas**: desativa o alistamento e notifica admins

A sessão de login (cookies) dura **6 horas**. Enquanto válida, o sistema não precisa fazer novo login.

### 2. Leitura da página do clã

O sistema acessa a página do clã no Painel e identifica:

- Lista de **membros efetivos** (Líder, Vice-Líderes, Membros)
- Lista de **alistados pendentes** (quem pediu para entrar)
- Quantidade de **vagas disponíveis** (máximo 65 membros)

### 3. Verificação de cada alistado

Para cada pessoa na fila de espera, o sistema verifica:

#### ✅ Verificação 1 — Personagem cadastrado no app?

O sistema busca o nick do alistado no banco de dados do Timaceta.

- **Não encontrado** → Rejeitado e removido imediatamente (sem notificação)

#### ✅ Verificação 2 — Usuário ativo?

O personagem encontrado precisa ter um usuário ativo vinculado.

- **Usuário inativo ou sem vínculo** → Rejeitado e removido imediatamente

#### ✅ Verificação 3 — Nível mínimo

O clã pode ter um nível mínimo configurado. O sistema compara o nível do personagem com esse mínimo.

- **Abaixo do mínimo** → Rejeitado com notificação:
  > "Nick não possui o nível mínimo exigido pelo clã"

#### ✅ Verificação 4 — Cadastro atualizado

O cadastro do personagem no app deve ter sido atualizado nos **últimos 30 dias**.

- **Desatualizado** → Rejeitado com notificação:
  > "Cadastro desatualizado. Acesse o app, vá em Personagens e clique em Salvar."

#### ✅ Verificação 5 — Participação em BC (se configurado)

Se o clã tiver ativada a exigência de voto em Bless Castle, o sistema verifica se o personagem **atende aos critérios de participação** nos eventos de BC configurados. Essa verificação não é uma regra binária simples — é um pequeno subsistema configurável pelo Admin:

- **Quantos eventos contam:** o Admin define quantos eventos de BC recentes são considerados (padrão: 1, o último evento encerrado).
- **Quatro regras separadas**, cada uma podendo ser ativada ou não pelo Admin:
  - Quem **votou Sim**
  - Quem **votou Não**
  - Quem **votou como piloto de outro personagem** e esse voto foi Sim
  - Quem **votou como piloto de outro personagem** e esse voto foi Não
- **O que cada regra libera:** para cada uma das regras acima, o Admin escolhe o que fica autorizado a entrar — apenas aquele personagem específico, todos os personagens do usuário, apenas o personagem principal, o personagem votante + o principal, ou nenhum personagem (ou seja, mesmo votando, aquele critério isolado não libera ninguém).

- **Não atende aos critérios configurados** → Status **PENDENTE**
  - Uma notificação push é enviada ao jogador (máximo 1 vez a cada 6 horas):
    > "{nick} não atende aos critérios de participação nos últimos {n} evento(s) de Bless Castle configurados. Entre em contato com a liderança."
  - O personagem **não é removido** — fica aguardando

::: tip Voto como piloto
O voto registrado como "piloto" de outro personagem só é considerado quando **não existe voto pelo nick do próprio personagem**. Ele não libera automaticamente todos os seus personagens — o que fica liberado depende de qual regra o Admin configurou (veja acima).
:::

::: warning Bloqueio por troca de personagem principal
Se você trocou de personagem principal recentemente, o alistamento desse personagem fica **bloqueado por 24 horas**, independente do voto. Você recebe uma notificação avisando do bloqueio temporário.
:::

#### ✅ Verificação adicional — Participação em PvP (se configurado)

Além do BC, o clã pode configurar uma exigência equivalente para eventos de **PvP** — voto no evento e/ou presença confirmada (por meio de um registro de participação do próprio jogo). A lógica de regras configuráveis é a mesma da participação em BC (quantos eventos contam, o que cada situação libera).

Se o clã tiver **as duas** exigências ativas (BC e PvP), o Admin escolhe como elas se combinam:

- **E (ambas):** o personagem só passa se atender às duas exigências ao mesmo tempo
- **OU (qualquer uma):** basta atender a uma das duas para passar

#### ✅ Janelas de horário — suspensão temporária do alistamento

Independente das verificações acima, o clã pode ativar duas janelas de horário que suspendem temporariamente o alistamento de quem não está engajado naquele momento:

- **PvP Ativo:** em horários configurados pelo Admin, só passa quem está em um grupo de PvP ou confirmou presença em PvP naquele momento. Fora dessas condições, o alistamento fica pendente até a janela passar ou até você se engajar no PvP.
- **Escalação BC:** nos **dias de evento de Bless Castle**, entre **10h e 14h30 (horário de Brasília)**, só passa quem está escalado na Escalação de BC daquele dia.

#### Whitelist e blacklist de nicks

O Admin pode cadastrar, por clã:

- **Whitelist:** nicks que são **sempre aceitos**, ignorando as demais verificações de participação
- **Blacklist:** nicks que são **sempre rejeitados ou ficam pendentes**, independente de atenderem às outras regras

### 4. Abertura de vagas (se necessário)

Se há alistados válidos mas **sem vagas disponíveis**, o sistema:

1. Lista os membros **offline** mais inativos (com maior tempo desde o último acesso)
2. Remove os mais inativos para abrir vagas
3. **Nunca remove:**
   - Líderes e Vice-Líderes
   - Membros aceitos nos **últimos 30 minutos**

### 5. Aceite dos alistados válidos

Para cada alistado que passou em todas as verificações:

1. O sistema clica em "Aceitar" no Painel
2. O usuário recebe uma **notificação push**:
   > "Nick foi aceito no clã NomeDoCla!"
3. O personagem é marcado internamente como "recém-aceito" por 30 minutos (proteção)

---

## Resumo Visual das Regras

```
Alistado na fila
      │
      ▼
Nick cadastrado no app? ──── NÃO ──→ ❌ Removido silenciosamente
      │ SIM
      ▼
Usuário ativo? ────────────── NÃO ──→ ❌ Removido silenciosamente
      │ SIM
      ▼
Nível ≥ mínimo do clã? ────── NÃO ──→ ❌ Rejeitado + notificação
      │ SIM
      ▼
Cadastro ≤ 30 dias? ─────────── NÃO ──→ ❌ Rejeitado + notificação
      │ SIM
      ▼
Nick em blacklist? ────────────── SIM ──→ ❌/⏳ Rejeitado ou Pendente
      │ NÃO (ou nick em whitelist → pula direto para ACEITO)
      ▼
Atende regras de BC/PvP? ──── NÃO ──→ ⏳ Pendente + notificação push
(se configurado, E/OU)          (fica na fila, reavaliado a cada ciclo)
      │ SIM (ou não configurado)
      ▼
Dentro das janelas PvP Ativo /
Escalação BC (se aplicável)? ── NÃO ──→ ⏳ Pendente (aguarda passar a janela)
      │ SIM (ou não aplicável)
      ▼
Troca recente de principal? ─── SIM ──→ ⏳ Bloqueado por 24h
      │ NÃO
      ▼
   ✅ ACEITO
   Notificação push enviada
```

---

## Perguntas Frequentes

**O automático roda em qual horário?**
A cada 5 minutos, 24 horas por dia, 7 dias por semana.

**O que acontece se o Painel estiver offline?**
O ciclo falha e tenta novamente no próximo ciclo de 5 minutos.

**Fui rejeitado mas corrigi o problema. Preciso fazer algo?**
Não. O sistema verifica automaticamente no próximo ciclo. Basta corrigir o problema (atualizar cadastro, votar no BC etc.) e aguardar.

**O automático remove membros sem aviso?**
Há dois casos de remoção automática: (1) membros que estão **offline há muito tempo**, quando há fila de alistados válidos sem vaga; e (2) membros **já efetivos no clã** (não só quem está entrando) cujo nível caiu abaixo do mínimo exigido — essa verificação roda periodicamente, não apenas no momento do alistamento. Membros ativos e com nível suficiente raramente são afetados.
