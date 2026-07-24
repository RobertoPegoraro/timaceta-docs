# Regras de Aceite e Rejeição

Esta página detalha todas as regras verificadas pelo sistema antes de aceitar ou rejeitar um alistamento.

## Regras em ordem de verificação

As regras são verificadas na seguinte ordem. Assim que uma falha é encontrada, o processo para:

### Regra 1 — Personagem cadastrado no app

**O que verifica:** Se o nick do personagem existe no banco de dados do Timaceta.

**Como cumprir:** [Cadastre seu personagem](/personagens/) no app com o nick **exatamente igual** ao do Painel (maiúsculas e minúsculas importam).

**O que acontece se falhar:**
- Removido da fila silenciosamente (sem notificação)
- Sem mensagem de erro — o personagem simplesmente não entra

---

### Regra 2 — Usuário ativo no app

**O que verifica:** Se existe um usuário do app com a conta ativa vinculado ao personagem cadastrado.

**Como cumprir:** Ter uma conta ativa no Timaceta vinculada ao personagem.

**O que acontece se falhar:**
- Removido da fila silenciosamente (sem notificação)

---

### Regra 3 — Nível mínimo do clã

**O que verifica:** Se o nível do personagem é maior ou igual ao nível mínimo configurado para o clã.

**Como cumprir:** Ter o nível exigido. O nível mínimo de cada clã é definido pelo Admin.

**O que acontece se falhar:**
- Rejeitado e removido da fila
- Notificação enviada:
  > *"[Nick] não possui o nível mínimo exigido pelo clã [NomeCla]"*

---

### Regra 4 — Cadastro atualizado

**O que verifica:** Se o cadastro do personagem no app foi atualizado nos **últimos 30 dias**.

**Como cumprir:** Periodicamente, acesse o app → Personagens → selecione o personagem → toque em **Salvar** (mesmo sem alterar nada). Isso atualiza a data de verificação.

**O que acontece se falhar:**
- Rejeitado e removido da fila
- Notificação enviada:
  > *"Cadastro desatualizado. Acesse o app, vá em Personagens e clique em Salvar."*

::: tip Dica
Configure um lembrete mensal para atualizar seu personagem no app. Basta abrir o personagem e salvar — leva menos de 10 segundos.
:::

---

### Regra 5 — Participação em eventos de BC (opcional e configurável)

**O que verifica:** Se o clã tiver a exigência de participação em Bless Castle ativada, o sistema verifica se você **atende aos critérios de participação** configurados pelo Admin. Não é uma regra binária simples — é um subsistema com várias opções:

- **Número de eventos considerados:** o Admin define quantos eventos de BC recentes entram na conta (padrão: 1, o último evento encerrado).
- **Quatro regras independentes**, cada uma ativável separadamente pelo Admin:
  - Quem **votou Sim** no evento
  - Quem **votou Não** no evento
  - Quem teve **voto Sim registrado como piloto** de outro personagem
  - Quem teve **voto Não registrado como piloto** de outro personagem
- **O que cada regra libera:** para cada uma das quatro regras acima, o Admin escolhe quem fica autorizado a entrar — apenas aquele personagem, todos os personagens do usuário, apenas o personagem principal, o personagem + o principal, ou nenhum personagem.

**Aplicação:** Esta regra só existe se o Admin do clã ativou a exigência de participação em BC.

**Como cumprir:** Vote no evento de BC pelo app (seção Eventos → selecione o BC → registre seu voto). Se o clã liberar por voto de piloto, o voto do piloto do seu personagem principal pode contar (dependendo da regra configurada).

**O que acontece se falhar:**
- Status **PENDENTE** (não é rejeitado — fica na fila)
- Uma notificação push é enviada (máximo 1 vez a cada 6 horas):
  > *"{nick} não atende aos critérios de participação nos últimos {n} evento(s) de Bless Castle configurados. Entre em contato com a liderança."*
- Após atender aos critérios, será aceito automaticamente no próximo ciclo

::: warning Bloqueio por troca de personagem principal
Se você trocou de personagem principal recentemente, o alistamento desse personagem fica **bloqueado por 24 horas**, independente do voto, com notificação própria avisando do bloqueio temporário.
:::

---

### Regra adicional — Participação em eventos de PvP (opcional e configurável)

**O que verifica:** O clã pode configurar, separadamente do BC, uma exigência de participação em eventos de **PvP** — voto no evento e/ou presença confirmada. A estrutura de regras (número de eventos, quem libera o quê) segue a mesma lógica da Regra 5.

