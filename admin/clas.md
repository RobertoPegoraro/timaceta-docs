# Gerenciar Clãs

Esta página explica como cadastrar, editar e gerenciar os clãs no sistema.

## Cadastrar um novo clã

1. Vá em **Gestão → Clãs**
2. Toque em **+** (adicionar)
3. Preencha todos os campos (veja abaixo)
4. Toque em **Salvar**

### Campos do clã

| Campo                  | Obrigatório | Descrição                                                    |
|------------------------|-------------|--------------------------------------------------------------|
| Nome do clã            | Sim         | Nome exibido no app (precisa ser exatamente igual no painel) |
| ID do clã (Painel)     | Sim         | Identificador numérico do clã no site do Painel              |
| Servidor               | Sim         | Awell, Migal, Midranda, Cronus ou Idhas                      |
| E-mail do Líder        | Sim         | Conta Painel do líder                                        |
| Senha do Líder         | Sim         | Usada para login automático                                  |
| E-mail do Vice-Líder   | Sim         | Conta Painel do vice-líder                                   |
| Senha do Vice-Líder    | Sim         | Usada como fallback se o líder falhar                        |
| Nível mínimo           | Não         | Nível mínimo para ser aceito (0 = sem restrição)             |
| Alistamento Automático | Não         | Ativa/desativa o job automático                              |

::: warning Segurança das senhas
As senhas são armazenadas com criptografia **AES-256** no banco de dados. Elas nunca são exibidas em texto puro após
salvas.
:::

---

## Editar um clã

1. Vá em **Gestão → Clãs**
2. Toque no clã que deseja editar
3. Altere os campos necessários
4. Se quiser alterar senhas: preencha o campo da nova senha. Se deixar em branco, a senha atual é mantida
5. Toque em **Salvar**

---

## Ativar ou desativar o alistamento automático

Para ativar:

1. Edite o clã
2. Marque **Alistamento Automático: Sim**
3. Salve

Para desativar:

1. Edite o clã
2. Marque **Alistamento Automático: Não**
3. Salve

::: info
O alistamento também pode ser **desativado automaticamente** pelo sistema se o login no Painel falhar 5 vezes
consecutivas. Neste caso você receberá uma notificação push.
:::

---

## Ordem de verificação e como as regras interagem

O alistamento automático aplica várias regras, em uma ordem fixa. Algumas regras **bloqueiam tudo o que vem depois**
(param a verificação assim que decidem o resultado), outras são **combináveis entre si** (E/OU) e outras são
**totalmente independentes** e só entram em ação depois que o personagem já foi aprovado pelas demais.

```text
1. Blacklist?            → REJEITADO ou PENDENTE (conforme a ação configurada) — para tudo, nem a whitelist livra
2. Whitelist?             → ACEITO direto — pula todas as regras abaixo (2 a 6)
3. Cadastrado e ativo?    → se não, REJEITADO
4. Nível mínimo?          → se abaixo, REJEITADO
5. Cadastro ≤ 30 dias?    → se desatualizado, REJEITADO
6. Regras combináveis (E/OU): voto BC · voto PvP · participação em PvP (snapshot)
   → se não configurada nenhuma das três, sempre aprova esta etapa
   → PENDENTE (ou REJEITADO, só a de participação em PvP pode rejeitar) se não atender ao modo E/OU escolhido
7. PvP Ativo (se configurado e dentro da janela de horário do dia) → filtro extra, só sobre quem já passou por 1–6
   → PENDENTE se o personagem não atender à regra de PvP Ativo (whitelist também dispensa esta etapa)
8. ACEITO
```

**O que interfere no quê:**

- **Blacklist bloqueia até a whitelist.** Um nick que está nas duas listas ao mesmo tempo é tratado pela blacklist —
  ela é verificada primeiro.
- **Whitelist dispensa as etapas 3 a 7 por completo**, inclusive PvP Ativo. Um nick na whitelist nunca fica pendente
  por nível, cadastro, BC, PvP ou PvP Ativo.
- **Voto BC, voto PvP e participação em PvP (snapshot) só se combinam entre si.** A opção E/OU (veja mais abaixo)
  afeta exclusivamente essas três regras. Ela não muda o comportamento do nível mínimo, do cadastro atualizado, da
  blacklist/whitelist ou do PvP Ativo.
