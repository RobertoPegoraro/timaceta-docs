# Escalação de BC

A **Escalação de BC** é uma funcionalidade opcional dentro do Bless Castle — alguns clãs podem não tê-la ativada. Quando disponível, ela permite organizar **previamente** quem vai jogar onde durante o evento: clã, setor, função (Valhalla, Coordenador, Grupo ou Buff) e piloto de cada personagem.

::: info Funcionalidade opcional
Se o seu clã não tiver ativado a Escalação de BC, nenhuma opção relacionada a ela aparece nas telas de evento.
:::

---

## Quem pode montar e quem só consulta

- **Montar a escalação** (criar setores, grupos, definir coordenadores, buffs e pilotos): **Admin** ou **Coordenador de BC**.
- **Consultar a própria posição**: qualquer membro, através da tela **Minha Escalação** — mas **somente depois que a escalação for publicada pela primeira vez**. Antes da primeira publicação, ninguém além de quem está montando vê qualquer informação, nem mesmo quem já está alocado no rascunho.

---

## Passo a passo da montagem

### 1. Escolher os clãs

Na tela principal da Escalação, escolha o **Clã Primário** e o **Clã Secundário** do evento. Esses clãs são vinculados aos clãs reais já cadastrados no sistema (os mesmos usados em outras partes do app).

