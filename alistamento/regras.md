# Regras de Aceite e Rejeição

Esta página detalha as regras verificadas pelo sistema antes de aceitar ou rejeitar um alistamento.

## Regras em ordem de verificação

### Regra 1 — Personagem cadastrado no app

O personagem precisa existir no APP Timaceta.

### Regra 2 — Usuário ativo no app

É necessário existir uma conta ativa vinculada ao personagem.

### Regra 3 — Nível mínimo do clã

O personagem deve atender ao nível mínimo configurado pelo clã.

### Regra 4 — Cadastro atualizado

O cadastro do personagem deve ter sido atualizado nos últimos 30 dias.

### Regra 5 — Participação em eventos de BC (opcional)

Esta regra existe apenas quando o clã ativa a validação de participação em eventos.

Dependendo da configuração do clã, pode ser necessário:

- Ter participado do último BC;
- Ter participado dos últimos 2 BCs;
- Ter participado dos últimos 3 BCs;
- Ou outra quantidade definida pelo Admin.

Caso os requisitos de participação não sejam atendidos:

- O alistamento permanece pendente;
- O personagem não é removido da fila;
- O sistema tentará novamente nos próximos ciclos.

### Regra 6 — Participação em PvP (opcional)

Esta regra existe apenas quando o clã ativa a validação de participação em PvP.

O sistema verifica se o personagem esteve presente no local correto (subservidor, mapa e horário) durante os eventos de
PvP, com base em **snapshots** de localização capturados periodicamente.

Para ser considerado presente, o personagem precisa aparecer em pelo menos **X snapshots** das últimas **N
capturadas**, conforme configurado pelo Admin. Uma snapshot é válida se o personagem atender a qualquer uma das regras
de localização definidas.

Caso os requisitos de presença não sejam atendidos:

- O alistamento permanece pendente;
- O personagem não é removido da fila;
- O sistema tentará novamente nos próximos ciclos.

---

## Tabela Resumo

| Regra                 | Configurável | Resultado se falhar |
|-----------------------|--------------|---------------------|
| Personagem no app     | Não          | Removido            |
| Usuário ativo         | Não          | Removido            |
| Nível mínimo          | Sim          | Rejeitado           |
| Cadastro atualizado   | Não          | Rejeitado           |
| Participação em BC    | Sim          | Pendente            |
| Participação em PvP   | Sim          | Pendente            |

---

## Participação em BCs, personagem principal e personagens alternativos

Alguns clãs exigem participação em eventos de Bless Castle para liberar o alistamento automático.

Dependendo da configuração escolhida pelo Admin do clã, o sistema pode considerar:

- Apenas o personagem utilizado no voto;
- Apenas o personagem principal;
- O personagem utilizado no voto e o personagem principal;
- Todos os personagens vinculados à mesma conta;
- Ou nenhuma associação adicional.

Também é possível que o clã exija participação em mais de um BC recente.

Por isso, dois jogadores que participaram do mesmo evento podem ter resultados diferentes, dependendo das regras
configuradas pelo clã.

---

## Por que meu personagem está pendente ou sendo rejeitado?

Verifique:

- O nick está correto?
- Sua conta está ativa?
- O cadastro foi atualizado nos últimos 30 dias?
- O nível atende ao mínimo exigido?
- Você participou da quantidade de BCs exigida pelo clã?
- Seu personagem esteve presente nos locais de PvP exigidos pelo clã?
