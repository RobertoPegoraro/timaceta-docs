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

#### ✅ Verificação 1 — Personagem cadastrado no app?

O sistema busca o nick do alistado no banco de dados do Timaceta.

#### ✅ Verificação 2 — Usuário ativo?

O personagem encontrado precisa ter um usuário ativo vinculado.

#### ✅ Verificação 3 — Nível mínimo

O sistema compara o nível do personagem com o mínimo configurado pelo clã.

#### ✅ Verificação 4 — Cadastro atualizado

O cadastro do personagem deve ter sido atualizado nos últimos 30 dias.

#### ✅ Verificação 5 — Participação em eventos de BC (se configurado)

Se o clã tiver ativado a validação de participação em eventos de Bless Castle, o sistema verifica se a conta atende aos
requisitos definidos pelo clã.

Dependendo da configuração, pode ser necessário:

- Ter participado do último BC encerrado;
- Ter participado dos últimos 2 BCs;
- Ter participado dos últimos 3 BCs;
- Ou outra quantidade configurada pelo Admin.

A participação pode ter sido registrada através de um personagem específico ou através da opção Piloto.

- **Não atende aos requisitos configurados** → Status **PENDENTE**
- O pedido permanece na fila e será reavaliado automaticamente nos próximos ciclos.
- Uma notificação push pode ser enviada periodicamente enquanto o alistamento permanecer pendente.

::: tip Votos, personagem principal e personagens alternativos
Dependendo da configuração definida pelo clã, o sistema pode considerar não apenas o personagem utilizado no voto, mas
também seu personagem principal ou outros personagens vinculados à sua conta.

Por esse motivo, um personagem pode ser aceito mesmo que o voto tenha sido realizado por outro personagem da mesma
conta, desde que isso esteja de acordo com as regras configuradas pelo clã.
:::

#### ✅ Verificação 6 — Participação em PvP (se configurado)

Se o clã tiver ativado a validação de participação em PvP, o sistema verifica se o personagem esteve presente no local
do evento durante a janela configurada, com base em **snapshots** de localização capturados periodicamente.

O clã define:

- **Quantas snapshots recentes** serão avaliadas (ex: últimas 10);
- **Quantas presenças** são exigidas dentro dessas snapshots (ex: ao menos 3);
- **Uma ou mais regras de localização**, cada uma com subservidor, mapa e janela de horário.

Uma snapshot é considerada válida se o personagem aparecer em qualquer uma das regras de localização configuradas.

- **Não atende às presenças mínimas** → Status **PENDENTE**
- O pedido permanece na fila e será reavaliado automaticamente nos próximos ciclos.

### 4. Abertura de vagas (se necessário)

Se não houver vagas, o sistema poderá remover membros offline há muito tempo para abrir espaço.

### 5. Aceite dos alistados válidos

Os personagens que atenderem todas as regras serão aceitos automaticamente.

---

## Resumo Visual das Regras

```text
Alistado na fila
      │
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
Atende aos requisitos de participação em BC? (se configurado)
      │ NÃO
      ├────────→ ⏳ Pendente
      │ SIM (ou não exigido)
      ▼
Atende às presenças em PvP? (se configurado)
      │ NÃO
      ├────────→ ⏳ Pendente
      │ SIM (ou não exigido)
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

**Como funciona a verificação de PvP?**

O sistema analisa as últimas N snapshots de localização capturadas para o personagem. Se ele aparecer em pelo menos X
delas dentro de um dos locais e horários configurados pelo clã, a verificação é aprovada. Caso contrário, o alistamento
fica pendente até que as condições sejam atendidas.
