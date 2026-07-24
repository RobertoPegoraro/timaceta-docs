# Gestão

A seção **Gestão** é a sucessora do antigo "Relatórios (Google Sheets)" e aparece no menu lateral apenas para usuários com cargo **Admin**, dentro do grupo **Administração**.

## Como acessar

1. Abra o menu lateral (☰)
2. Toque em **Administração → Gestão**
3. Escolha uma das 5 opções disponíveis

---

## Gerar Lista de Personagens

Exporta para uma planilha do **Google Sheets** todos os usuários ativos e seus personagens, incluindo atributos de equipamento.

**Como usar:**

1. Em **Gestão**, toque em **Gerar Lista de Personagens**
2. Informe o **ID da Planilha** do Google Sheets onde os dados serão salvos (o ID fica na URL da planilha, entre `/d/` e `/edit`)
3. Toque em **Atualizar Planilha**
4. Aguarde o processamento

A tela mostra a **data da última atualização** feita nessa planilha.

**Dados exportados incluem**, para cada personagem: nick, nível, classe, Verthex, Luvas Greedy, Bracelete, Amuleto, relíquias e quests.

::: tip
O sistema guarda o ID da última planilha usada — na próxima vez o campo já vem preenchido.
:::

---

## Gerar Participações BC

Exporta uma planilha com o histórico de votos em eventos de **Bless Castle** dos últimos **30, 60 ou 90 dias** (o admin escolhe o período na própria tela).

**Como usar:**

1. Em **Gestão**, toque em **Gerar Participações BC**
2. Informe o **ID da Planilha**
3. Escolha o período: **30**, **60** ou **90 dias**
4. Toque em **Atualizar Planilha**

A planilha gerada traz, por usuário: **Total de Eventos**, **Total SIM**, **Total NÃO**, **Total Não Votou**, além de **uma coluna para cada evento** do período mostrando o voto correspondente.

---

## Gerar Participações PvP

Funciona da mesma forma que Participações BC, mas para eventos de **PvP**.

Quando o usuário tem voto **"Sim" em qualquer um dos seus personagens** naquele evento, isso conta como presença confirmada — mesmo que outros personagens dele tenham votado "Não" ou não tenham votado.

**Como usar:**

1. Em **Gestão**, toque em **Gerar Participações PvP**
2. Informe o **ID da Planilha**
3. Escolha o período de análise
4. Toque em **Atualizar Planilha**

---

## Localização de Membros

Tela **somente leitura** que mostra, por clã, um histórico dos últimos **30 registros de localização** dos membros dentro do jogo.

Cada registro traz:

- Online ou offline
- Nível e classe
- Posição de liderança (Líder, Vice-Líder etc.)
- Localização no mapa
- Se o membro está conectado no **TeamSpeak** e em qual canal

::: info
Esses registros são gerados **automaticamente** pelo sistema de Alistamento, em segundo plano — esta tela apenas exibe o histórico já coletado. Não é possível gerar um novo registro manualmente por aqui.
:::

**Como usar:**

1. Em **Gestão**, toque em **Localização de Membros**
2. Selecione o clã desejado
3. Veja o histórico de registros, do mais recente para o mais antigo

---

## Gestão de Inativos

Lista usuários considerados **inativos** — aqueles que não votaram em nenhum dos últimos **N** eventos de Bless Castle configurados (o valor de **N** é definido em [Configurações do Sistema](/admin/configuracoes)).

**Como funciona:**

- A verificação roda **automaticamente** sempre que um evento de BC é encerrado
- Usuários que se enquadram como inativos recebem uma **notificação push** avisando sobre a situação
- A mesma verificação também alimenta um aviso no painel inicial do próprio usuário quando ele está perto de cair em inatividade

**Ações disponíveis na tela:**

1. Em **Gestão**, toque em **Gestão de Inativos**
2. Veja a lista com nome, telefone, e-mail, data de criação da conta e último acesso
3. Para cada usuário, escolha:
   - **Ver cadastro** — abre a tela de edição do usuário
   - **Inativar** — marca o usuário como inativo, o que **desativa a conta** imediatamente

---

## Planilha de um evento é algo separado

::: warning Não confunda com a planilha de presença do evento
A planilha vinculada a um **evento específico** (usada para registrar presença naquele evento, configurada na tela de edição do próprio evento) é um recurso **separado** desta seção.

As planilhas de **Gestão** são **globais** — configuradas manualmente por tipo de relatório (Lista de Personagens, Participações BC, Participações PvP), sem nenhum vínculo automático com o spreadsheet de um evento específico.
:::
