# Notificações

Admins e outros cargos com permissão podem enviar notificações push manuais para grupos específicos de usuários.

## Como acessar

1. Abra o menu lateral (☰)
2. Toque em **Notificações**
3. Escolha o tipo de notificação

O menu exibe apenas as opções que seu cargo permite usar.

---

## Tipos de notificação manual

### Notificar Todos (Admin)

Envia uma notificação push para **todos os usuários ativos** do app.

**Como usar:**
1. Toque em **Notificar Todos**
2. Preencha o **Título**
3. Preencha a **Mensagem**
4. Toque em **Enviar Notificação**

::: warning
Use com moderação. Notificações em massa frequentes tendem a ser ignoradas ou causam desativação das notificações pelo usuário.
:::

---

### Notificação BC (Admin / Coordenador BC)

Envia uma notificação segmentada para usuários com base no **voto em um evento de Bless Castle específico**.

**Como usar:**

1. Toque em **Notificações BC**
2. Selecione o **evento BC** na lista (últimos eventos com votos registrados)
3. Selecione o **grupo de destinatários**:
   - **SIM** — quem votou que vai participar
   - **NÃO** — quem votou que não vai participar
   - **Não Votou** — quem não registrou presença
4. O **Título** e a **Mensagem** são preenchidos automaticamente com um template. Edite se quiser personalizar
5. Toque em **Enviar Notificação**

**Templates automáticos por opção:**

| Opção | Template da mensagem |
|---|---|
| SIM | Lembrete de que precisa reportar o personagem e marcar a tag |
| NÃO | Informativo sobre futuras oportunidades |
| Não Votou | Convite para votar no evento |

::: info
Se não houver nenhum evento BC com votos disponível, uma mensagem de aviso é exibida.
:::

---

### Notificação PvP (Admin / Coordenador PvP)

Envia uma notificação segmentada para usuários com base em **participação em evento PvP**.

**Como usar:**

1. Toque em **Notificações PvP**
2. Selecione o **evento ou grupo PvP**
3. Selecione o **grupo de destinatários**:
   - **Adicionou nick** — quem confirmou participação
   - **NÃO adicionou** — quem não confirmou
4. Edite o **Título** e a **Mensagem** se necessário
5. Toque em **Enviar Notificação**

**Templates automáticos:**

| Opção | Template da mensagem |
|---|---|
| Adicionou | Lembrete para solicitar a tag no servidor |
| Não adicionou | Lembrete das regras e prazo para adicionar nick |

---

### Notificação Recrutamento (Admin / Recrutador)

Envia uma notificação segmentada para usuários com base no **voto em um recrutamento específico**.

**Como usar:**

1. Toque em **Notificações Recrutamento**
2. Selecione o **recrutamento ativo** na lista
3. Selecione o **grupo de destinatários**:
   - **SIM** — quem votou a favor
   - **NÃO** — quem votou contra
   - **Não Votou** — quem ainda não votou
4. Edite o **Título** e a **Mensagem** se necessário
5. Toque em **Enviar Notificação**

::: info
Se não houver recrutamentos ativos, uma mensagem de aviso é exibida.
:::

---

### Notificação Cadastro (Admin)

Envia uma notificação para usuários com **perfil incompleto** — aqueles que ainda não preencheram nome, telefone ou outros dados obrigatórios.

**Como usar:**

1. Toque em **Notificações Cadastro**
2. Confirme o tipo: **Cadastro Incompleto**
3. O **Título** e a **Mensagem** são preenchidos automaticamente
4. Edite se quiser personalizar
5. Toque em **Enviar Notificação**

Use periodicamente para lembrar membros de completar o perfil, especialmente após ativar contas novas.

---

## Notificações automáticas do sistema

Além das manuais, o sistema envia notificações automáticas em vários momentos sem intervenção humana:

| Evento                                        | Quem recebe                       |
|-----------------------------------------------|-----------------------------------|
| Alistamento aceito                            | O jogador aceito                  |
| Alistamento rejeitado (nível / desatualizado) | O jogador rejeitado               |
| Alistamento pendente (falta voto no BC)       | O jogador pendente (1x a cada 6h) |
| Alistamento automático desativado por erro    | Admins                            |
| Login alistamento automático falhou 5 vezes   | Admins                            |
| Novo recrutamento criado                      | Admins e Recrutadores             |
| Votação de recrutamento aberta                | Membros configurados              |
| Recrutamento aprovado/rejeitado               | Votantes do recrutamento          |
| Evento criado                                 | Membros configurados              |
| Regras atualizadas                            | Todos os usuários                 |

---

## Auditoria

Toda notificação enviada manualmente é registrada automaticamente com:

- Quem enviou
- Data e hora
- Para qual grupo foi enviada
- Título e corpo da mensagem

O histórico fica visível para todos os Admins.

---

## Boas práticas

- Prefira grupos **específicos** em vez de "Todos" quando possível
- Sempre preencha um **título claro** — é o que o usuário vê primeiro na notificação do celular
- Personalize o template automático quando o contexto for diferente do padrão
- Não envie a mesma notificação várias vezes em sequência curta
