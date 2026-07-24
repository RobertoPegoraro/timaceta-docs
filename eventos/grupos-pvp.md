# PvP — Votação e Grupos

O **PvP** é um módulo próprio no menu lateral, separado do Bless Castle. Ele tem seu próprio formulário de evento, sua própria votação (feita por personagem) e seus próprios grupos.

::: info Bless Castle é um módulo separado
Se você procura o evento de Bless Castle, veja [Bless Castle — Eventos e Votação](/eventos/). Este guia cobre apenas o módulo **PvP**.
:::

## Como acessar

1. Abra o menu lateral (☰)
2. Toque em **PvP**
3. Você verá a **lista de eventos de PvP** do clã

A lista de eventos é só o ponto de partida — os grupos de um evento específico só aparecem depois que você abre esse evento, seja tocando no ícone dedicado de grupos, seja automaticamente após confirmar presença votando **Sim**.

---

## Votação: por personagem

No PvP, a votação é feita **por personagem**, não por usuário. Cada personagem seu tem seu próprio voto dentro do evento. Você pode confirmar **Sim** em apenas **um personagem por vez** — se quiser trocar qual personagem vai levar ao evento, desfaça a confirmação anterior antes de confirmar outro.

---

## Criar e gerenciar um evento de PvP (Coordenador PvP / Admin)

### Criar um evento

1. Na lista de eventos de PvP, toque em **+** (adicionar)
2. Preencha:
   - **Descrição** do evento
   - **Clã Primário** — campo obrigatório
   - **Clã Secundário** — opcional
   - **Data**
   - Se o evento está **ativo**
3. Toque em **Salvar**

Repare que o formulário de PvP não tem planilha do Google Sheets, horário de início nem opção de interservidor — esses campos são exclusivos do Bless Castle.

### Clã Primário e Clã Secundário no mesmo evento

Quando um evento tem os dois clãs configurados, o sistema organiza as confirmações da seguinte forma:

- As confirmações **Sim** são ordenadas por **ordem de chegada**
- Os **65 primeiros** personagens confirmados são considerados como participação **Primária**
- Do **66º ao 130º** confirmado, a participação é considerada **Secundária**

Essa divisão influencia diretamente como os grupos do evento são organizados entre os dois clãs.

---

## Grupos

Depois de aberto o evento, existem dois tipos de grupo:

### Grupo Normal

- De **3 a 5 personagens** — não precisa estar cheio para ser válido
- Gerenciado por **Admin**, **Coordenador de PvP**, ou um **gerenciador** designado especificamente para aquele grupo (esse papel pode ser passado para outra pessoa a qualquer momento)

### Grupo Mágico

- Aceita apenas personagens das classes **Sacerdotisa**, **Mago** e **Xamã**
- Não tem tamanho fixo
- É **único**: só pode existir **um Grupo Mágico por clã** em cada evento
- **Não tem gerenciador** — qualquer dono de personagem de uma das três classes mágicas pode se adicionar diretamente ao grupo

### Limites por clã, em cada evento

| Limite | Valor |
|---|---|
| Personagens confirmados por clã | Até 65 |
| Grupos por clã (normais + mágico somados) | Até 13 |

::: warning Regras de composição
- Um mesmo nick **não pode estar em dois grupos diferentes** do mesmo evento ao mesmo tempo
- Se dois gerenciadores editarem o mesmo grupo ao mesmo tempo, o sistema detecta o conflito e avisa antes de salvar, evitando sobrescrever dados
:::

---

## Sistema de Piloto

Cada personagem escalado em um grupo tem um **piloto** — a pessoa que efetivamente vai jogar aquele personagem durante o evento.

- O piloto é **sugerido automaticamente** com base em quem confirmou presença para aquele personagem (ou, quando não há confirmação clara, com base no dono ou personagem principal)
- Pode ser **trocado manualmente** a qualquer momento
- Quem está pilotando pode **sair da função** quando quiser

---

## Sistema de Solicitações

Um membro pode **pedir para entrar** em um Grupo Normal usando seu próprio personagem. Quem gerencia o grupo (Admin, Coordenador de PvP ou o gerenciador designado) decide se **aceita** ou **rejeita** o pedido.

Se o grupo lotar antes da solicitação ser avaliada, as solicitações pendentes são **automaticamente rejeitadas**.

---

## Notificações

Você recebe uma **notificação push automática**:

- Quando é **adicionado a um grupo**
- Quando é **designado como piloto** de um personagem

---

## Proteção contra print de tela

Dentro das telas de grupo, usuários que **não** são Admin ou Coordenador de PvP não conseguem tirar captura de tela. Essa proteção existe para preservar os dados de outros membros exibidos nos grupos.

---

## Telas administrativas (Admin / Coordenador de PvP)

Além da gestão de grupos, existem duas telas de apoio voltadas para quem administra o PvP:

- **Resumo de confirmações** — contagem de votos SIM/NÃO e percentuais do evento
- **Lista geral de participações** — visão consolidada de participações em eventos de PvP