**Combinação com a regra de BC:** se o clã exigir BC e PvP ao mesmo tempo, o Admin escolhe se as duas regras se combinam por **E** (as duas precisam ser cumpridas) ou por **OU** (uma das duas já basta).

**O que acontece se falhar:** Status **PENDENTE**, com notificação própria de pendência por PvP.

---

### Regra adicional — Janelas de horário "PvP Ativo" e "Escalação BC"

Independente das regras de voto, o clã pode ativar janelas de horário que suspendem temporariamente o alistamento de quem não está engajado no momento:

- **PvP Ativo:** em horários configurados, só passam quem está em grupo de PvP ou com presença confirmada naquele momento.
- **Escalação BC:** nos dias de evento de BC, das **10h às 14h30 (horário de Brasília)**, só passa quem está escalado na Escalação de BC do dia.

Fora dessas janelas as regras normais (Regra 5 e regra de PvP) voltam a valer normalmente.

---

### Regra adicional — Whitelist e blacklist de nicks

O Admin pode cadastrar, por clã:

- **Whitelist:** nicks **sempre aceitos**, ignorando as demais regras de participação
- **Blacklist:** nicks **sempre rejeitados ou pendentes**, independente de atenderem às outras regras

---

## Tabela Resumo

| Regra | Configurável | Resultado se falhar | Notificação |
|---|---|---|---|
| Personagem no app | Não | Removido silenciosamente | Nenhuma |
| Usuário ativo | Não | Removido silenciosamente | Nenhuma |
| Nível mínimo | Sim (por clã) | Rejeitado e removido | Sim |
| Cadastro ≤ 30 dias | Não | Rejeitado e removido | Sim |
| Participação em BC | Sim (por clã) | Pendente (na fila) | Sim (6h/vez) |
| Voto em PvP | Sim (por clã) | Pendente (na fila) | Sim |
| Presença em PvP (snapshot) | Sim (por clã) | Pendente ou rejeitado (na fila) | Sim |
| Janela "PvP Ativo" | Sim (por clã) | Pendente (aguarda passar a janela) | Sim |
| Janela "Escalação BC" | Sim (por clã) | Pendente (aguarda passar a janela) | Sim |
| Blacklist de nick | Sim (por clã) | Pendente ou rejeitado | Sim |
| Whitelist de nick | Sim (por clã) | Aceito direto (ignora demais regras) | Sim |
| Troca recente de personagem principal | Não (comportamento fixo, 24h) | Bloqueado temporariamente | Sim |

---

## Situação de múltiplos personagens e piloto

Se você tem **mais de um personagem**, o voto registrado como "piloto" de outro personagem **não conta automaticamente para todos os seus personagens**. Ele só é considerado como fallback, e apenas quando **não existe voto pelo nick do próprio personagem**.

**O que fica liberado depende da regra configurada pelo clã** para o voto de piloto — o Admin escolhe entre: só aquele personagem específico, todos os personagens do usuário, só o personagem principal, personagem + principal, ou nenhum (ou seja, o voto de piloto pode não liberar ninguém, dependendo da configuração).

**O que você precisa fazer:**
1. Cadastrar **todos os seus personagens** no app Timaceta
2. Todos devem estar vinculados à **mesma conta de usuário**
3. De preferência, votar **com o nick de cada personagem** diretamente — depender do voto de piloto só funciona se o clã tiver configurado essa regra para liberar o personagem em questão

---

## Por que meu personagem está sendo rejeitado se tudo parece certo?

Checklist:

- [ ] O nick está **exatamente igual** ao do Painel? (maiúsculas, espaços, acentos)
- [ ] Sua conta no Timaceta está **ativa**? (peça a um Admin para verificar)
- [ ] Você **salvou** o personagem nos **últimos 30 dias**?
- [ ] Seu nível atinge o **mínimo configurado** para o clã?
- [ ] Se o clã exige: você **atende aos critérios de participação em BC e/ou PvP** configurados?
- [ ] Seu nick não está em uma **blacklist** do clã?
- [ ] Você não trocou de **personagem principal** nas últimas 24 horas?
- [ ] Se houver janela de horário ativa (**PvP Ativo** ou **Escalação BC**): você está engajado no momento certo?

Se tudo estiver correto e o problema persistir, entre em contato com um Admin.
