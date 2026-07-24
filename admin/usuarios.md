# Gerenciar Usuários

Admins podem ver todos os usuários, ativar/desativar contas e atribuir cargos.

## Ver lista de usuários

1. Vá em **Gestão → Usuários**
2. A lista exibe todos os usuários cadastrados com:
   - Nome e e-mail
   - Status (ativo/inativo)
   - Cargos atribuídos
   - Último acesso

---

## Ativar ou desativar um usuário

Contas novas são criadas como **inativas** por padrão.

Para ativar:

1. Toque no usuário
2. Ative o toggle **Conta Ativa**
3. Salve

Para desativar:

1. Toque no usuário
2. Desative o toggle **Conta Ativa**
3. Salve — o usuário perde acesso imediatamente no próximo login

::: info
Usuários com conta inativa não conseguem fazer login e são bloqueados com uma mensagem pedindo para contatar a liderança.
:::

::: tip Recalculo automático de personagens
Ao ativar ou desativar um usuário, o sistema recalcula automaticamente se os personagens vinculados a ele contam como **ativos**. Isso afeta diretamente a elegibilidade desses personagens no alistamento automático — um personagem de um usuário desativado deixa de ser considerado ativo para fins de alistamento.
:::

---

## Atribuir cargos

1. Toque no usuário
2. Marque ou desmarque os cargos desejados:
   - **Admin** — acesso total
   - **Recrutador** — gerencia candidatos
   - **Coordenador BC** — eventos de Bless Castle
   - **Coordenador PvP** — eventos PvP
   - **Gerenciador de Clã** — gerencia membros no Painel
3. Salve

::: warning
Um usuário pode ter **múltiplos cargos simultaneamente**. Por exemplo: Recrutador + Coordenador BC.
:::

---

## Última alteração

Cada usuário registra automaticamente **quem** fez a alteração mais recente em seu cadastro e **quando** ela ocorreu.

::: warning Não é um histórico cumulativo
O sistema guarda apenas o registro da **última** alteração — não existe um histórico completo com todas as mudanças anteriores. Cada novo salvamento sobrescreve a informação de quem alterou e quando.
:::

---

## Ações sobre os personagens do usuário

Na tela de editar um usuário, dentro da lista de personagens vinculados a ele, o Admin tem três ações extras disponíveis para cada personagem:

- **Alterar posse** — transfere o personagem para outro usuário dono, atualizando também os compartilhamentos existentes desse personagem
- **Alterar personagem** — edita os dados do personagem em nome do usuário (nível, classe, atributos de equipamento etc.)
- **Excluir personagem** — exclui o personagem, como uma ação administrativa

::: warning
Essas ações alteram dados de propriedade e cadastro de personagens de outras pessoas. Use com cuidado e apenas quando houver necessidade real (por exemplo, corrigir um erro de cadastro ou uma venda de personagem combinada entre membros).
:::

---

## Quando ativar uma conta nova

Quando alguém criar uma conta nova, você receberá uma notificação. Para ativar:

1. O novo usuário entra em contato com a liderança (por WhatsApp, Discord etc.)
2. A liderança identifica quem é a pessoa
3. Admin acessa **Gestão → Usuários**
4. Encontra o usuário pelo e-mail
5. Ativa a conta e atribui cargos se necessário
6. Informa ao membro que já pode acessar o app

---

## Notificar usuários com problemas

O Admin pode enviar notificações especiais para:

- **Perfil incompleto** — usuários que ainda não preencheram nome/telefone

Veja [Notificações](/admin/notificacoes) para mais detalhes.
