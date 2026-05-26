# Alistamento Automático

O alistamento automático é um **job (tarefa agendada)** que roda automaticamente a cada 5 minutos e processa todos os pedidos de entrada pendentes no Zenit, sem necessidade de intervenção humana.

## Como ativar para o seu clã

O alistamento automático é ativado por um Admin nas configurações do clã (`Alistamento Automático: Sim`). Para que funcione, é necessário:

- **E-mail e senha do Líder** (ou Vice-Líder) cadastrados no sistema
- Pelo menos um login válido no Painel

::: warning
Se o login falhar **5 vezes consecutivas**, o alistamento automático é **desativado automaticamente** e os admins recebem uma notificação push. Um Admin precisa reativar e verificar as credenciais.
:::

---

## Fluxo Detalhado (a cada 5 minutos)

### 1. Login

O sistema tenta fazer login no Painel usando as credenciais salvas:

1. Tenta o **e-mail e senha do Líder**
2. Se falhar, tenta o **Vice-Líder**
3. Se ambos falharem: registra uma falha (contador)
4. Após **5 falhas consecutivas**: desativa o alistamento e notifica admins

A sessão de login (cookies) dura **6 horas**. Enquanto válida, o sistema não precisa fazer novo login.

### 2. Leitura da página do clã

O sistema acessa a página do clã no Portal e identifica:

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

#### ✅ Verificação 5 — Voto no último BC (se configurado)

Se o clã tiver a opção `Verificar voto em evento` ativada, o sistema verifica se o personagem (ou melhor, o usuário vinculado a ele) **votou no último evento de Bless Castle encerrado**.

- **Não votou** → Status **PENDENTE**
  - Uma notificação push é enviada ao jogador (máximo 1 vez a cada 6 horas se o alistamento ainda estiver pendente):
  - O personagem **não é removido** — fica aguardando

::: tip Piloto e alts
Se você tem mais de um personagem, a verificação de voto é feita pelo **Nick do personagem**, não pelo usuário em si. Ou seja, se você votou com um personagem específico, apenas esse personagem é considerado como tendo votado.
:::

### 4. Abertura de vagas (se necessário)

Se há alistados válidos mas **sem vagas disponíveis**, o sistema:

1. Lista os membros **offline** mais inativos (com maior tempo desde o último acesso)
2. Remove os mais inativos para abrir vagas
3. **Nunca remove:**
   - Líderes e Vice-Líderes
   - Membros aceitos nas **últimas 1 hora**

### 5. Aceite dos alistados válidos

Para cada alistado que passou em todas as verificações:

1. O sistema aceita no Painel
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
Votou no último BC? ─────────── NÃO ──→ ⏳ Pendente + notificação push
(se configurado)               (fica na fila, reavaliado a cada ciclo)
      │ SIM (ou não configurado)
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
Sim. Enviar alistamento novamente e aguardar o processamento.

**O automático remove membros sem aviso?**
Apenas membros que estão **offline há muito tempo** e quando há fila de alistados válidos sem vaga. Membros ativos raramente são afetados.