- **PvP Ativo não participa da combinação E/OU.** Mesmo que o clã use "OU" e o personagem já tenha sido aprovado por
  uma das três regras combináveis, se a janela de PvP Ativo estiver em vigor no momento, ele ainda precisa atender à
  regra de PvP Ativo para ser aceito.
- **PvP Ativo só entra em vigor quando existe um evento de PvP ativo do clã, marcado para o dia atual, dentro do
  horário configurado.** Fora dessa janela, a regra simplesmente não é aplicada naquele ciclo — não pendencia
  ninguém.
- **Nível mínimo, cadastro atualizado e cadastro/ativo no app não são configuráveis por E/OU** — são sempre
  obrigatórios (quando o campo correspondente estiver preenchido pelo Admin) e independentes de qualquer outra regra.

---

## Exigir voto em eventos de BC

Quando ativado, candidatos que não atenderam aos requisitos de participação no BC ficam com status **Pendente** na fila
de alistamento.

1. Edite o clã
2. Ative **Exigir voto em eventos BC**
3. Toque em **Configuração de voto em evento** para abrir as configurações detalhadas
4. Ajuste os parâmetros e toque em **Salvar** dentro do modal

::: info
Ao editar um clã existente, salvar a configuração no modal já persiste imediatamente no banco de dados, sem precisar
salvar o clã novamente.
:::

### Configuração de voto em evento (modal)

| Campo                    | Descrição                                                              |
|--------------------------|------------------------------------------------------------------------|
| Últimos eventos          | Quantos BCs recentes serão considerados (ex: 5 = últimos 5 BCs)       |
| Contar apenas concluídos | Se ativo, eventos ainda em andamento não são contabilizados            |

#### Voto com personagem

Define quais personagens do dono são autorizados quando o voto foi registrado com um personagem normal (não piloto).

| Campo     | Descrição                                                       |
|-----------|-----------------------------------------------------------------|
| Votou Sim | Quais personagens ficam autorizados quando o dono votou **Sim** |
| Votou Não | Quais personagens ficam autorizados quando o dono votou **Não** |

Opções disponíveis:

| Opção                            | Descrição                                                       |
|----------------------------------|-----------------------------------------------------------------|
| Apenas o personagem que votou    | Somente o personagem usado no voto fica autorizado              |
| Todos os personagens do usuário  | Todos os personagens do dono ficam autorizados                  |
| Personagem principal             | Apenas o personagem marcado como principal fica autorizado      |
| Personagem que votou + principal | O personagem do voto e o personagem principal ficam autorizados |
| Nenhum personagem                | Este tipo de voto não autoriza entrada de nenhum personagem     |

#### Voto como piloto

Define quais personagens do dono são autorizados quando o voto foi registrado como **Piloto** no BC.

| Campo     | Descrição                                                              |
|-----------|------------------------------------------------------------------------|
| Votou Sim | Quais personagens ficam autorizados quando o piloto votou **Sim**      |
| Votou Não | Quais personagens ficam autorizados quando o piloto votou **Não**      |

Opções disponíveis:

| Opção                  | Descrição                                                              |
|------------------------|------------------------------------------------------------------------|
| Todos os personagens   | Todos os personagens do dono ficam autorizados                         |
| Personagem principal   | Apenas o personagem marcado como principal fica autorizado             |
| Nenhum personagem      | Este tipo de voto de piloto não autoriza entrada de nenhum personagem  |

::: tip
As configurações de **Voto com personagem** e **Voto como piloto** são independentes, permitindo regras distintas
para cada situação — por exemplo, exigir o personagem principal quando o piloto vota Não, mas liberar todos os
personagens quando o piloto vota Sim.
:::

---

## Exigir voto em eventos de PvP

Quando ativado, candidatos que não atenderam aos requisitos de votação nos eventos de PvP ficam com status
**Pendente** na fila de alistamento. Funciona de forma equivalente à exigência de voto em BC (mesma lógica de
personagem/piloto, personagem principal, bloqueio de 24h após troca de principal etc.), mas usando os votos
registrados nos eventos de PvP (`eventos_pvp`).

