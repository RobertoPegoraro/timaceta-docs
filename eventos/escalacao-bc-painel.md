# Escalação de BC — Painel Web

O **Painel Web** é uma ferramenta separada do app, feita para **Admin** e **Coordenador de BC** montarem a Escalação de BC pelo computador — com arrastar-e-soltar e as duas colunas lado a lado, é bem mais rápido que montar pelo celular. As regras de negócio são **exatamente as mesmas** do app (veja [Escalação de BC](/eventos/escalacao-bc) para as regras completas) — o painel só muda a forma de montar, não o que é permitido.

::: info Ferramenta separada do app
O painel roda no navegador, com login próprio (mesma conta do app). É restrito a **Admin** ou **Coordenador de BC** — mesmo que o login em si seja válido, quem não tiver um desses cargos não consegue entrar.
:::

---

## Acessar o painel

1. Abra o endereço do painel no navegador.
2. Entre com **e-mail/senha**, **Google** ou **Apple** — a mesma conta usada no app.
3. Se a conta não for Admin nem Coordenador de BC, o acesso é negado mesmo com login correto.

Depois de entrar, o menu lateral mostra:

- **Eventos** — lista os eventos de BC, com o botão **Escalação** para abrir o editor de cada um.
- **Contatos** — cadastro reutilizável de pilotos externos (veja [Contatos de pilotos externos](#contatos-de-pilotos-externos) mais abaixo).

---

## Tela do Setor (editor de grupos)

Ao abrir a Escalação de um evento e escolher um setor, a tela se divide em duas colunas:

- **Esquerda** — lista de personagens disponíveis, prontos para arrastar.
- **Direita** — os grupos do setor, coordenador, Valhalla, descrição e buffs do setor.

### Filtros da lista de personagens

- **Confirmados** — mostra só quem confirmou presença (voto Sim) no evento.
- Busca por nick, filtro por classe e ordenação por **Score** (mesmo indicador de estrelas do app).

Por padrão, um personagem já alocado em algum lugar da escalação **some da lista** — assim não dá pra arrastar duplicado sem querer. Se precisar mover alguém que já está escalado, desmarque a opção que oculta os já escalados: arraste normalmente para o novo grupo e o painel pergunta se você quer **mover**.

### Filtro do seletor de piloto

Ao abrir a busca de piloto (clique num personagem ou nos 3 pontos → Alterar piloto), há dois filtros:

- **Confirmados** — só quem confirmou presença no evento.
- **Disponíveis** — oculta quem já está pilotando outra coisa na escalação (vem marcado por padrão).

### Arrastar e soltar

- Arraste um personagem da lista da esquerda para dentro de um grupo, ou para a área de buffs do setor/grupo.
- Um personagem já escalado também pode ser arrastado **de um grupo para outro** diretamente, sem precisar removê-lo antes.
- Um piloto pode ser arrastado do painel de pilotos direto para cima de um personagem, para definir/trocar rapidamente.

### Clique em um piloto já definido

- **Clicar na linha** de um personagem cujo piloto é **Externo** abre direto a modal de edição do nome/WhatsApp daquele externo já preenchida.
- Usar o menu de **3 pontos → Alterar piloto** sempre abre a busca tradicional por usuário cadastrado — mesmo quando o piloto atual é Externo. Use essa opção quando quiser trocar um Externo por um piloto de verdade cadastrado no app.

::: tip
Ao selecionar um piloto Externo pelo cadastro de Contatos, o painel avisa e oferece **mover** se aquele mesmo contato já estiver pilotando outro personagem na escalação — igual acontece com pilotos cadastrados.
:::

### Descrição do grupo x descrição do setor

São dois campos livres **independentes**:

- **Descrição do setor** — fica no topo da tela do setor, junto do coordenador e Valhalla.
- **Descrição do grupo** — fica dentro de cada card de grupo, uma por grupo.

### Remover um personagem, buff ou grupo

Toda remoção (menu de **3 pontos → Remover**) pede **confirmação** antes de aplicar — não existe mais arrastar para uma lixeira, para evitar remoções acidentais.

---

## Contatos de pilotos externos

A tela **Contatos**, no menu lateral, é um cadastro **reutilizável e compartilhado entre clãs** de pessoas que pilotam personagens sem ter conta no app.

- Ao definir um piloto Externo em qualquer personagem, a modal permite **buscar um contato já salvo** ou **cadastrar um novo na hora** — o novo contato já fica salvo para o próximo evento.
- Na tela **Contatos** é possível **editar** nome/telefone de um contato salvo ou **remover** da lista. Remover da lista não afeta pilotos externos já escalados em eventos existentes com aquele nome/telefone.

---

## Instruções por Classe

Disponível no hub da Escalação (botão **Instruções por Classe**, um para cada clã), permite cadastrar um texto de orientação vinculado a um conjunto de classes — por exemplo, "Mago, Arqueiro" → "ficar no fundo do grupo, focar dano à distância". Cada clã (Primário e Secundário) tem sua própria lista de instruções.

---

## Alertas da tela

- **Triângulo "Não publicado"** — aparece ao lado do título quando há alterações ainda não publicadas. Passe o mouse por cima para ver os detalhes.
- **Grupo incompleto** — sinalizado dentro do próprio card do grupo (menos de 5 personagens ou sem líder definido).
- Conflitos de personagem ou piloto já alocado em outro lugar mostram uma mensagem específica, oferecendo **mover** quando aplicável — nunca é permitido duplicar o mesmo personagem ou piloto em dois lugares ao mesmo tempo, seja como integrante de grupo ou como buff.

---

## Revisão Final e Publicar

A tela de **Revisão Final** do painel mostra o mesmo conteúdo do app: setores colapsáveis com nível médio e distribuição por classe, pendências (setor sem coordenador, grupo incompleto, personagem sem piloto, confirmados fora da escalação) e o botão **Publicar**, que dispara as mesmas notificações e a mesma sincronização com o TeamSpeak que o app.
