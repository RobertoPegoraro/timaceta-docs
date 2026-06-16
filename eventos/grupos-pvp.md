# PvP — Votação, Grupos e Pilotos

O módulo de PvP funciona de forma diferente dos eventos de BC: a votação é feita **por personagem** (não por conta), os
personagens confirmados são organizados em **grupos por clã**, e cada personagem pode ter um **piloto** — o usuário que
efetivamente vai jogar com ele durante o evento.

## Como acessar

1. Abra o menu lateral (☰)
2. Toque em **PvP**
3. Você verá a lista de eventos PvP cadastrados

---

## Estrutura de um evento PvP

Cada evento PvP tem:

- **Descrição** e **Data**
- **Clã Primário** (obrigatório)
- **Clã Secundário** (opcional) — usado quando o evento envolve dois clãs (ex.: aliança)
- Status **Ativo** / **Inativo**

Cada um dos dois clãs tem um limite de **65 personagens confirmados**.

::: info Criar ou editar um evento PvP
Reservado a **Admin** e **Coordenador PvP**. Na lista de eventos, toque em **+** para criar ou no ícone de lápis para
editar um evento existente. Desativar um evento (`Ativo` = não) impede novos votos, mas mantém grupos e histórico
visíveis.
:::

---

## Votar em um evento PvP

A votação é feita **por personagem**: se você tem mais de um personagem cadastrado (próprio ou compartilhado), escolhe
qual deles vai participar daquele evento.

1. Na lista de eventos, toque no evento (precisa estar **ativo**)
2. Selecione o **personagem** que vai participar
3. Responda:
    - **Sim** — esse personagem vai participar. Pode incluir um **comentário** opcional (até 150 caracteres)
    - **Não** — esse personagem não vai participar. É obrigatório informar uma **justificativa** (até 150 caracteres)
4. Toque em **Salvar**

::: info Um "Sim" por vez
Você só pode manter **um personagem confirmado (Sim) por evento**. Ao confirmar presença em outro personagem seu, a
confirmação anterior é removida automaticamente.
:::

::: tip Editar seu voto
Reabra a votação do mesmo evento para o mesmo personagem — sua resposta anterior aparece preenchida e pode ser
alterada livremente enquanto o evento estiver ativo.
:::

Depois de votar **Sim**, o app pergunta se você quer **ver os grupos** do evento.

### Limite de 65 confirmados por clã

Se o personagem que você está confirmando já estiver **dentro de um grupo** de um clã que já atingiu **65
confirmados**, o voto é bloqueado e aparece um aviso explicando a situação, com um botão para abrir os grupos e ver as
opções. Personagens que ainda não foram colocados em nenhum grupo não são afetados por esse limite no momento do voto
— o limite é validado quando o personagem já está alocado em um grupo daquele clã.

---

## Listagem de Grupos

A tela de grupos mostra todos os grupos do evento, organizados nesta ordem:

1. Grupos **Normais** do Clã Primário
2. **Grupo Mágico** do Clã Primário (se existir)
3. Grupos **Normais** do Clã Secundário
4. **Grupo Mágico** do Clã Secundário (se existir)

No topo da tela, um resumo mostra o progresso de confirmações:

> `X/65 Primário · Y/65 Secundário · Z Confirmados`

Esse contador considera apenas personagens cujo **piloto atual** já confirmou presença (votou Sim) para aquele
personagem especificamente — trocar o piloto de um personagem confirmado zera essa confirmação até que o novo piloto
vote Sim.

Cada integrante listado em um grupo mostra:

- **Status** — `SIM` (verde), `NÃO` (vermelho) ou `?` (cinza, sem voto do piloto atual)
- **Nick e classe** do personagem
- **Piloto designado**, se houver (destacado em verde quando o piloto é você)

Seu próprio personagem (ou um compartilhado com você) aparece destacado em **azul/índigo**.

::: tip Quem pode ver um grupo
Qualquer membro pode ver grupos onde tenha um personagem (próprio ou compartilhado) ou onde seja piloto de algum
integrante. Admin e Coordenador PvP — e quem criou o grupo — veem e gerenciam todos os grupos do evento.
:::