1. Edite o clã
2. Ative **Exigir voto em eventos PvP**
3. Toque em **Configuração de voto em PvP** para abrir as configurações detalhadas
4. Ajuste os parâmetros e toque em **Salvar** dentro do modal

::: info
Ao editar um clã existente, salvar a configuração no modal já persiste imediatamente no banco de dados, sem precisar
salvar o clã novamente.
:::

### Configuração de voto em PvP (modal)

Os campos são os mesmos da configuração de voto em BC (Últimos eventos, Contar apenas concluídos, regras de
"Voto com personagem" e "Voto como piloto" para Sim/Não), aplicados aos eventos de PvP em vez dos de BC. Veja a
seção **Exigir voto em eventos de BC** acima para o detalhe de cada opção.

::: tip Diferença em relação ao BC
No PvP não existe uma sentinela fixa de "piloto" como no BC — quando o dono da conta vota "de piloto" de outro
personagem, o voto fica salvo com o nick desse outro personagem. Ao alistar um personagem sem voto próprio, o
sistema busca qualquer voto do mesmo dono naquele evento de PvP e trata esse caso com as regras de piloto
(mesma ideia das regras de piloto do BC).
:::

---

## Combinação das regras (E / OU)

As três regras acima que podem deixar um alistado **Pendente** — **Exigir voto em BC**, **Exigir voto em PvP** e
**Exigir participação em PvP** (veja a seção seguinte) — são combinadas conforme a opção **Combinação das regras**,
configurável junto com elas:

| Modo             | Comportamento                                                                                   |
|------------------|---------------------------------------------------------------------------------------------------|
| **E** (padrão)   | O personagem precisa atender a **todas** as regras que estiverem ativas.                          |
| **OU**           | Basta atender a **uma** das regras ativas para ser aceito.                                        |

- Se **nenhuma** das três regras estiver ativa, esta etapa é sempre aprovada (comportamento igual em E ou OU).
- Se **apenas uma** das três estiver ativa, o modo E/OU não faz diferença — é a mesma regra sozinha.
- No modo **E**, a verificação para na primeira regra ativa que falhar, na ordem: voto BC → voto PvP → participação
  em PvP. As demais nem chegam a ser consultadas.
- No modo **OU**, a verificação para na primeira regra ativa que **aprovar**, na mesma ordem. Se nenhuma aprovar, o
  motivo reportado ao jogador e aos coordenadores é o da **última regra ativa avaliada** (a de menor prioridade
  entre as configuradas) — por isso, quando a regra de participação em PvP está ativa e é a última da lista, ela
  também pode **rejeitar** diretamente (ver política de offline abaixo), mesmo em modo OU.
- Esta combinação **não** afeta nível mínimo, cadastro atualizado, blacklist, whitelist ou PvP Ativo — cada uma
  dessas continua funcionando de forma independente (veja "Ordem de verificação e como as regras interagem" no
  topo desta página).

::: tip Exemplo
Um clã ativa **Exigir voto em BC** e **Exigir participação em PvP**, com combinação **OU**. Um jogador que votou no
último BC mas nunca apareceu nas snapshots de PvP é aceito (uma das duas bastou). Um jogador que não votou no BC e
também não aparece nas snapshots de PvP fica pendente — ou é rejeitado, se a política de ausência configurada em
"Exigir participação em PvP" for "Rejeitar".
:::

---

## Exigir participação em PvP

Quando ativado, o sistema verifica se o personagem estava presente no local do evento de PvP durante a janela
configurada, com base em **snapshots** de localização capturados periodicamente.

1. Edite o clã
2. Ative **Exigir participação em PvP**
3. Toque em **Configuração de participação em PvP** para abrir as configurações detalhadas
4. Ajuste os parâmetros e toque em **Salvar** dentro do modal

::: info
Ao editar um clã existente, salvar a configuração no modal já persiste imediatamente no banco de dados, sem precisar
salvar o clã novamente.
:::

### Configuração de participação em PvP (modal)

#### Campos globais