::: tip
Se a escalação do evento ainda não tiver sido iniciada, o app pode sugerir **copiar a estrutura do evento de BC anterior** como ponto de partida. Veja mais em [Recursos extras](#recursos-extras-para-quem-administra).
:::

### 2. Escolher um Setor

Depois de escolher o clã de cada lado, ficam disponíveis os **4 Setores**: **A**, **B**, **C** e **D**. Toque em um setor para começar a organizá-lo.

### 3. Configurar o Setor

Dentro de cada setor, você define:

- **Coordenador do setor** — busque pelo nome. Qualquer usuário ativo do clã pode ser escolhido como coordenador, **não é necessário** que a pessoa tenha o cargo de Coordenador de BC.
- **Valhalla** — escolha a posição: **Frente**, **Fundo**, **Esquerda** ou **Direita**.
- **Descrição livre do setor** — um campo de texto opcional para observações (pode ser editado a qualquer momento).
- **Buffs do setor** — personagens de apoio que **não fazem parte de um grupo fixo**, adicionados diretamente ao setor.

### 4. Criar Grupos dentro do setor

Dentro do setor, você cria os grupos de jogo:

- Até **5 personagens** por grupo
- Um **líder** do grupo
- Um **piloto** para cada personagem
- **Descrição livre** do grupo (campo opcional)
- Até **5 "buffs do grupo"** — personagens de apoio vinculados especificamente àquele grupo

::: tip Diferença entre buff de setor e buff de grupo
Um buff de setor apoia o setor como um todo. Já um buff de grupo é vinculado a um grupo específico — e, ao contrário dos demais personagens escalados, **o mesmo buff de grupo pode apoiar vários grupos ao mesmo tempo**.
:::

---

## Como escolher um personagem

Ao adicionar um personagem (em um grupo ou como buff), a busca permite:

- Filtrar por **confirmados** na votação do evento
- Filtrar por **classe**
- Ordenar pelo indicador de **Score** (de 0 a 5 estrelas)

### O que é o Score

O Score representa a força do personagem e é calculado a partir de:

- **Nível** do personagem
- Três **relíquias** específicas: **Babel**, **Midranda** e **Draxos**
- Cinco itens de **equipamento**: **Verthex de Ataque**, **Armadura Verthex**, **Luvas Greedy**, **Bracelete da Dama Flamejante** e **Amuleto do Yag**

Quanto mais desses itens o personagem tiver e quanto maior o nível, mais estrelas aparecem no indicador.

---

## Piloto

Sempre que um personagem é adicionado à escalação (em um grupo ou como buff), o sistema **sugere automaticamente um piloto**, com base em quem confirmou presença para aquele personagem na votação do evento.

- A sugestão pode ser **trocada manualmente a qualquer momento**, inclusive depois de a escalação já ter sido publicada.
- Existe também a opção de escalar um **Piloto Externo** — usada quando quem vai jogar aquele personagem **não tem conta no app**.

---

## Regras de unicidade e conflitos

Para manter a organização consistente, o sistema aplica as seguintes regras dentro de uma mesma escalação:

- Um mesmo **personagem** só pode estar em **um único lugar** da escalação inteira (um grupo ou um buff de setor). A exceção é o **buff de grupo**, que pode se repetir em vários grupos.
- Um mesmo **piloto** só pode pilotar **um personagem "fixo" por vez** (membro de grupo ou buff de setor). Buffs de grupo têm uma regra própria mais flexível: o mesmo piloto pode buffar vários grupos, desde que seja sempre o mesmo personagem.
- Um mesmo **coordenador** só pode coordenar **um setor**.

Quando há conflito, o sistema avisa. Dependendo do tipo de conflito, o comportamento muda:

- **Conflito de personagem** ou de **coordenador**: a ação é **bloqueada** — você precisa resolver o conflito antes de continuar.
- **Conflito de piloto** ao adicionar um personagem a um grupo ou buff: a ação **não é bloqueada** — o personagem é adicionado normalmente, porém **sem piloto designado**, e você recebe um aviso para revisar depois. Já ao **trocar manualmente** o piloto de alguém que já está na escalação, o sistema bloqueia se detectar conflito, já que essa é uma decisão consciente.

---

## Revisão Final

A tela de **Revisão Final** reúne tudo o que foi montado — todos os setores e grupos dos dois clãs — em um único lugar, e sinaliza pendências como:

- Setor sem coordenador
- Grupo incompleto ou sem líder definido
- Personagem sem piloto
- Pessoas que confirmaram presença no evento, mas ficaram de fora da escalação

::: warning Pendências são apenas avisos
As pendências mostradas na Revisão Final **nunca bloqueiam a publicação**. Elas servem só para ajudar a revisar antes de publicar.
:::

---

## Publicar

Ao publicar a escalação:

1. Ela fica **visível para todos os membros** — cada um vê apenas a própria posição.
2. **Notificações automáticas** são enviadas a cada piloto designado, avisando que:
   - Foi **escalado** (primeira vez que aparece na escalação publicada)
   - Sua **escalação mudou** (personagem, clã ou setor diferente do que estava antes)
   - Foi **removido** da escalação
3. O sistema tenta **sincronizar automaticamente com o TeamSpeak** do clã. Se essa sincronização falhar, é exibido apenas um **aviso** — a publicação **não é desfeita**.

Você pode publicar quantas vezes forem necessárias depois da primeira vez, sempre que fizer alterações na escalação.

---

## Minha Escalação

**Minha Escalação** é a tela que qualquer membro acessa (por um ícone na lista de eventos) para consultar a própria posição no evento. Ela só mostra informações **depois da primeira publicação**.

Nela você vê:

- **Clã** em que está escalado
- **Setor**
- Se você é o **coordenador** do setor
- Se você é o **líder** do grupo
- Seus **colegas de grupo**
- Se você é um **buff** (e de quais grupos, quando for o caso)
- A posição do **Valhalla**
- As **descrições** livres de setor e de grupo

---

## Recursos extras para quem administra

- **Copiar do evento anterior** — ao montar a escalação de um novo evento, o app pode sugerir reaproveitar a estrutura (setores, coordenadores, Valhalla, descrições e grupos) do último evento de BC que teve escalação montada, mantendo apenas quem confirmou presença no evento atual.
- **Recalcular índice** — uma ferramenta de manutenção que reconstrói as verificações de conflito do zero, útil caso algo pareça dessincronizado (por exemplo, um conflito que não deveria existir, ou uma alocação que não some da tela).
- **Exportar "Falta solicitar clã"** — um recurso que gera uma lista, pronta para compartilhar via WhatsApp, de quem está escalado no evento mas ainda não é membro efetivo do clã dentro do jogo — útil para cobrar a entrada dessas pessoas no clã.
