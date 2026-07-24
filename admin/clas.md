# Gerenciar Clãs

Esta página explica como cadastrar, editar e gerenciar os clãs no sistema.

## Cadastrar um novo clã

1. Vá em **Gestão → Clãs**
2. Toque em **+** (adicionar)
3. Preencha todos os campos (veja abaixo)
4. Toque em **Salvar**

### Campos do clã

| Campo | Obrigatório | Descrição |
|---|---|---|
| Nome do clã | Sim | Nome exibido no app |
| ID do clã (Painel) | Sim | Identificador numérico do clã no Painel |
| Servidor | Sim | Awell, Migal, Midranda, Cronus ou Idhas |
| E-mail do Líder | Sim | Conta do Painel do líder |
| Senha do Líder | Sim | Usada para login automático |
| E-mail do Vice-Líder | Sim | Conta do Painel do vice-líder |
| Senha do Vice-Líder | Sim | Usada como fallback se líder falhar |
| Nível mínimo | Sim | Nível mínimo para ser aceito (0 = sem restrição) |
| Alistamento Automático | Sim | Ativa/desativa o job automático |
| Verificar voto em BC | Sim | Exige que o candidato tenha votado no último BC |

::: warning Segurança das senhas
As senhas são armazenadas com criptografia **AES-256** no banco de dados. Elas nunca são exibidas em texto puro após salvas.
:::

---

## Editar um clã

1. Vá em **Gestão → Clãs**
2. Toque no clã que deseja editar
3. Altere os campos necessários
4. Se quiser alterar senhas: preencha o campo da nova senha. Se deixar em branco, a senha atual é mantida
5. Toque em **Salvar**

---

## Ativar ou desativar o alistamento automático

Para ativar:

1. Edite o clã
2. Marque **Alistamento Automático: Sim**
3. Salve

Para desativar:

1. Edite o clã
2. Marque **Alistamento Automático: Não**
3. Salve

::: info
O alistamento também pode ser **desativado automaticamente** pelo sistema se o login no Painel falhar 5 vezes consecutivas. Neste caso você receberá uma notificação push.
:::

---

## Ativar ou desativar a exigência de voto no BC

1. Edite o clã
2. Marque **Verificar voto em evento: Sim/Não**
3. Salve

Quando ativado, candidatos que não votaram no evento configurado ficam com status **Pendente** na fila de alistamento, até que votem. Esta é a versão simplificada da regra — veja a seção **Regras avançadas de alistamento automático** abaixo para configurar o número de eventos considerados e o que cada tipo de voto autoriza.

---

## Regras avançadas de alistamento automático

Além do nível mínimo e do toggle simples de voto em BC, cada clã tem um conjunto mais completo de regras que controla quem é aceito, colocado em pendência ou rejeitado pelo alistamento automático. Essas regras ficam na mesma tela de edição do clã, em uma seção própria.

### Exigir voto em Bless Castle (BC)

A configuração completa do voto em BC permite:

- **Número de eventos** — quantos dos últimos eventos de BC concluídos entram na verificação (padrão: 1)
- Quatro regras independentes, que podem ser ativadas separadamente:
  - **Voto Sim** — o candidato votou "Sim" em algum dos eventos considerados
  - **Voto Não** — o candidato votou "Não"
  - **Piloto Sim** — o piloto do candidato (quem registra presença por ele) votou "Sim"
  - **Piloto Não** — o piloto votou "Não"
- Para cada regra ativada, você escolhe o que ela autoriza:
  - **Personagem** — autoriza apenas o personagem que gerou o voto
  - **Todos os personagens** — autoriza todos os personagens do candidato
  - **Só o principal** — autoriza apenas o personagem marcado como principal
  - **Personagem + principal** — autoriza o personagem votante e o principal
  - **Nenhum** — a regra fica registrada mas não autoriza ninguém sozinha

Se nenhuma regra habilitada for satisfeita, o candidato permanece **Pendente** até votar.

