# Login e Autenticação

Esta seção explica como entrar no app Timaceta, quais métodos de login estão disponíveis e o que fazer se encontrar problemas.

## Métodos de Login

### Email e Senha

A forma mais comum de acesso. Na tela de login:

![Tela de login — campos de e-mail e senha](/img/login-tela.png)

1. Digite seu **e-mail** cadastrado
2. Digite sua **senha**
3. Toque em **Entrar**

::: tip Conta inativa?
Se seu acesso foi bloqueado ou sua conta ainda não foi ativada, entre em contato com um Admin do clã. Contas novas são criadas como **inativas** por padrão e precisam ser ativadas manualmente.
:::

---

### Login com Google

![Botão Entrar com Google](/img/login-google.png)

1. Toque em **Entrar com Google**
2. Selecione sua conta Google
3. O app verifica se sua conta está ativa no sistema

::: warning Atenção
Mesmo usando o login com Google, sua conta ainda precisa estar **ativa** no sistema. Se for seu primeiro acesso, ela estará inativa até que um Admin a ative.
:::

---

### Login com Apple (apenas iOS)

1. Toque em **Entrar com Apple**
2. Autentique com Face ID, Touch ID ou senha do dispositivo
3. O app verifica se sua conta está ativa

::: warning E-mails privados Apple
Se você usar a opção "Ocultar meu e-mail" da Apple, o login **não será aceito**. Use a opção de compartilhar seu e-mail real para que o sistema consiga identificar sua conta.
:::

---

## Recurso "Lembrar-me"

![Checkbox Lembrar-me na tela de login](/img/login-lembrar-me.png)

O "Lembrar-me" é exclusivo do login por **e-mail e senha** (não funciona com Google ou Apple). Quando ativado, salva suas credenciais do app no dispositivo para que os campos sejam preenchidos automaticamente na próxima vez que você abrir o app.

### Como funciona

- Marque o checkbox **"Lembrar-me"** antes de tocar em **Entrar**
- Após o login bem-sucedido, seu e-mail e senha ficam salvos no armazenamento seguro do dispositivo — **Keystore (Android)** ou **Keychain (iOS)**
- Na próxima vez que abrir o app, os campos de e-mail e senha já virão preenchidos automaticamente
- **Nenhuma credencial é enviada para nossos servidores**

### Como parar de lembrar

Para apagar as credenciais salvas, basta fazer login novamente **sem** marcar o "Lembrar-me". Ao logar com a opção desmarcada, as credenciais anteriores são removidas automaticamente do dispositivo.

---

## Mensagens de Erro Comuns

| Mensagem | Causa | Solução |
|---|---|---|
| Usuário/Senha incorretos | Credenciais erradas | Verifique e tente novamente |
| Usuário inativo | Conta não ativada | Contate um Admin |
| E-mail inválido | Formato inválido | Verifique o e-mail digitado |
| Erro de conexão | Sem internet | Verifique sua conexão |
| E-mail privado Apple | Apple ocultou o e-mail | Compartilhe o e-mail real |

---

## Próximos passos

- [Criar uma nova conta](/login/criar-conta)
- [Recuperar senha esquecida](/login/recuperar-senha)
- [Completar seu perfil](/personagens/)
