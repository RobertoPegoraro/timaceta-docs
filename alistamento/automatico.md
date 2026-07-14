# Alistamento Automático

O alistamento automático é um **job (tarefa agendada)** que roda automaticamente a cada 5 minutos e processa todos os
pedidos de entrada pendentes no Painel, sem necessidade de intervenção humana.

## Como ativar para o seu clã

O alistamento automático é ativado por um Admin nas configurações do clã (`Alistamento Automático: Sim`). Para que
funcione, é necessário:

- **E-mail e senha do Líder** (ou Vice-Líder) cadastrados no sistema
- Pelo menos um login válido no Painel

::: warning
Se o login falhar **5 vezes consecutivas**, o alistamento automático é **desativado automaticamente** e os admins
recebem uma notificação push. Um Admin precisa reativar e verificar as credenciais.
:::

---

## Fluxo Detalhado (a cada 5 minutos)

### 1. Login

O sistema tenta fazer login no Painel usando as credenciais salvas.

### 2. Leitura da página do clã

O sistema identifica membros, alistados pendentes e vagas disponíveis.

### 3. Verificação de cada alistado

#### 🚫 Verificação 0 — Blacklist (se configurada)

Antes de qualquer outra coisa, o sistema checa se o nick está na **blacklist** do clã. Se estiver, o resultado é
imediato — **Rejeitado** ou **Pendente**, conforme a ação configurada para a blacklist (a mesma ação vale para
todos os nicks da lista) — e nenhuma das verificações abaixo é feita, nem mesmo a whitelist.

#### ✅ Verificação 0.5 — Whitelist (se configurada)

Se o nick não estiver na blacklist, o sistema checa se ele está na **whitelist**. Um nick na whitelist é **aceito
imediatamente**, pulando todas as verificações de 1 a 6 abaixo (incluindo nível mínimo, cadastro, BC, PvP e PvP
Ativo).

#### ✅ Verificação 1 — Personagem cadastrado no app?

O sistema busca o nick do alistado no banco de dados do Timaceta.

#### ✅ Verificação 2 — Usuário ativo?

O personagem encontrado precisa ter um usuário ativo vinculado.

#### ✅ Verificação 3 — Nível mínimo

O sistema compara o nível do personagem com o mínimo configurado pelo clã.

#### ✅ Verificação 4 — Cadastro atualizado

O cadastro do personagem deve ter sido atualizado nos últimos 30 dias.

#### ✅ Verificação 5 — Voto em eventos de BC, voto em eventos de PvP e participação em PvP (se configurados)

O clã pode ativar até três regras de participação, cada uma independente das outras:

- **Voto em BC** — participação nos votos dos eventos de Bless Castle;
- **Voto em PvP** — participação nos votos dos eventos de PvP;
- **Participação em PvP** — presença detectada nos locais/horários do PvP através de **snapshots** de localização
  capturados periodicamente.

Se **mais de uma** estiver ativa ao mesmo tempo, o Admin escolhe como elas se combinam:

- **E (padrão):** o personagem precisa atender a **todas** as regras ativas.
- **OU:** basta atender a **uma** das regras ativas.

Se **nenhuma** das três estiver ativa, esta etapa é sempre aprovada.

Para o voto em BC e em PvP, dependendo da configuração, pode ser necessário:

- Ter participado do último evento encerrado;
- Ter participado dos últimos 2 eventos;
- Ter participado dos últimos 3 eventos;
- Ou outra quantidade configurada pelo Admin.

A participação pode ter sido registrada através de um personagem específico ou através da opção Piloto.

Para a participação em PvP (snapshots), o clã define:

- **Quantas snapshots recentes** serão avaliadas (ex: últimas 10);
- **Quantas presenças** são exigidas dentro dessas snapshots (ex: ao menos 3);
- **Uma ou mais regras de localização**, cada uma com subservidor, mapa e janela de horário;
- **O que fazer com presenças offline** — considerar válido, deixar pendente, ou rejeitar automaticamente.

- **Não atende às regras configuradas (no modo E/OU escolhido)** → Status **PENDENTE** na maioria dos casos —
  **exceto** quando é especificamente a regra de participação em PvP que falha com a política de offline
  "Rejeitar", caso em que o alistamento é **Rejeitado** direto.
- Enquanto pendente, o pedido permanece na fila e será reavaliado automaticamente nos próximos ciclos, com
  notificações push periódicas.

::: tip Votos, personagem principal e voto como Piloto
Dependendo da configuração definida pelo clã, o sistema pode considerar não apenas o personagem utilizado no voto, mas
também seu personagem principal ou todos os personagens da conta.

Se o personagem solicitante não tiver voto registrado, o sistema verifica se o dono da conta votou como **Piloto**
naquele evento (BC) ou com qualquer outro personagem seu naquele evento (PvP). Votos do dono em outro personagem não
substituem o voto do solicitante para as demais regras.

Por esse motivo, um personagem pode ser aceito mesmo que o dono tenha votado como Piloto, desde que as regras do clã
permitam.
:::

#### ✅ Verificação 6 — PvP Ativo (se configurado)

