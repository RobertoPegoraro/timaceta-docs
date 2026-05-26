# Tela Inicial (Home)

A tela inicial é o ponto de entrada do app após o login. Ela gerencia seu estado de sessão, exibe alertas importantes e dá acesso a todas as funcionalidades pelo menu lateral.

---

## Menu lateral

Abra o menu tocando no ícone **☰** (canto superior esquerdo). As opções exibidas dependem do seu cargo:

| Seção | Opção | Quem vê |
|---|---|---|
| Principal | Perfil | Todos |
| Principal | Personagens | Todos |
| Principal | Alistamento | Todos |
| Principal | Recrutamento | Todos |
| Principal | Eventos | Todos |
| Principal | PvP | Todos |
| Principal | Avisos | Todos |
| Principal | Dicas | Todos |
| Principal | Regras | Todos |
| Principal | Horário de Boss | Todos (se ativado) |
| Principal | Notificações | Admin, Recrutador, Coord. BC/PvP |
| Principal | Consultar Membros | Todos |
| Gestão | Clãs | Admin |
| Gestão | Usuários | Admin |
| Gestão | Configurações | Admin |
| Gestão | Relatórios | Admin, Coord. BC |
| Rodapé | Política de Privacidade | Todos (se configurado) |
| Rodapé | Sair | Todos |

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
