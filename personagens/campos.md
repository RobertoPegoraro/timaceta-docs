# Cadastrar / Editar Personagem

Esta página explica cada campo do formulário de personagem e o que ele significa.

## Abrindo o formulário

- **Novo personagem:** Vá em Personagens → toque em **+**
- **Editar existente:** Vá em Personagens → toque no personagem desejado

---

## Campos do formulário

### Nick

**Obrigatório.** O nome do personagem exatamente como aparece no Zenit.

::: warning Atenção ao nick
O sistema busca o nick de forma exata. Se o nick no jogo for `KnightRobert`, não use `knightrobert` ou `Knight Robert`. **Maiúsculas e minúsculas importam.**
:::

Se o nick já estiver cadastrado por outro usuário, você verá a mensagem:
> *"Nick já cadastrado por: [Nome]. Peça para compartilhar o personagem com você."*

Nesse caso, você não deve criar um novo cadastro — peça ao dono original para [compartilhar o personagem](/personagens/compartilhamento) com você.

---

### Nível

**Obrigatório.** O nível atual do personagem no jogo.

- Valor aceito: entre **165 e 185**
- Apenas números inteiros

Mantenha sempre atualizado. Nível desatualizado pode impedir o alistamento se o clã tiver nível mínimo configurado.

---

### Classe

**Obrigatório.** A classe do personagem. Selecione na lista:

---

### Relíquias

**Opcional.** Selecione as relíquias que seu personagem possui. Você pode selecionar mais de uma.

| Relíquia | | Relíquia | |
|---|---|---|---|
| Fúria | | Shy | |
| Babel | | Tulla | |
| Valento | | Draxos | |
| Kelvezu | | Greedy | |
| Mokova | | Yagditha | |
| Midranda | | | |

---

### Possui Verthex de ataque?

**Obrigatório.** Selecione **Sim** ou **Não**.

**Aging Verthex Ataque:** O nível de "aging" do item.

---

### Possui armadura Verthex?

**Obrigatório.** Selecione **Sim** ou **Não**.


**Aging Armadura Verthex:** O nível de "aging" do item.

---

### Possui luvas do Greedy?

**Obrigatório.** Selecione **Sim** ou **Não**.

**Aging Luvas Greedy:** O nível de "aging" do item.

---

### Possui amuleto do Yag?

**Obrigatório.** Selecione **Sim** ou **Não**.

---

### Fez todas as Quests?

**Obrigatório.** Selecione **Sim** ou **Não**.

Indica se o personagem completou todas as missões (quests) disponíveis no jogo. Personagens com todas as quests feitas têm acesso a bônus e conteúdo adicional.

---

### Compartilhado com

**Opcional.** Permite vincular este personagem a outros usuários do app.

Veja a página [Compartilhamento de Personagem](/personagens/compartilhamento) para entender como funciona.

---

## Salvando

Após preencher todos os campos obrigatórios, toque em **Salvar**. O sistema valida os dados e salva. Campos com erro são destacados em vermelho com a mensagem de correção.

---

## Resumo de validações

| Campo | Regra |
|---|---|
| Nick | Obrigatório, único no sistema |
| Nível | Obrigatório, entre 165 e 185 |
| Classe | Obrigatório, selecionar da lista |
| Relíquias | Opcional, múltipla escolha |
| Verthex Ataque | Sim/Não obrigatório; se Sim, aging 0-999 |
| Armadura Verthex | Sim/Não obrigatório; se Sim, aging 0-999 |
| Luvas Greedy | Sim/Não obrigatório; se Sim, aging 0-999 |
| Amuleto Yag | Sim/Não obrigatório |
| Quests completas | Sim/Não obrigatório |