| Campo                      | Descrição                                                                                      |
|----------------------------|------------------------------------------------------------------------------------------------|
| Nº de snapshots a avaliar  | Quantas snapshots recentes serão buscadas (ex: 10 = últimas 10 snapshots capturadas)           |
| Presenças mínimas exigidas | Quantas dessas snapshots precisam registrar o personagem no local correto (ex: 3 de 10)        |
| Presença offline           | O que fazer quando o personagem estava offline no momento do snapshot (veja abaixo)             |

**Opções de Presença offline:**

| Opção              | Comportamento                                                                                          |
|---------------------|--------------------------------------------------------------------------------------------------------|
| Considerar válido   | O personagem conta como presente mesmo offline, desde que tenha sido visto online dentro da janela.    |
| Pendente            | Offline não conta como presença. Se faltarem presenças, o alistamento fica **Pendente**.               |
| Rejeitar            | Offline não conta como presença. Se faltarem presenças, o alistamento é **Rejeitado** automaticamente. |

::: warning
"Presença offline: Rejeitar" é a única forma de a regra **Exigir participação em PvP** rejeitar diretamente (as
outras duas regras combináveis — voto BC e voto PvP — nunca rejeitam sozinhas, só deixam pendente). Isso vale tanto
no modo E quanto no modo OU da combinação de regras.
:::

#### Regras de localização

Cada regra define um critério de presença válida. É possível adicionar **múltiplas regras** — uma snapshot é
considerada válida se o personagem atender a qualquer uma das regras configuradas.

Para adicionar uma regra, toque em **Adicionar regra**. Para remover, toque no ícone de lixeira ao lado da regra.

| Campo          | Obrigatório | Descrição                                                              |
|----------------|-------------|------------------------------------------------------------------------|
| Subservidor    | Sim         | Subservidor onde o PvP ocorreu (Alfa, Beta, Gama, Delta, Ômega, Zeta) |
| Mapa           | Não         | Mapa do evento (Coração de Fogo, Santuário do Abismo, etc.)            |
| Horário início | Sim         | Início da janela de verificação (formato 24h, ex: 22:00)               |
| Horário fim    | Sim         | Fim da janela de verificação (formato 24h, ex: 23:00)                  |

::: info
Quando o campo **Mapa** não é preenchido, a validação considera apenas o subservidor e o horário — o mapa é ignorado.
Quando preenchido, personagens localizados na cidade no momento do snapshot são ignorados; apenas o servidor é
levado em consideração.
:::

::: tip Exemplo com múltiplas regras
Um clã pode configurar duas regras para cobrir diferentes eventos no mesmo ciclo:

- **Regra 1:** Ômega · Coração de Fogo · 23:00 → 01:00
- **Regra 2:** Alfa · Arma Antiga · 22:00 → 23:00

Com `Nº de snapshots = 10` e `Presenças mínimas = 3`, o personagem precisa aparecer em pelo menos 3 das últimas 10
snapshots, em qualquer uma das regras acima.
:::

---

## PvP Ativo

**PvP Ativo é uma regra independente das regras combináveis (E/OU) acima.** Ela não substitui nem se soma ao voto
BC, voto PvP ou participação em PvP — é um filtro extra que só é avaliado **depois** que o personagem já passou por
todas as outras verificações (incluindo a combinação E/OU). Serve para restringir aceites automáticos durante a
janela de horário de um evento de PvP do próprio dia.

1. Edite o clã
2. Ative **Verificar PvP Ativo**
3. Toque em **Configurar PvP Ativo** para abrir as configurações detalhadas
4. Ajuste os parâmetros e toque em **Salvar** dentro do modal

### Configuração de PvP Ativo (modal)

| Campo                        | Descrição                                                                                          |
|-------------------------------|-----------------------------------------------------------------------------------------------------|
| Permitir alistamento automático para | **Personagem adicionado no grupo** ou **Apenas personagens confirmados** (veja abaixo)      |
| Início (GMT-3)                | Horário em que a restrição começa a valer                                                          |
| Fim (GMT-3)                   | Horário em que a restrição deixa de valer                                                          |

**Opções de "Permitir alistamento automático para":**

