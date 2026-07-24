# Tela Inicial (Home)

A tela inicial é o ponto de entrada do app após o login. Ela gerencia seu estado de sessão, exibe alertas importantes e dá acesso a todas as funcionalidades pelo menu lateral.

---

## Menu lateral

Abra o menu tocando no ícone **☰** (canto superior esquerdo).

No topo do menu, se você tiver algum cargo administrativo, aparecem **chips** (etiquetas coloridas) indicando seus cargos: Admin, Recrutador, Coordenador BC, Coordenador PvP e/ou Gerenciador de Clã.

As opções exibidas na lista dependem do seu cargo e das configurações que o Admin ativou:

| Item | Onde fica | Quem vê |
|---|---|---|
| Início | Item único | Todos |
| Cadastro → Perfil | Dentro do submenu **Cadastro** | Todos |
| Cadastro → Personagens | Dentro do submenu **Cadastro** | Todos |
| Alistamento | Item único | Se o alistamento manual estiver habilitado, **ou** se você for Admin ou Gerenciador de Clã |
| Bless Castle | Item único | Todos |
| PvP | Item único | Todos |
| Administração → Usuários | Dentro do submenu **Administração** | Admin |
| Administração → Configurações | Dentro do submenu **Administração** | Admin |
| Administração → Gestão | Dentro do submenu **Administração** | Admin |
| Administração → Clãs | Dentro do submenu **Administração** | Admin ou Gerenciador de Clã |
| Administração → Notificações | Dentro do submenu **Administração** | Admin, Recrutador, Coordenador BC ou Coordenador PvP |
| Recrutamento | Item único | Todos |
| TeamSpeak | Item único | Só se o Admin tiver habilitado essa funcionalidade |
| Horário de Boss | Item único | Só se o Admin tiver ativado essa funcionalidade |
| Consultar Membros | Item único | Todos |
| Dicas | Item único | Todos |
| Regras | Item único | Todos |
| Novidades | Item único | Quando existem novidades ativas publicadas (veja abaixo) |
| Sair | Item único | Todos |
| Política de Privacidade | Rodapé do menu | Se configurado pelo Admin |

O submenu **Administração** só aparece para quem tem pelo menos um cargo administrativo: Admin, Recrutador, Coordenador BC, Coordenador PvP ou Gerenciador de Clã (cada item dentro dele ainda segue a regra de acesso da coluna "Quem vê" acima).

No rodapé do menu, abaixo do link de Política de Privacidade, é exibida a **versão do app** instalada no seu aparelho.

::: warning Item "Avisos"
Atualmente não existe um item "Avisos" no menu lateral — o acesso por menu a essa tela foi removido. A funcionalidade de avisos ainda existe no sistema internamente, mas hoje não há como chegar até ela pela navegação normal do app.
:::

### Novidades e o indicador "NOVO"

O item **Novidades** só aparece no menu quando existe pelo menos uma versão do app com novidades publicadas e ativas. Enquanto houver conteúdo que você ainda não viu, uma marquinha **"NOVO"** aparece ao lado do item — ela some assim que você abre a tela de Novidades. Veja mais em [Novidades](/novidades/).

---

## Dashboard da tela inicial

Dependendo de uma configuração do Admin, a tela inicial pode exibir um painel (dashboard) com:

- **Suas estatísticas**: um resumo da sua própria participação e atividade no clã.
- **Estatísticas administrativas**: dados gerais do clã, visíveis apenas para quem tem cargo administrativo.
- **Aviso de inatividade**: se você está próximo de ser considerado inativo por falta de participação em eventos, um banner de aviso aparece chamando atenção para isso.

Se o Admin não tiver habilitado esse painel, a tela inicial exibe apenas os alertas automáticos descritos abaixo.

---

## Ícone de notificações

No canto superior direito há um ícone de sino com um **badge numérico** indicando quantas notificações não lidas você tem.

Toque no ícone para ver o histórico de notificações in-app recebidas (alistamento, recrutamento, eventos etc.).

---

## Alertas automáticos ao entrar no app

O app verifica algumas condições toda vez que você abre. Se algo estiver errado, um alerta aparece automaticamente:

### Personagem desatualizado

Se você tem personagens cadastrados e algum deles **não foi atualizado há mais de 30 dias**, o app exibe um aviso na tela inicial:

> *"Você tem personagens com cadastro desatualizado. Atualize para não ser rejeitado no alistamento."*

**O que fazer:** Vá em Personagens, abra o personagem desatualizado e toque em **Salvar** (mesmo sem alterar nada). Isso renova o prazo.

### Atualização obrigatória do app

Se uma nova versão obrigatória do app foi lançada, um alerta bloqueia o uso até que você atualize:

> *"Nova versão disponível. Atualize o app para continuar."*

**O que fazer:** Acesse a loja (Play Store ou App Store) e atualize o Timaceta.

### Perfil incompleto

Se você ainda não preencheu o nome completo no [perfil](/perfil/), um banner de aviso em vermelho aparece no topo da tela inicial.

**O que fazer:** Vá em **Perfil** pelo menu lateral e preencha pelo menos o campo **Nome completo**.

---

## Verificações automáticas ao fazer login

Toda vez que você abre o app e está autenticado, o sistema executa automaticamente:

- **Verificação de conta ativa:** se sua conta foi desativada por um Admin, você é deslogado automaticamente com uma mensagem
- **Atualização do token de notificação:** o app registra seu token FCM atual para garantir que as notificações push cheguem ao seu dispositivo
- **Registro do último acesso:** data, hora, plataforma (Android/iOS) e versão do app são registrados no sistema

---

## Sair (Logout)

Para encerrar sua sessão:

1. Abra o menu lateral (☰)
2. Role até o final
3. Toque em **Sair**

Você será redirecionado para a tela de login. Suas credenciais salvas pelo "Lembrar-me" (se ativado) **não são apagadas** ao sair — apenas a sessão é encerrada.
