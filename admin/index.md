# Administração — Visão Geral

Esta seção é destinada a **Admins** do sistema. Aqui você encontra instruções para gerenciar todas as configurações avançadas do Timaceta.

## Acesso ao painel de administração

O menu de administração aparece no menu lateral apenas para usuários com cargo **Admin**.

1. Abra o menu lateral (ícone ☰)
2. Role até o submenu **Administração**
3. Você verá as opções:
   - Clãs
   - Usuários
   - Configurações
   - Notificações
   - Gestão

---

## Visão geral das responsabilidades do Admin

| Responsabilidade | Link |
|---|---|
| Cadastrar e gerenciar clãs | [Gerenciar Clãs](/admin/clas) |
| Ativar/desativar usuários e cargos | [Gerenciar Usuários](/admin/usuarios) |
| Configurações globais do sistema | [Configurações](/admin/configuracoes) |
| Enviar notificações manuais | [Notificações](/admin/notificacoes) |
| Gerenciar dicas | [Dicas](/dicas/) |
| Acompanhar o funcionamento do alistamento automático | [Ver Logs do Alistamento](/alistamento/) |
| Configurar regras avançadas de alistamento por clã | [Gerenciar Clãs](/admin/clas) |
| Exportar planilhas e consultar localização/inatividade de membros | [Gestão](/admin/gestao) |

O Admin também tem acesso à página de **Logs do Alistamento**, onde é possível acompanhar em detalhes o que o job automático fez em cada ciclo (aceitos, rejeitados, pendentes e os motivos).

Cada clã pode ter suas próprias **regras avançadas de alistamento** — voto em BC e em PvP, presença por snapshot de PvP, combinação de regras, janelas "PvP Ativo" e whitelist/blacklist de nicks, entre outras. Veja o resumo completo em [Gerenciar Clãs](/admin/clas).

Na tela de **Gerenciar Usuários**, o Admin também pode agir diretamente sobre os personagens de qualquer usuário: **alterar a posse** de um personagem (transferindo-o para outro dono), **editar** os dados do personagem em nome do usuário, ou **excluir** o personagem. Veja [Gerenciar Usuários](/admin/usuarios).

---

## Quando o alistamento automático falha

Se o alistamento automático for desativado por falha de login, você receberá uma **notificação push** informando o problema.

Para reativar:

1. Vá em **Gestão → Clãs**
2. Edite o clã com problema
3. Verifique se as credenciais (e-mail/senha do líder ou vice-líder) estão corretas
4. Salve
5. Reative o **Alistamento Automático**

Se necessário, use **Resetar Sessão** para forçar um novo login no próximo ciclo.

---

## Boas práticas

- **Atualize as credenciais** do clã sempre que a senha do líder/vice-líder for alterada no Painel
- **Verifique regularmente** se o alistamento automático está ativo nos clãs configurados
- **Ative novos usuários** rapidamente para não deixar membros bloqueados
- **Mantenha as Dicas atualizadas** para que os membros tenham informações recentes
