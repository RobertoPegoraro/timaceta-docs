# Cadastrar / Editar Personagem

Esta página explica cada campo do formulário de personagem e o que ele significa.

## Abrindo o formulário

- **Novo personagem:** Vá em Personagens → toque em **+**
- **Editar existente:** Vá em Personagens → toque no personagem desejado

---

## Campos do formulário

### Nick

**Obrigatório.** O nome do personagem exatamente como aparece no Painel.

::: tip Maiúsculas e minúsculas não importam
A verificação de nick duplicado **não diferencia maiúsculas de minúsculas**. Ou seja, `KnightRobert` e `knightrobert` são tratados como o **mesmo nick** — se alguém já cadastrou um deles, você não conseguirá cadastrar o outro.
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
| Midranda | | Dama Flamejante | |

Relíquias são artefatos especiais que conferem habilidades únicas ao personagem. Registrá-las ajuda a liderança a conhecer o potencial do seu personagem para eventos.

---

### Possui Verthex de ataque?

Selecione **Sim** ou **Não** (o padrão é **Não**).

O Verthex de ataque é um item raro que aumenta o dano. Se selecionar **Sim**, um campo adicional aparece:

**Aging Verthex Ataque:** O nível de "aging" (envelhecimento) do item. Quanto maior, mais poderoso. Valores de **0 a 999**.

::: tip Não bloqueia o salvamento
Este campo não é exigido para salvar o personagem — se você não tocar nele, o formulário salva normalmente com o valor **Não**.
:::

---

### Possui armadura Verthex?

Selecione **Sim** ou **Não** (o padrão é **Não**).

A armadura Verthex é um conjunto de equipamento de alto nível. Se selecionar **Sim**, aparece:

**Aging Armadura Verthex:** O nível de aging da armadura. Valores de **0 a 999**.

Assim como o campo anterior, ele não bloqueia o salvamento caso você não o preencha.

---

### Possui luvas do Greedy?

Selecione **Sim** ou **Não** (o padrão é **Não**).

As luvas do Greedy são obtidas com a relíquia Greedy e conferem bônus de ataque. Se selecionar **Sim**, aparece:

**Aging Luvas Greedy:** O nível de aging das luvas. Valores de **0 a 999**.

---

### Possui Bracelete Dama Flamejante?

Selecione **Sim** ou **Não** (o padrão é **Não**).

O Bracelete Dama Flamejante é um item obtido com a relíquia de mesmo nome. Funciona exatamente como os campos de equipamento acima — se selecionar **Sim**, aparece:

**Aging Bracelete Dama Flamejante:** O nível de aging do bracelete. Valores de **0 a 999**.

---

### Possui amuleto do Yag?

Selecione **Sim** ou **Não** (o padrão é **Não**).

O amuleto do Yagditha (Yag) é um item de suporte especial. Não tem campo de aging.

---

### Fez todas as Quests?

Selecione **Sim** ou **Não** (o padrão é **Não**).

Indica se o personagem completou todas as missões (quests) disponíveis no jogo. Personagens com todas as quests feitas têm acesso a bônus e conteúdo adicional.

::: info Campos opcionais na prática
Nenhum dos campos Sim/Não acima (Verthex, Armadura, Luvas, Bracelete, Amuleto, Quests) impede o salvamento do personagem. Eles existem para que a liderança conheça o equipamento do seu personagem, mas o formulário salva normalmente mesmo que você não toque em nenhum deles — nesse caso, todos ficam registrados como **Não**. Os únicos campos realmente exigidos para salvar são **Nick**, **Nível** e **Classe**.
:::

---

### Marcar como personagem principal

**Opcional** (switch/interruptor). Indica qual dos seus personagens é o **principal** — útil quando você tem mais de um personagem cadastrado (por exemplo, um piloto e um alt).

Essa marcação é usada por outras partes do sistema, como critério de desempate na escolha automática de quem vai pilotar um personagem durante eventos. Só um personagem por vez pode estar marcado como principal.

---

### Compartilhado com

**Opcional.** Permite vincular este personagem a outros usuários do app.

Veja a página [Compartilhamento de Personagem](/personagens/compartilhamento) para entender como funciona.

---

## Salvando

Preencha ao menos **Nick**, **Nível** e **Classe** — esses são os únicos campos realmente exigidos — e toque em **Salvar**. O sistema valida os dados e salva. Campos com erro são destacados em vermelho com a mensagem de correção.

---

## Resumo de validações

| Campo | Regra |
|---|---|
| Nick | Obrigatório, único no sistema (não diferencia maiúsculas/minúsculas) |
| Nível | Obrigatório, entre 165 e 185 |
| Classe | Obrigatório, selecionar da lista |
| Relíquias | Opcional, múltipla escolha |
| Verthex Ataque | Opcional, padrão Não; se Sim, aging 0-999 |
| Armadura Verthex | Opcional, padrão Não; se Sim, aging 0-999 |
| Luvas Greedy | Opcional, padrão Não; se Sim, aging 0-999 |
| Bracelete Dama Flamejante | Opcional, padrão Não; se Sim, aging 0-999 |
| Amuleto Yag | Opcional, padrão Não |
| Quests completas | Opcional, padrão Não |
| Personagem principal | Opcional, switch (usado como desempate de piloto em eventos) |
