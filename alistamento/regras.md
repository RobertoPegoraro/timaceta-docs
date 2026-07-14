# Regras de Aceite e Rejeição

Esta página detalha as regras verificadas pelo sistema antes de aceitar ou rejeitar um alistamento, na ordem em que
são checadas.

## Regras em ordem de verificação

### Regra 0 — Blacklist (opcional)

Esta regra existe apenas quando o Admin cadastra nicks na blacklist do clã. É a **primeira** coisa verificada — se o
nick do alistado estiver na lista, nenhuma das regras seguintes (nem a whitelist) é avaliada.

O resultado depende da **ação** configurada para a blacklist, que vale para todos os nicks da lista:

- **Rejeitar** — o personagem é removido automaticamente da fila;
- **Pendente** — o alistamento fica pendente aguardando aprovação manual da liderança.

Em ambos os casos, o dono do personagem é notificado do motivo. Coordenadores/admins só são notificados quando a
ação é "Pendente" (e a opção de notificar coordenadores estiver ativa).

### Regra 0.5 — Whitelist (opcional)

Esta regra existe apenas quando o Admin cadastra nicks na whitelist do clã. Um nick na whitelist é **aceito
imediatamente**, sem passar pelas Regras 1 a 7 abaixo — inclusive nível mínimo, cadastro atualizado, voto BC, voto
PvP, participação em PvP e PvP Ativo.

### Regra 1 — Personagem cadastrado no app

O personagem precisa existir no APP Timaceta.

### Regra 2 — Usuário ativo no app

É necessário existir uma conta ativa vinculada ao personagem.

### Regra 3 — Nível mínimo do clã

O personagem deve atender ao nível mínimo configurado pelo clã.

### Regra 4 — Cadastro atualizado

O cadastro do personagem deve ter sido atualizado nos últimos 30 dias.

### Regra 5 — Voto BC, voto PvP e participação em PvP, combinados por E/OU (opcional)

Estas três regras só existem quando o clã ativa a respectiva validação, e podem ser combinadas de duas formas
(opção **Combinação das regras**, configurada pelo Admin):

- **E** (padrão) — o personagem precisa atender a **todas** as regras ativas;
- **OU** — basta atender a **uma** das regras ativas.

Se nenhuma das três estiver ativa, esta etapa é sempre aprovada. Se só uma estiver ativa, o modo E/OU não faz
diferença.

#### Voto em eventos de BC

Dependendo da configuração do clã, pode ser necessário:

- Ter participado do último BC;
- Ter participado dos últimos 2 BCs;
- Ter participado dos últimos 3 BCs;
- Ou outra quantidade definida pelo Admin.

#### Voto em eventos de PvP

Mesma lógica da regra acima, mas usando os votos registrados nos eventos de PvP em vez dos de BC.

#### Participação em PvP (snapshots)

O sistema verifica se o personagem esteve presente no local correto (subservidor, mapa e horário) durante os eventos de
PvP, com base em **snapshots** de localização capturados periodicamente.

Para ser considerado presente, o personagem precisa aparecer em pelo menos **X snapshots** das últimas **N
capturadas**, conforme configurado pelo Admin. Uma snapshot é válida se o personagem atender a qualquer uma das regras
de localização definidas. O clã também define o que fazer com presenças offline: considerar válido, deixar
pendente, ou **rejeitar automaticamente**.

#### Resultado se as regras da Regra 5 não forem atendidas

- Na maioria dos casos, o alistamento permanece **pendente** e será reavaliado nos próximos ciclos;
- **Exceção:** se especificamente a regra de participação em PvP falhar com a política de offline configurada
  como "Rejeitar", o alistamento é **rejeitado** direto — mesmo no modo OU, se essa for a última regra ativa
  avaliada.
- O personagem não é removido da fila enquanto pendente.

### Regra 6 — PvP Ativo (opcional)

Esta regra é **independente** da combinação E/OU da Regra 5 — funciona como um filtro adicional, avaliado somente
depois que o personagem já foi aprovado pelas Regras 1 a 5. Só entra em vigor quando, simultaneamente: a opção está
ativada no clã, o horário atual está dentro da janela configurada, e existe um evento de PvP ativo do clã marcado
para o dia de hoje.

Quando em vigor, o clã escolhe o critério: **personagem adicionado no grupo** (basta estar no grupo do PvP ativo)
ou **apenas personagens confirmados** (precisa ter confirmado presença/votado Sim).

Caso os requisitos de presença não sejam atendidos:

- O alistamento permanece pendente, mesmo que já tenha sido aprovado pela Regra 5;
- O personagem não é removido da fila;
- O sistema tentará novamente nos próximos ciclos.