---

## Tipos de Grupo

### Grupo Normal

- Até **5 personagens**
- Pertence a um dos clãs do evento (Primário ou Secundário)

### Grupo Mágico

- **Sem limite** de integrantes
- Aceita apenas personagens das classes de suporte: **Sacerdotisa, Mago e Xamã**
- Apenas **um Grupo Mágico por clã, por evento**
- Identificado visualmente com cabeçalho roxo e ícone ✨
- Não tem um "gerenciador" fixo: qualquer pessoa pode abrir e editar o grupo, mas só pode adicionar ou remover **o
  próprio personagem mágico** (ou de alguém que compartilhe com ela) — quem criou o grupo não tem privilégio extra
  aqui
- Apenas **Admin** e **Coordenador PvP** podem adicionar ou remover **qualquer** personagem mágico, de qualquer
  membro — e são os únicos que também podem designar/alterar o piloto de um personagem que não é seu; quem criou o
  grupo não tem essa exceção

---

## Criar e Gerenciar um Grupo

::: tip Criar um grupo é aberto a todo membro
Diferente da criação de **eventos** (restrita a Admin/Coordenador PvP), **qualquer membro ativo** pode criar um novo
grupo PvP pelo botão **+** na tela de Grupos. Quem cria o grupo passa a ser seu gerenciador, com os mesmos direitos de
edição de um Coordenador **sobre aquele grupo específico** — mas não pode excluí-lo (exclusão é exclusiva de Admin e
Coordenador PvP).
:::

1. Na tela de Grupos, toque em **+**
2. Escolha o **Tipo de Grupo**: Normal ou Mágico
3. Se o evento tiver Clã Secundário, escolha a qual clã o grupo (Normal) pertence
4. Toque em **Adicionar Personagem**, digite o nick (mínimo 2 caracteres) e selecione o personagem encontrado
5. Toque em **Salvar**

::: warning Regras de composição
- O **tipo de grupo** e o **clã** não podem ser alterados depois que o grupo é criado
- Um personagem **não pode estar em dois grupos** do mesmo evento — se já estiver, o app mostra em qual grupo ele está
  e bloqueia a seleção
- No Grupo Mágico, a busca normalmente só retorna **seus próprios personagens** (ou compartilhados com você) das
  classes Sacerdotisa, Mago ou Xamã — exceto para **Admin** e **Coordenador PvP**, que podem buscar e adicionar o
  personagem mágico de **qualquer membro** (quem criou o grupo não tem essa exceção)
- Se o personagem já tiver uma confirmação ativa (piloto votou Sim) e o clã de destino já estiver com 65 confirmados,
  a adição é bloqueada
:::

### Quem pode fazer o quê dentro de um grupo

| Ação                                              | Quem pode                                                              |
|-----------------------------------------------------|--------------------------------------------------------------------|
| Adicionar/remover qualquer personagem (Normal)       | Admin, Coordenador PvP, quem criou o grupo                         |
| Remover o próprio personagem (ou compartilhado)      | Qualquer membro vinculado a esse personagem                        |
| Designar/alterar o piloto do próprio personagem      | Dono ou usuário com o personagem compartilhado                     |
| Designar/alterar piloto de qualquer integrante (Normal) | Admin, Coordenador PvP, quem criou o grupo                      |
| Sair como piloto (remover-se da função)              | O próprio piloto designado                                          |
| Adicionar/remover qualquer personagem (Mágico)        | Admin, Coordenador PvP                                              |
| Adicionar/remover o próprio personagem (Mágico)       | Dono ou usuário com o personagem compartilhado                     |
| Designar/alterar piloto de qualquer integrante (Mágico) | Admin, Coordenador PvP                                           |
| Excluir o grupo inteiro                              | Apenas Admin e Coordenador PvP                                      |

::: info Conflito de edição
Se duas pessoas editarem o mesmo grupo ao mesmo tempo, quem salvar depois recebe um aviso de conflito e precisa
reabrir a tela para carregar os dados atualizados antes de salvar novamente.
:::

---

## Pilotos