| Opção                              | Comportamento                                                                                     |
|-------------------------------------|-----------------------------------------------------------------------------------------------------|
| Personagem adicionado no grupo      | Considera qualquer personagem já adicionado em algum grupo do PvP ativo do clã, mesmo sem confirmar presença. |
| Apenas personagens confirmados      | Só considera personagens que confirmaram presença (votaram **Sim**) no evento de PvP ativo.        |

### Quando a regra entra em vigor

A regra só é aplicada em um ciclo do job quando **todas** estas condições são verdadeiras:

- **Verificar PvP Ativo** está ativado no clã;
- o horário atual (Brasília) está dentro da janela **Início–Fim** configurada;
- existe um evento de PvP **ativo** vinculado a este clã (como primário ou secundário) **marcado para o dia de
  hoje**.

Se qualquer uma dessas condições não for atendida, a regra simplesmente **não se aplica naquele ciclo** — ninguém
fica pendente por causa dela, e ela não bloqueia nenhum alistamento.

::: warning O que PvP Ativo faz e o que ele não faz
- PvP Ativo **não interfere** na combinação E/OU das outras três regras — um personagem pode ser aprovado por
  qualquer uma delas normalmente e, mesmo assim, ficar pendente aqui se a janela de PvP Ativo estiver em vigor e
  ele não atender ao critério configurado.
- **Whitelist ainda dispensa PvP Ativo.** Um nick na whitelist é aceito mesmo durante a janela de PvP Ativo.
- Personagens que atendem à regra de PvP Ativo também ficam **protegidos contra remoção** (não são escolhidos para
  abrir vaga a outros alistados) enquanto a janela estiver em vigor.
:::

---

## Whitelist de alistamento

A whitelist permite que nicks específicos sejam **aceitos automaticamente** sem passar por **nenhuma** das
verificações normais (nível mínimo, cadastro atualizado, voto BC, voto PvP, participação em PvP e PvP Ativo).

1. Edite o clã (ele já precisa estar salvo)
2. Com **Alistamento Automático** ativo, toque em **Whitelist**
3. Adicione ou remova nicks conforme necessário
4. Confirme — a whitelist é salva imediatamente

::: warning Blacklist tem prioridade sobre a whitelist
Se o mesmo nick estiver nas duas listas, a **blacklist prevalece** — ela é verificada antes da whitelist (veja a
seção abaixo).
:::

---

## Blacklist de alistamento

A blacklist permite bloquear nicks específicos, impedindo que sejam aceitos automaticamente — é o oposto da
whitelist, e é verificada **antes** dela (tem prioridade em caso de conflito).

1. Edite o clã (ele já precisa estar salvo)
2. Com **Alistamento Automático** ativo, toque em **Blacklist**
3. Escolha a **Ação**, que vale para **todos os nicks da lista** (não é por nick individual):

| Ação      | Comportamento                                                                                              |
|-----------|---------------------------------------------------------------------------------------------------------------|
| Rejeitar  | O personagem é removido automaticamente da fila de alistamento (rejeição direta, sem passar por mais nada).  |
| Pendente  | O alistamento fica **Pendente**, aguardando aprovação manual da liderança.                                    |

4. Adicione ou remova nicks conforme necessário
5. Confirme — a blacklist (nicks + ação) é salva imediatamente

::: info Notificações
- A pessoa dona do personagem é sempre notificada, tanto na rejeição quanto na pendência, informando que o motivo
  é o personagem estar na blacklist.
- Coordenadores/admins só são notificados quando a ação é **Pendente** e a opção **Notificar coordenador em
  pendências** estiver ativa no clã. Na ação **Rejeitar**, os admins não recebem notificação.
:::

::: warning
A blacklist **bloqueia mesmo personagens que estariam na whitelist** — ela é a primeira verificação do fluxo,
antes de qualquer outra regra. Também tem prioridade sobre a combinação E/OU, PvP Ativo, nível mínimo, etc.: nada
disso chega a ser avaliado para um nick na blacklist.
:::

---

## Deletar um clã

::: danger Ação irreversível
Deletar um clã remove permanentemente os dados do sistema. As sessões de login e caches de alistamento **não são
removidos automaticamente**.
:::

1. Acesse o clã
2. Toque em **Deletar**
3. Confirme a ação