Um nick na whitelist (Regra 0.5) dispensa esta verificação.

---

## Tabela Resumo

| Regra                          | Configurável | Combina com E/OU? | Resultado se falhar                          |
|----------------------------------|:------------:|:------------------:|-----------------------------------------------|
| Blacklist                        | Sim          | —                   | Rejeitado ou Pendente (conforme ação)          |
| Whitelist                        | Sim          | —                   | (bypassa tudo — sempre aceito)                 |
| Personagem no app                | Não          | —                   | Removido                                       |
| Usuário ativo                    | Não          | —                   | Removido                                       |
| Nível mínimo                     | Sim          | —                   | Rejeitado                                      |
| Cadastro atualizado              | Não          | —                   | Rejeitado                                      |
| Voto em eventos de BC            | Sim          | Sim                 | Pendente                                       |
| Voto em eventos de PvP           | Sim          | Sim                 | Pendente                                       |
| Participação em PvP (snapshots)  | Sim          | Sim                 | Pendente, ou Rejeitado (política "Rejeitar")   |
| PvP Ativo                        | Sim          | Não (independente)  | Pendente                                       |

::: tip Como ler esta tabela
As três linhas marcadas com "Sim" em **Combina com E/OU** são as únicas afetadas pela opção de combinação de
regras do clã. Todas as demais linhas funcionam sempre da mesma forma, independentemente do modo E/OU escolhido.
Blacklist e Whitelist são checadas antes de qualquer outra regra e, quando se aplicam, decidem o resultado
sozinhas — blacklist tem prioridade se o mesmo nick estiver nas duas listas.
:::

---

## Participação em BCs, personagem principal e personagens alternativos

Alguns clãs exigem participação em eventos de Bless Castle para liberar o alistamento automático.

**Como o sistema encontra o voto:**
O sistema busca primeiro um voto onde o `nick` corresponda ao personagem solicitante. Se não for encontrado, verifica **exclusivamente** se o dono votou como **Piloto** naquele BC. Votos do dono em qualquer outro personagem não são considerados como alternativa.

**Participação:** o personagem solicitante precisa aparecer nos votos com resposta Sim ou Não. Se não houver voto pelo nick, o sistema busca **somente** um voto de Piloto do dono naquele BC — votos do dono em outros personagens não substituem o voto do solicitante.

**Voto decisivo:** somente o BC mais recente define a autorização. Caso o personagem tenha dois votos no mesmo BC (Sim e Não), o **Sim prevalece**. Os BCs anteriores servem apenas para confirmar participação.

Para votos normais (Sim ou Não) do próprio personagem, as opções configuráveis são:

- Apenas o personagem utilizado no voto;
- Apenas o personagem principal;
- O personagem utilizado no voto e o personagem principal;
- Todos os personagens do dono;
- Ou nenhuma associação adicional.

Quando o dono votou como **Piloto**, o clã pode configurar regras distintas para o piloto com Sim e para o piloto com Não. As mesmas opções acima se aplicam, exceto "apenas o personagem que votou" (que não se aplica ao piloto).

O dono é consultado **exclusivamente** para verificar se votou como Piloto — votos do dono em outros personagens não são considerados como alternativa ao voto do solicitante.

Também é possível que o clã exija participação em mais de um BC recente.

Por isso, dois jogadores que participaram do mesmo evento podem ter resultados diferentes, dependendo das regras
configuradas pelo clã.

::: tip Voto em PvP segue a mesma lógica
Tudo o que foi descrito acima para o BC vale igualmente para a regra de **voto em eventos de PvP**, trocando
apenas a coleção de eventos consultada (PvP em vez de BC). A única diferença é que o PvP não tem uma sentinela fixa
de "piloto": quando o dono vota "de piloto" de outro personagem, o voto é salvo com o nick desse outro personagem,
e o sistema busca qualquer voto do mesmo dono naquele evento quando o personagem solicitante não tem voto próprio.
:::

---

## Por que meu personagem está pendente ou sendo rejeitado?

Verifique:

- O nick não está na blacklist do clã?
- O nick está correto?
- Sua conta está ativa?
- O cadastro foi atualizado nos últimos 30 dias?
- O nível atende ao mínimo exigido?
- Você atende às regras de voto BC / voto PvP / participação em PvP configuradas pelo clã — lembrando que, se o
  clã usa combinação **OU**, basta atender a uma delas?
- Se houver um evento de PvP ativo do clã acontecendo agora, dentro da janela de horário configurada: seu
  personagem está no grupo (ou confirmou presença, dependendo da regra do clã) desse evento?
