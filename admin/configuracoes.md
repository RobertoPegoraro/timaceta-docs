# Configurações do Sistema

As configurações globais afetam todo o sistema. Acesse em **Gestão → Configurações**.

## Parâmetros disponíveis

### Criar conta (público)

**Campo:** `Criação de conta ativa`

Quando ativado, o botão "Criar Conta" aparece na tela de login para qualquer pessoa.

- **Ativado:** qualquer pessoa pode se cadastrar (mas a conta ficará inativa até ativação manual)
- **Desativado:** somente Admins podem adicionar usuários

**Recomendação:** Deixe desativado em períodos sem recrutamento ativo.

---

### Recrutamento ativo

**Campo:** `Recrutamento ativo`

Ativa ou desativa o processo de recrutamento no app.

- **Ativado:** o formulário de candidatura e o módulo de recrutamento ficam disponíveis
- **Desativado:** a seção de recrutamento fica oculta

---

### Nível mínimo para recrutamento

**Campo:** `Nível mínimo de recrutamento`

Define o nível mínimo que um candidato deve ter para que seu formulário de recrutamento seja válido.

---

### Horário de boss

**Campo:** `Horário de boss ativo`

Ativa ou desativa a seção de horário de boss no menu.

---

### Verificação obrigatória de e-mail

**Campo:** `Exigir verificação de e-mail`

Liga ou desliga a exigência de confirmação de e-mail para novos cadastros. Quando ativado, o usuário precisa confirmar o e-mail antes de conseguir usar o app normalmente.

---

### Número de eventos para cálculo de inatividade

**Campo:** `Eventos para inatividade`

Define quantos dos últimos eventos de Bless Castle são considerados ao calcular se um usuário está **inativo** (não votou em nenhum deles). Esse número é usado pela tela de [Gestão de Inativos](/admin/gestao#gestao-de-inativos).

---

### Servidor padrão

**Campo:** `Servidor padrão`

Uma lista suspensa com os servidores do jogo (Awell, Migal, Midranda, Cronus, Idhas). Define o servidor pré-selecionado em telas do app que pedem essa informação.

---

### TeamSpeak

Seção dedicada à configuração do servidor de voz TeamSpeak usado pelo clã:

- **Endereço do servidor** — host/endereço do servidor TeamSpeak que o app deve usar para conectar os membros
- **Limpar credenciais** — botão que remove as credenciais salvas, útil se o servidor mudar ou se houver problemas de conexão persistentes

::: info
Sem um endereço de servidor configurado aqui, a tela de TeamSpeak do app exibe um erro informando que o servidor não está configurado.
:::

---

::: warning Campos que não ficam nesta tela
"Alistamento manual" e "Instagram" **não são editáveis** por esta tela de Configurações hoje. São ajustes internos que só podem ser alterados diretamente no banco de dados pela equipe técnica, sem uma opção correspondente na interface do app.
:::

---

## Quem alterou por último

As configurações registram automaticamente **quem** fez a última alteração e **quando**. Isso fica visível na tela de configurações para auditoria.

---

## Atenção ao alterar configurações

::: warning
Alterações nas configurações têm efeito **imediato** em todo o sistema para todos os usuários. Avise a equipe antes de desativar funcionalidades em uso.
:::
