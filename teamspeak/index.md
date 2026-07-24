# TeamSpeak

O Timaceta tem um **cliente de voz TeamSpeak completo embutido no próprio app** — não é apenas uma sincronização de status, é possível entrar no servidor de voz do clã, ouvir e falar com os outros membros, sem precisar instalar nenhum outro programa ou aplicativo.

::: info Funcionalidade opcional
O item **TeamSpeak** só aparece no menu lateral se um Admin tiver habilitado essa funcionalidade. Essa ativação é feita diretamente no sistema (não existe um botão para isso na tela de Configurações do app) — se você não vê o item no menu, fale com um Admin do clã.
:::

## Como acessar

1. Abra o menu lateral (☰)
2. Toque em **TeamSpeak**

O endereço do servidor de TeamSpeak é configurado por um Admin em **Configurações do Sistema → seção TeamSpeak**. Se nenhum servidor tiver sido configurado ainda, a tela mostra um aviso informando que o servidor não está configurado.

---

## Primeiro acesso

Na primeira vez que você entra na tela de TeamSpeak, o app faz uma configuração inicial:

1. **Identidade própria:** o app gera automaticamente uma identidade sua no TeamSpeak. Isso acontece **apenas uma vez** — a identidade gerada é permanente e vai ser reutilizada em todos os seus acessos futuros.
2. **Escolha do apelido (nick):** você escolhe um apelido para aparecer nos canais de voz.

O nome que os outros membros veem nos canais é sempre formado como:

> **Primeiro Nome do seu perfil** — **apelido escolhido**

Por exemplo, se seu perfil está cadastrado como "Roberto" e você escolhe o apelido "Mago75", você aparecerá nos canais como **"Roberto - Mago75"**.

Você pode editar seu apelido a qualquer momento depois — o primeiro nome, por vir do seu perfil, não é editável por aqui.

---

## Usando o TeamSpeak

### Árvore de canais

Ao conectar, você vê a **árvore de canais** de voz do servidor do clã, no mesmo estilo de um cliente TeamSpeak tradicional (incluindo separadores e cabeçalhos organizando os canais). Dentro de cada canal aparecem os participantes que estão conectados nele no momento.

### Falando (push-to-talk)

Para falar, use o botão de **"apertar para falar"**:

- **Pressione e segure** o botão enquanto fala; solte para parar de transmitir.
- **Arraste e trave**: arraste o botão para a posição de travado para transmitir continuamente sem precisar manter o dedo pressionado — funciona de forma parecida com a gravação de áudio do WhatsApp. Toque novamente para destravar e parar de transmitir.

### Controles de áudio

- **Volume geral de recepção:** ajuste o volume com que você ouve todos os participantes, podendo aumentar até **1000%** — útil se alguém estiver com o microfone muito baixo.
- **Volume e mudo por participante:** você pode ajustar o volume individual de cada pessoa no canal, ou silenciá-la especificamente para você. Essas preferências ficam **salvas por participante**, mesmo depois que você sai e reconecta ao servidor.

---

## Conexão em segundo plano

Depois de conectado, você pode **navegar livremente para outras telas do app**, ou até deixar o app em segundo plano, que a conexão de voz **continua ativa** — você continua ouvindo e podendo falar no canal normalmente.

A conexão só é encerrada de verdade quando você:
- Sai explicitamente do canal/servidor de TeamSpeak, ou
- Fecha o aplicativo por completo.

---

## Problemas de conexão

O app trata automaticamente algumas situações de erro:

- **Rede instável:** se sua conexão de internet estiver instável, o app avisa que a qualidade da chamada pode estar comprometida.
- **Erros do servidor:** mensagens claras são exibidas em casos como senha incorreta, permissão insuficiente para entrar em um canal, ou expulsão (kick) de um canal por um administrador do servidor de voz.

::: tip
Se você tiver problemas persistentes de conexão, verifique sua internet e, se o problema continuar, avise um Admin — pode ser necessário reconfigurar o endereço do servidor.
:::