### Exigir voto em PvP

Segue exatamente a mesma estrutura da regra de BC: número de eventos, regras de voto Sim/Não e piloto Sim/Não, cada uma com seu próprio modo de autorização (personagem / todos os personagens / só o principal / personagem + principal / nenhum). Use esta opção para clãs que priorizam participação em PvP.

### Exigir presença por snapshot de PvP

Além do voto, é possível exigir que o candidato tenha sido efetivamente visto em um evento de PvP, com base nos registros automáticos ("snapshots") capturados pelo próprio sistema de alistamento. Configure:

- **Subservidor** e **mapa** onde a presença deve ser verificada
- **Janela de horário** em que a captura é considerada válida
- **Tolerância** — margem de tempo aceita antes/depois da janela
- **Política para quem está offline** — o que fazer quando o snapshot não encontra o candidato

### Combinando as regras de BC e PvP

Quando as regras de BC e de PvP estão ativas ao mesmo tempo, escolha como elas se combinam:

- **E (todas)** — o candidato precisa satisfazer BC **e** PvP
- **OU (qualquer uma)** — basta satisfazer uma das duas

### Verificar "PvP Ativo"

Define uma janela de horário durante a qual o sistema verifica se os membros já alistados estão engajados em PvP (em grupo ou com presença confirmada). Fora dessa janela, a verificação não é aplicada.

Quem estiver **fora do grupo de PvP ou sem confirmação** durante a janela configurada tem o alistamento **suspenso** automaticamente, voltando para pendência até regularizar a situação.

### Não remover pontuadores de SoD

Quando ativada, esta opção **protege** os membros que pontuam no ranking de SoD contra a remoção automática por nível mínimo — mesmo com nível abaixo do configurado, eles não são removidos pela varredura automática.

### Notificar coordenador pendente

Quando ativada, os **Gerenciadores de Clã** recebem uma notificação sempre que houver alistamentos pendentes aguardando revisão manual (por exemplo, travados por blacklist ou por falta de voto).

### Whitelist de nicks

Lista de nicks **aceitos automaticamente**, sem passar por nenhuma das validações acima (nível mínimo, voto, presença, blacklist etc.). Use para membros já aprovados manualmente pela liderança.

### Blacklist de nicks

Lista de nicks **barrados** do alistamento automático. Para cada clã, escolha o comportamento:

- **Rejeitar** — o candidato é recusado automaticamente
- **Pendente** — o candidato fica marcado como pendente, aguardando decisão manual da liderança

::: info
Whitelist e blacklist são verificadas antes das demais regras. Um nick na whitelist é sempre aceito; um nick na blacklist segue o comportamento configurado (rejeitar ou pendente), independentemente de nível, voto ou presença.
:::

---

## Resetar sessão de login

Caso as cookies de sessão estejam corrompidas ou expiradas antes do prazo, você pode forçar um novo login:

1. Acesse o clã
2. Toque em **Resetar Sessão**
3. O sistema fará um novo login completo no próximo ciclo de alistamento

---

## Ver membros do clã

Esta funcionalidade está disponível para Admins e Gerenciadores de Clã:

1. Acesse o clã
2. Toque em **Ver Membros**
3. Você verá a lista completa do Painel com:
   - Posição (Líder, Vice, Membro, Alistado)
   - Nick, classe, nível
   - Data de entrada no clã
   - Último acesso registrado
4. Alistados aparecem no topo com botões de **Aceitar** e **Rejeitar**
5. Membros efetivos têm opção de **Remover**

::: warning
A ordem exibe alistados primeiro, depois offline (por tempo de inatividade), depois online.
:::

---

## Deletar um clã

::: danger Ação irreversível
Deletar um clã remove permanentemente os dados do sistema. As sessões de login e caches de alistamento **não são removidos automaticamente**.
:::

1. Acesse o clã
2. Toque em **Deletar**
3. Confirme a ação
