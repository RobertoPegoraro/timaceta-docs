# Horário dos Bosses

A seção de Horário dos Bosses exibe em tempo real quais bosses estão disponíveis agora em cada subservidor, e os horários completos de spawn.

::: info Funcionalidade opcional
Esta seção só aparece no menu se um Admin tiver ativado em **Configurações → Horário de Boss Ativo**.
:::

## Como acessar

1. Abra o menu lateral (☰)
2. Toque em **Horário de Boss**

---

## Selecionando o servidor

No topo da tela há um dropdown para escolher o servidor. A lista de servidores **não é fixa** — ela é montada automaticamente com base nos dados recebidos da fonte de horários no momento em que você abre a tela, então pode mudar ao longo do tempo.

Um Admin pode configurar um **servidor padrão**, que já vem pré-selecionado quando você abre a tela (você pode trocar para outro servidor da lista normalmente).

Após selecionar, a lista de subservidores é carregada automaticamente.

---

## Bosses ativos agora

A tela exibe um **grid de bosses** que estão disponíveis no horário atual (baseado no fuso horário GMT-3 / Brasília).

Para cada boss ativo você vê:
- Imagem do boss
- Nome do boss
- Local de spawn

### Detalhes do boss

Toque em um boss ativo no grid para abrir uma janela com mais detalhes:
- Imagem ampliada do boss
- Nome
- Local de spawn
- Um **mapa** indicando onde ele aparece

---

## Horários completos

Toque em **"Ver todos os horários"** para abrir um painel com a lista completa de subservidores e seus respectivos horários de boss, ordenados por horário.

---

## Atualizar

Não existe um botão dedicado de atualização. Para recarregar os dados, **puxe a tela para baixo** (gesto de "puxar para atualizar") sobre a lista de horários.

---

## Fonte dos dados

Os dados são carregados em tempo real de uma fonte externa configurada pelo Admin. Se a fonte estiver em manutenção ou indisponível, uma mensagem de erro será exibida — aguarde alguns minutos e tente novamente puxando a tela para baixo.

### Ajuste manual pelos admins

Quando a fonte externa está fora do ar, um Admin pode ajustar manualmente, apenas para o dia corrente, o horário de spawn de cada subservidor. Nesse caso, a tela mostra um aviso informando que os horários foram **"ajustados pelos admins"** — isso significa que os horários exibidos não vieram da fonte automática, mas foram definidos manualmente até a fonte voltar ao normal.

::: tip
Os horários são calculados automaticamente com base no horário atual do seu dispositivo, ajustado para GMT-3. Verifique se o horário do seu celular está correto para ter a informação precisa.
:::