Esta verificação é **independente** da combinação E/OU acima — é um filtro adicional aplicado só depois que o
personagem já passou por todas as verificações anteriores (1 a 5). Só entra em vigor quando, ao mesmo tempo: a
opção está ativada, o horário atual está dentro da janela configurada, e existe um evento de PvP ativo do clã
marcado para o dia de hoje. Fora dessas condições, ela não é aplicada naquele ciclo.

Quando em vigor, o clã escolhe o critério de quem pode ser aceito automaticamente durante a janela:

- **Personagem adicionado no grupo** — basta estar em um grupo do PvP ativo, mesmo sem confirmar presença;
- **Apenas personagens confirmados** — precisa ter confirmado presença (votado Sim) no evento de PvP ativo.

- **Não atende ao critério da janela** → Status **PENDENTE**, mesmo que já tenha passado pela Verificação 5.
- Um nick na whitelist também dispensa esta verificação.

### 4. Abertura de vagas (se necessário)

Se não houver vagas, o sistema poderá remover membros offline há muito tempo para abrir espaço. Personagens que
atendem à regra de PvP Ativo em vigor não são escolhidos para abrir vaga.

### 5. Aceite dos alistados válidos

Os personagens que atenderem todas as regras serão aceitos automaticamente.

---

## Resumo Visual das Regras

```text
Alistado na fila
      │
      ▼
Está na blacklist? ────────── SIM ──→ ❌ Rejeitado ou ⏳ Pendente (conforme ação configurada) — para aqui
      │ NÃO
      ▼
Está na whitelist? ────────── SIM ──→ ✅ ACEITO direto (pula tudo abaixo, inclusive PvP Ativo)
      │ NÃO
      ▼
Nick cadastrado no app? ──── NÃO ──→ ❌ Removido
      │ SIM
      ▼
Usuário ativo? ────────────── NÃO ──→ ❌ Removido
      │ SIM
      ▼
Nível ≥ mínimo do clã? ────── NÃO ──→ ❌ Rejeitado
      │ SIM
      ▼
Cadastro ≤ 30 dias? ───────── NÃO ──→ ❌ Rejeitado
      │ SIM
      ▼
Voto BC / Voto PvP / Participação PvP — combinados por E ou OU (se alguma estiver ativa)
      │ NÃO atende ao modo escolhido
      ├────────→ ⏳ Pendente (ou ❌ Rejeitado, só participação em PvP c/ política "Rejeitar")
      │ SIM (ou nenhuma regra ativa)
      ▼
PvP Ativo em vigor agora? (independe do E/OU acima)
      │ SIM, mas não atende ao critério da janela
      ├────────→ ⏳ Pendente
      │ NÃO está em vigor, ou atende ao critério
      ▼
   ✅ ACEITO
```

---

## Perguntas Frequentes

**Votei em um personagem e tentei entrar com outro. Isso funciona?**

Depende da configuração definida pelo clã. Alguns clãs consideram apenas o personagem utilizado no voto, enquanto outros
podem considerar também o personagem principal ou outros personagens vinculados à mesma conta.

---

**O clã pode exigir participação em mais de um BC?**

Sim. O Admin pode configurar a quantidade mínima de eventos recentes em que o jogador precisa ter participado para ser
elegível ao alistamento automático.

---

**Votar como Piloto conta como participação?**

Sim. Quando permitido pelas configurações do clã, votos registrados através da opção Piloto também podem ser
considerados para validação da participação nos eventos.

---

**Como funciona a verificação de participação em PvP (snapshots)?**

O sistema analisa as últimas N snapshots de localização capturadas para o personagem. Se ele aparecer em pelo menos X
delas dentro de um dos locais e horários configurados pelo clã, a verificação é aprovada. Caso contrário, o alistamento
fica pendente (ou é rejeitado, se o clã configurou a política de ausência offline como "Rejeitar") até que as
condições sejam atendidas.

---

**Meu clã ativou voto BC, voto PvP e participação em PvP ao mesmo tempo — preciso atender às três?**

Depende da opção **Combinação das regras** configurada pelo Admin do clã: no modo **E** (padrão), sim, é preciso
atender a todas as regras ativas. No modo **OU**, basta atender a uma delas.

---

**PvP Ativo é a mesma coisa que "Exigir participação em PvP"?**

Não. São regras diferentes e independentes. "Exigir participação em PvP" analisa o histórico de snapshots de
localização ao longo do tempo. "PvP Ativo" é um filtro à parte, que só vale durante a janela de horário de um
evento de PvP do dia, e exige que o personagem esteja em um grupo (ou tenha confirmado presença) naquele evento
específico — mesmo que ele já tenha sido aprovado pelas outras regras.

---

**O que é blacklist e como ela se relaciona com a whitelist?**

Blacklist é o oposto da whitelist: nicks na blacklist são automaticamente **rejeitados** ou deixados **pendentes**
(conforme a ação configurada pelo Admin), antes mesmo de qualquer outra verificação. Se um nick estiver nas duas
listas, a blacklist prevalece, pois é verificada primeiro.
