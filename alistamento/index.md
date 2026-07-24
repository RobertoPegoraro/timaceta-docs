# Alistamento — Visão Geral

O **alistamento** é o processo pelo qual um personagem entra para o clã no Painel. O Timaceta oferece dois modos:

| Modo | Quem aciona | Quando usar |
|---|---|---|
| [Automático](/alistamento/automatico) | Sistema (job a cada 5 min) | Uso normal do dia a dia |
| [Manual](/alistamento/manual) | O próprio jogador | Quando quiser agilizar ou o automático não cobrir |

## O que é necessário para ser aceito?

Independente do modo, o sistema verifica as mesmas regras antes de aceitar um alistamento. Veja em detalhes na página [Regras de Aceite e Rejeição](/alistamento/regras).

**Resumo das exigências:**

1. Seu **personagem deve estar cadastrado** no app Timaceta com o nick exato
2. Sua **conta de usuário** no app deve estar **ativa**
3. O **nível** do personagem deve atingir o mínimo exigido pelo clã
4. O cadastro do personagem deve ter sido **atualizado nos últimos 30 dias**
5. Se o clã exigir: você deve **atender aos critérios de participação em eventos** configurados pelo Admin — hoje isso pode envolver voto em Bless Castle (BC), voto em PvP e/ou presença confirmada em PvP, a depender de como o clã configurou essas regras (veja o resumo logo abaixo e o detalhamento completo em [Alistamento Automático](/alistamento/automatico) e [Regras de Aceite e Rejeição](/alistamento/regras))

## Regras avançadas (configuráveis por clã)

Além das exigências básicas acima, o Admin de cada clã pode ativar verificações extras. Resumo:

- **Voto no BC:** por padrão considera apenas o último evento encerrado, mas o Admin pode configurar quantos eventos recentes contam (padrão 1) e regras separadas para quem **votou Sim**, quem **votou Não** e quem **votou como piloto** de outro personagem — cada regra decide se libera só aquele personagem, todos os personagens do usuário, só o personagem principal, personagem + principal, ou nenhum.
- **Voto e presença em PvP:** o clã também pode exigir participação em eventos de PvP (voto e/ou presença confirmada), seguindo a mesma lógica de regras configuráveis do BC.
- **Whitelist e blacklist de nicks:** o Admin pode cadastrar nicks **sempre aceitos** (whitelist) e nicks **sempre rejeitados ou pendentes** (blacklist), por clã.
- **Janela "PvP Ativo":** em certos horários, o alistamento pode ficar temporariamente suspenso para quem não está em grupo de PvP nem confirmou presença naquele momento.
- **Janela "Escalação BC":** nos dias de evento de Bless Castle, entre **10h e 14h30 (horário de Brasília)**, o alistamento pode ficar temporariamente restrito a quem está escalado na Escalação de BC.
- **Troca recente de personagem principal:** trocar de personagem principal recentemente pode **bloquear o alistamento desse personagem por 24 horas**.
- **Remoção por nível mínimo:** a verificação de nível não vale só para quem está entrando — membros que **já fazem parte do clã há tempos** também podem ser removidos automaticamente se o nível deles cair abaixo do mínimo exigido.

## Processo geral

```
Você envia pedido no Painel
        ↓
Sistema Timaceta verifica as regras
        ↓
    Passou? ──── SIM ──→ Aceito automaticamente
                         Você recebe notificação push
        ↓
       NÃO
        ↓
  Verificar voto? ─ SIM (mas não votou) ─→ Pendente
                    Notificação de aviso enviada 1x a cada 6h
        ↓
  Outra regra falhou ─→ Rejeitado e removido da fila
```

## Vagas no clã

O Painel permite no máximo **65 membros** por clã. Quando não há vagas disponíveis, o sistema pode:

- Verificar se existem membros **offline há muito tempo**
- Remover os membros mais inativos para abrir vagas
- Nunca removerá **Líderes** ou **Vice-Líderes**
- Protege membros aceitos nos **últimos 30 minutos**

## Logs e regras do clã

Na mesma tela do alistamento, Admin e Gerenciador de Clã têm acesso a dois atalhos extras por clã:

- **Ver Logs do Alistamento:** histórico das decisões (aceitos, rejeitados, pendentes) tomadas pelo sistema
- **Regras de Alistamento** (ícone de informação): resumo das regras configuradas especificamente para aquele clã

## Dúvidas frequentes

**Por que fui rejeitado?**
Verifique se seu personagem está cadastrado, ativo, com nível suficiente e com cadastro atualizado. Veja [Regras de Aceite e Rejeição](/alistamento/regras).

**Por que está "Pendente"?**
Normalmente é porque falta atender a algum critério de participação exigido pelo clã (voto no BC, voto ou presença em PvP, estar fora de uma janela de horário, etc.). Após resolver a pendência, o sistema te aceita no próximo ciclo (em até 5 minutos). Veja os detalhes em [Regras de Aceite e Rejeição](/alistamento/regras).

**Quanto tempo leva para ser aceito?**
O sistema automático roda a cada **5 minutos**. Se passar em todas as regras, você é aceito em até 5 minutos.
