# Regras de Aceite e Rejeição

Esta página detalha todas as regras verificadas pelo sistema antes de aceitar ou rejeitar um alistamento.

## Regras em ordem de verificação

As regras são verificadas na seguinte ordem. Assim que uma falha é encontrada, o processo para:

### Regra 1 — Personagem cadastrado no app

**O que verifica:** Se o nick do personagem existe no banco de dados do Timaceta.

**Como cumprir:** [Cadastre seu personagem](/personagens/) no app com o nick **exatamente igual** ao do Zenit (maiúsculas e minúsculas importam).

**O que acontece se falhar:**
- Removido da fila silenciosamente (sem notificação)
- Sem mensagem de erro — o personagem simplesmente não entra

---

### Regra 2 — Usuário ativo no app

**O que verifica:** Se existe um usuário do app com a conta ativa vinculado ao personagem cadastrado.

**Como cumprir:** Ter uma conta ativa no Timaceta vinculada ao personagem.

**O que acontece se falhar:**
- Removido da fila silenciosamente (sem notificação)

---

### Regra 3 — Nível mínimo do clã

**O que verifica:** Se o nível do personagem é maior ou igual ao nível mínimo configurado para o clã.

**Como cumprir:** Ter o nível exigido. O nível mínimo de cada clã é definido pelo Admin.

**O que acontece se falhar:**
- Rejeitado e removido da fila
- Notificação enviada:
  > *"[Nick] não possui o nível mínimo exigido pelo clã [NomeCla]"*

---

### Regra 4 — Cadastro atualizado

**O que verifica:** Se o cadastro do personagem no app foi atualizado nos **últimos 30 dias**.

**Como cumprir:** Periodicamente, acesse o app → Personagens → selecione o personagem → toque em **Salvar** (mesmo sem alterar nada). Isso atualiza a data de verificação.

**O que acontece se falhar:**
- Rejeitado e removido da fila
- Notificação enviada:
  > *"Cadastro desatualizado. Acesse o app, vá em Personagens e clique em Salvar."*

::: tip Dica
Configure um lembrete mensal para atualizar seu personagem no app. Basta abrir o personagem e salvar — leva menos de 10 segundos.
:::

---

### Regra 5 — Voto no último evento de BC (opcional)

**O que verifica:** Se o clã tem a opção `Verificar voto em evento` ativada, o sistema verifica se você votou no **último evento de Bless Castle (BC) encerrado**.

**Aplicação:** Esta regra só existe se o Admin do clã configurou `Verificar voto em evento = Sim`.

**Como cumprir:** Vote no último evento de BC pelo app (seção Eventos → selecione o BC encerrado → registre seu voto).

**O que acontece se falhar:**
- Status **PENDENTE** (não é rejeitado — fica na fila)
- Uma notificação push é enviada (máximo 1 vez a cada 6 horas):
  > *"Você está pendente no alistamento. Vote no último evento de BC."*
- Após votar, será aceito automaticamente no próximo ciclo

---

## Tabela Resumo

| Regra | Configurável | Resultado se falhar | Notificação |
|---|---|---|---|
| Personagem no app | Não | Removido silenciosamente | Nenhuma |
| Usuário ativo | Não | Removido silenciosamente | Nenhuma |
| Nível mínimo | Sim (por clã) | Rejeitado e removido | Sim |
| Cadastro ≤ 30 dias | Não | Rejeitado e removido | Sim |
| Votou no BC | Sim (por clã) | Pendente (na fila) | Sim (6h/vez) |

---

## Situação de múltiplos personagens e piloto

Se você tem **mais de um personagem**, a verificação de voto no BC é feita pelo **usuário do app**, não pelo personagem individualmente.

**Exemplo:** Se você tem o personagem A (principal/piloto) e o personagem B (alt), e votou no BC com qualquer conta vinculada ao **mesmo usuário do app**, ambos os personagens são considerados como tendo votado.

**O que você precisa fazer:**
1. Cadastrar **todos os seus personagens** no app Timaceta
2. Todos devem estar vinculados à **mesma conta de usuário** (você faz login com uma conta só)
3. Votar no evento de BC pelo app — isso vale para todos os seus personagens

---

## Por que meu personagem está sendo rejeitado se tudo parece certo?

Checklist:

- [ ] O nick está **exatamente igual** ao do Zenit? (maiúsculas, espaços, acentos)
- [ ] Sua conta no Timaceta está **ativa**? (peça a um Admin para verificar)
- [ ] Você **salvou** o personagem nos **últimos 30 dias**?
- [ ] Seu nível atinge o **mínimo configurado** para o clã?
- [ ] Se o clã exige: você **votou no último BC encerrado**?

Se tudo estiver correto e o problema persistir, entre em contato com um Admin.
