# Cargos e Permissões

O sistema usa um modelo de cargos por permissão. Cada usuário pode ter zero ou mais cargos, e eles podem ser combinados.

## Cargos disponíveis

### Membro Comum (conta ativa)

Todo usuário com conta **ativa** tem acesso básico ao sistema.

**Pode fazer:**
- Fazer login no app
- Ver avisos, dicas e regras
- Completar perfil e cadastrar personagens
- Votar em recrutamentos
- Votar em eventos (BC/PvP)
- Usar o alistamento manual (se ativado)

---

### Recrutador

Responsável pelo processo de candidatura de novos membros.

**Pode fazer (além do membro comum):**
- Criar e editar recrutamentos
- Ativar e encerrar votações
- Aprovar ou rejeitar candidatos
- Ver todos os votos e comentários
- Receber notificações de novos candidatos

---

### Coordenador BC

Responsável pelos eventos de Bless Castle.

**Pode fazer (além do membro comum):**
- Criar e editar eventos de BC
- Ver resultados de votação de BC
- Encerrar eventos de BC

---

### Coordenador PvP

Responsável pelos eventos PvP.

**Pode fazer (além do membro comum):**
- Criar e editar eventos de PvP
- Ver resultados de votação de PvP
- Encerrar eventos de PvP
- Gerenciar grupos PvP

---

### Gerenciador de Clã

Gerencia a lista de membros diretamente no Painel, via app.

**Pode fazer (além do membro comum):**
- Ver lista de membros do clã (dados do Painel)
- Aceitar alistados manualmente
- Rejeitar alistados
- Remover membros do clã

---

### Admin

Acesso total ao sistema.

**Pode fazer (tudo acima, mais):**
- Criar, editar e deletar clãs
- Ativar/desativar alistamento automático e manual por clã
- Gerenciar usuários (ativar/desativar, alterar cargos)
- Gerenciar configurações globais do sistema
- Enviar notificações para todos/grupos
- Editar regras, avisos e dicas
- Ver auditorias de aceite de termos
- Gerar relatórios
- Deletar recrutamentos

---

## Tabela resumo de permissões

| Funcionalidade              | Membro | Recrutador | Coord. BC | Coord. PvP | Ger. Clã | Admin |
|-----------------------------|:---:|:---:|:---:|:---:|:---:|:---:|
| Login e perfil              | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Ver avisos/dicas/regras     | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Cadastrar personagens       | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Votar em recrutamento       | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Votar em eventos            | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Alistamento manual          | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| Gerenciar recrutamento      | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ |
| Criar evento BC             | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ |
| Criar evento PvP            | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |
| Gerenciar grupos PvP        | ❌ | ❌ | ❌ | ✅ | ❌ | ✅ |
| Ver membros do clã (Painel) | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Aceitar/rejeitar alistados  | ❌ | ❌ | ❌ | ❌ | ✅ | ✅ |
| Gerenciar clãs              | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Gerenciar usuários          | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Configurações do sistema    | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Enviar notificações         | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Editar avisos/dicas/regras  | ❌ | ❌ | ❌ | ❌ | ❌ | ✅ |

---

## Como alterar cargos

Apenas Admins podem alterar cargos de usuários. Veja [Gerenciar Usuários](/admin/usuarios).
