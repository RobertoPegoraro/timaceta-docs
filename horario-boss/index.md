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

No topo da tela há um seletor de servidor. Ele reúne os servidores da programação cadastrada e dos minutos do dia, inclusive quando a coleta ainda está incompleta.

Um Admin pode configurar um **servidor padrão**, que já vem pré-selecionado quando você abre a tela (você pode trocar para outro servidor da lista normalmente).

Após selecionar, a lista de subservidores é carregada automaticamente.

---

## Bosses ativos agora

A tela exibe os bosses programados para a hora e o dia da semana atuais, no fuso GMT-3 / Brasília.

Para cada boss ativo você vê:
- Imagem do boss
- Nome do boss
- Local de spawn
- Horário por subservidor. `??` indica minuto ainda desconhecido; horários fixos não dependem da coleta diária.

### Detalhes do boss

Toque em um boss da lista para abrir uma janela com mais detalhes:
- Imagem ampliada do boss
- Nome
- Local de spawn
- Um **mapa** indicando onde ele aparece

---

## Horários completos

Toque em **"Ver todos os horários"** para consultar a programação semanal de cada boss, com dias, horas, servidores e subservidores.

## Configurando no painel web

Abra **Horário de Boss** e selecione o boss. Cada **entrada** reúne um grupo de dias e seus horários:

1. Dê um nome opcional, como “Domingo a quinta”.
2. Marque vários dias de uma vez, ou use **Todos os dias**.
3. Escolha as horas, os servidores e os subservidores. **Todos** inclui todos os subservidores daquele servidor.
4. Escolha **Time Boss do dia** para usar o minuto coletado ou **Minuto fixo** para um horário exato.
5. Use **Duplicar entrada** para criar uma variação e altere somente os dias/horas necessários. Salve ao terminar.

Entradas que repetem dia, hora e abrangência são recusadas. A Dama está configurada para domingo a quinta às 21:xx, sexta e sábado às 20:xx, e sua entrada Omega às 20:00 todos os dias. Sexta-feira faz parte da regra especial; domingo usa a regra das 21h.

A programação é recarregada ao abrir, atualizar ou retornar ao aplicativo; a lista de bosses se ajusta automaticamente na troca da hora. É necessária uma versão do app com suporte às regras semanais.

---

## Atualizar

Não existe um botão dedicado de atualização. Para recarregar os dados, **puxe a tela para baixo** (gesto de "puxar para atualizar") sobre a lista de horários.

---

## Fonte dos dados

A programação vem da configuração do painel. Os minutos diários vêm do documento alimentado pela Function e pelos ajustes dos admins. Os dados disponíveis continuam sendo apresentados durante a coleta parcial. Uma falha de leitura é informada; puxe a tela para baixo para tentar novamente.

### Ajuste manual pelos admins

Um admin pode ajustar os minutos de cada subservidor para o dia corrente. Quando o servidor selecionado tem ajustes manuais, há um aviso único no topo. Na edição, os campos manuais aparecem em amarelo. A sincronização preserva um valor manual diferente da fonte; se os valores coincidirem em uma leitura posterior, o campo volta à origem automática. O job encerra as consultas ao completar o dia.

::: tip
Os horários são calculados automaticamente com base no horário atual do seu dispositivo, ajustado para GMT-3. Verifique se o horário do seu celular está correto para ter a informação precisa.
:::
