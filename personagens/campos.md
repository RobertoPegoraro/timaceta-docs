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

| Classe | Descrição |
|---|---|
| Guerreira | Combate corpo a corpo, alta defesa |
| Assassina | Alta velocidade de ataque, dano físico |
| Arqueira | Ataque à distância com arco |
| Lutador | Combate físico, alta força |
| Pike | Combate com lança |
| Mecânico | Utiliza mecânicas e armadilhas |
| Xamã | Suporte e magia |
| Sacerdotisa | Cura e suporte ao grupo |
| Cavaleiro | Combate montado, defesa alta |
| Mago | Dano mágico à distância |
| Atalanta | Classe especial de combate |

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

Relíquias são artefatos especiais que conferem habilidades únicas ao personagem. Registrá-las ajuda a liderança a conhecer o potencial do seu personagem para eventos.

---

### Possui Verthex de ataque?

**Obrigatório.** Selecione **Sim** ou **Não**.

O Verthex de ataque é um item raro que aumenta o dano. Se selecionar **Sim**, um campo adicional aparece:

**Aging Verthex Ataque:** O nível de "aging" (envelhecimento) do item. Quanto maior, mais poderoso. Valores de **0 a 999**.

---

### Possui armadura Verthex?

**Obrigatório.** Selecione **Sim** ou **Não**.

A armadura Verthex é um conjunto de equipamento de alto nível. Se selecionar **Sim**, aparece:

**Aging Armadura Verthex:** O nível de aging da armadura. Valores de **0 a 999**.

---

### Possui luvas do Greedy?

**Obrigatório.** Selecione **Sim** ou **Não**.

As luvas do Greedy são obtidas com a relíquia Greedy e conferem bônus de ataque. Se selecionar **Sim**, aparece:

**Aging Luvas Greedy:** O nível de aging das luvas. Valores de **0 a 999**.

---

### Possui amuleto do Yag?

**Obrigatório.** Selecione **Sim** ou **Não**.

O amuleto do Yagditha (Yag) é um item de suporte especial. Não tem campo de aging.

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