Um **piloto** é o usuário que efetivamente vai jogar com aquele personagem no evento — útil quando o personagem é
compartilhado entre duas contas e só uma delas vai participar daquela vez, ou quando alguém assume temporariamente o
personagem de outra pessoa.

### Designação automática

Ao adicionar um personagem a um grupo, o piloto é sugerido automaticamente seguindo esta prioridade:

1. Se alguém já votou **Sim** para esse personagem nesse evento → essa pessoa é o piloto. Havendo mais de um voto Sim
   para o mesmo personagem (caso de compartilhamento), prioriza quem tem o personagem marcado como **Principal**; se
   ainda houver empate, prioriza o **dono** do cadastro
2. Se ninguém votou Sim ainda → prioriza quem tem o personagem marcado como **Principal**; sem isso, o **dono** do
   cadastro

### Designação manual

1. No card do personagem dentro do grupo, toque em **Designar Piloto** (ou **Alterar Piloto**)
2. Busque pelo nome do usuário (mínimo 2 caracteres, apenas usuários ativos)
3. Selecione — um usuário não pode pilotar **dois personagens no mesmo grupo** ao mesmo tempo

### Sair como piloto

Quem está designado como piloto de um personagem pode tocar em **Sair como Piloto** para se remover da função. Isso
evita que o sistema designe automaticamente o mesmo piloto de novo ao reabrir a tela — a vaga fica sem piloto até
alguém escolher manualmente um novo.

---

## Exportar lista de grupos

Disponível para **Admin** e **Coordenador PvP**, no ícone de **compartilhar** da tela de Grupos. Gera um texto
formatado com todos os grupos, pilotos e status de confirmação, pronto para colar no WhatsApp ou outro app.

---

## Tela de Confirmações

Acessível para **Admin** e **Coordenador PvP** pelo ícone de **lista de verificação** na tela de Grupos.

Mostra:

- O mesmo resumo de progresso (`X/65 Primário · Y/65 Secundário · Z Confirmados`)
- Filtro **Todos / Sim / Não**
- Lista de **todos os votos registrados** no evento (incluindo votos de pilotos anteriores), com nick, classe, nível,
  nome do votante, comentário/justificativa e status

::: info
Essa lista mostra o histórico completo de votos — diferente do contador de progresso no topo, que reflete apenas o
piloto **atual** de cada personagem.
:::

---

## Notificações automáticas do PvP

| Evento                                  | Quem recebe                                       |
|-------------------------------------------|---------------------------------------------------|
| Novo evento PvP criado/reaberto            | Todos os usuários ativos                          |
| Personagem adicionado a um grupo           | Todos os usuários vinculados a esse personagem    |
| Piloto designado ou alterado               | O usuário designado como piloto                   |

Além das automáticas, Admin e Coordenador PvP podem enviar uma **notificação manual segmentada** (quem confirmou
participação x quem não confirmou) pelo menu **Notificações → Notificação PvP** — veja
[Notificações](/admin/notificacoes).

---

## Resumo de permissões

| Ação                                          | Membro                          | Coordenador PvP | Admin |
|--------------------------------------------------|----------------------------------|:---------------:|:-----:|
| Votar pelo próprio personagem                     | ✅                                |        ✅        |   ✅   |
| Ver grupos onde tem personagem/é piloto           | ✅                                |        ✅        |   ✅   |
| Ver **todos** os grupos do evento                 | ❌                                |        ✅        |   ✅   |
| Criar evento PvP                                  | ❌                                |        ✅        |   ✅   |
| Criar um grupo PvP e gerenciá-lo                  | ✅ (só o grupo que criou)         |        ✅        |   ✅   |
| Gerenciar **qualquer** grupo PvP                  | ❌                                |        ✅        |   ✅   |
| Excluir grupo PvP                                 | ❌                                |        ✅        |   ✅   |
| Designar piloto do próprio personagem             | ✅                                |        ✅        |   ✅   |
| Designar piloto de qualquer personagem            | ❌ (exceto no grupo que criou)    |        ✅        |   ✅   |
| Ver tela de Confirmações                          | ❌                                |        ✅        |   ✅   |
| Exportar lista de grupos                          | ❌                                |        ✅        |   ✅   |
