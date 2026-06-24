# Política de Privacidade

## Como acessar no app

A Política de Privacidade pode ser acessada de dois lugares no app:

1. **Menu lateral (☰):** role até o final do menu — o link aparece na parte inferior
2. **Tela de Criar Conta:** abaixo do botão "Criar Conta"

Ao tocar no link, a Política de Privacidade abre no seu **navegador padrão** (fora do app).

::: info
O link só aparece se o administrador tiver configurado a URL da política nas Configurações do sistema.
:::

---

## O que a política cobre

A política de privacidade do Timaceta detalha como os seus dados são coletados, usados e armazenados. Os principais
pontos são:

### Dados coletados pelo app

- **Dados de perfil:** nome, e-mail, telefone (WhatsApp), especificações de hardware
- **Dados de personagem:** nick, nível, classe, relíquias, itens
- **Dados de uso:** votos em recrutamentos, votos em eventos, participação em alistamentos
- **Token de dispositivo:** para envio de notificações push (FCM)
- **Auditorias:** registro de aceite de termos (IP, dispositivo, data/hora)

### Dados das credenciais Painel

Quando você usa o alistamento (manual ou automático):

- **Alistamento automático:** as credenciais do líder/vice-líder são armazenadas **criptografadas** (AES-256) no banco
  de dados para uso pelo sistema automático
- **Alistamento manual:** suas credenciais **não são armazenadas nos servidores**. Elas são enviadas diretamente ao
  Painel via HTTPS e descartadas após o uso
- **"Lembrar-me":** se ativado, as credenciais ficam salvas **somente no seu dispositivo** (Keystore Android / Keychain
  iOS). O desenvolvedor não tem acesso a elas

### Como os dados são usados

- Identificação e autenticação no sistema
- Verificação das regras de alistamento
- Comunicação via notificações push
- Organização de eventos e recrutamentos
- Auditoria interna de segurança

### Câmera e imagens do dispositivo

O app pode solicitar acesso à **câmera** e à **galeria de fotos** do dispositivo exclusivamente para o envio de prints de eventos BC (Boss Castle).

**O que é feito com as imagens:**

- A imagem selecionada é **comprimida no próprio dispositivo** antes do envio, para reduzir o consumo de dados
- A imagem comprimida é **enviada via HTTPS** e armazenada no **Firebase Storage** (infraestrutura Google), vinculada ao evento e ao usuário que fez o envio
- Apenas **administradores e coordenadores BC** do clã têm acesso para visualizar os prints enviados
- O usuário pode **substituir** seu print enviando uma nova imagem; a imagem anterior é excluída do armazenamento

**O que NÃO é feito com as imagens:**

- As imagens **não são analisadas, processadas ou lidas** por nenhum sistema automatizado, IA ou terceiro
- As imagens **não são usadas para publicidade**, treinamento de modelos ou qualquer finalidade além da exibição interna ao clã
- As imagens **não são compartilhadas com terceiros** nem vendidas ou comercializadas
- O desenvolvedor **não acessa o conteúdo das imagens** diretamente; o acesso ao Firebase Storage é restrito às regras de segurança configuradas no projeto
- Imagens da câmera ou galeria **não são armazenadas localmente** pelo app além do fluxo de upload — após o envio, o arquivo temporário é descartado

O acesso à câmera e galeria só ocorre mediante **ação explícita do usuário** (toque no ícone de upload). O app não acessa câmera ou galeria em segundo plano.

### Segurança

- Comunicação via **HTTPS** em todas as operações
- Senhas armazenadas com **criptografia AES-256**
- Credenciais sensíveis nunca exibidas em texto puro após salvas
- Armazenamento local criptografado pelo sistema operacional (Keystore/Keychain)
- Imagens armazenadas no Firebase Storage com regras de acesso que impedem escrita por outros usuários

---

## Excluir seus dados

Para remover seus dados do sistema, você pode [excluir sua conta](/perfil/) diretamente pelo app. Isso remove seu
usuário e dados associados permanentemente.

---

## Contato

Para dúvidas sobre privacidade ou solicitações de remoção de dados, entre em contato com a administração do clã.
