# Gerenciar Clãs

Esta página explica como cadastrar, editar e gerenciar os clãs no sistema.

## Cadastrar um novo clã

1. Vá em **Gestão → Clãs**
2. Toque em **+** (adicionar)
3. Preencha todos os campos (veja abaixo)
4. Toque em **Salvar**

### Campos do clã

| Campo                  | Obrigatório | Descrição                                                    |
|------------------------|-------------|--------------------------------------------------------------|
| Nome do clã            | Sim         | Nome exibido no app (precisa ser exatamente igual no painel) |
| ID do clã (Painel)     | Sim         | Identificador numérico do clã no site do Painel              |
| Servidor               | Sim         | Awell, Migal, Midranda, Cronus ou Idhas                      |
| E-mail do Líder        | Sim         | Conta Painel do líder                                        |
| Senha do Líder         | Sim         | Usada para login automático                                  |
| E-mail do Vice-Líder   | Sim         | Conta Painel do vice-líder                                   |
| Senha do Vice-Líder    | Sim         | Usada como fallback se o líder falhar                        |
| Nível mínimo           | Não         | Nível mínimo para ser aceito (0 = sem restrição)             |
| Alistamento Automático | Não         | Ativa/desativa o job automático                              |

::: warning Segurança das senhas
As senhas são armazenadas com criptografia **AES-256** no banco de dados. Elas nunca são exibidas em texto puro após
salvas.
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
O alistamento também pode ser **desativado automaticamente** pelo sistema se o login no Painel falhar 5 vezes
consecutivas. Neste caso você receberá uma notificação push.
:::

---

## Exigir voto em eventos de BC

Quando ativado, candidatos que não atenderam aos requisitos de participação no BC ficam com status **Pendente** na fila
de alistamento.

1. Edite o clã
2. Ative **Exigir voto em eventos BC**
3. Toque em **Configuração de voto em evento** para abrir as configurações detalhadas
4. Ajuste os parâmetros e toque em **Salvar** dentro do modal

::: info
Ao editar um clã existente, salvar a configuração no modal já persiste imediatamente no banco de dados, sem precisar
salvar o clã novamente.
:::

### Configuração de voto em evento (modal)

| Campo                    | Descrição                                                              |
|--------------------------|------------------------------------------------------------------------|
| Últimos eventos          | Quantos BCs recentes serão considerados (ex: 5 = últimos 5 BCs)       |
| Contar apenas concluídos | Se ativo, eventos ainda em andamento não são contabilizados            |

#### Voto com personagem

Define quais personagens do dono são autorizados quando o voto foi registrado com um personagem normal (não piloto).

| Campo     | Descrição                                                       |
|-----------|-----------------------------------------------------------------|
| Votou Sim | Quais personagens ficam autorizados quando o dono votou **Sim** |
| Votou Não | Quais personagens ficam autorizados quando o dono votou **Não** |

Opções disponíveis:

| Opção                            | Descrição                                                       |
|----------------------------------|-----------------------------------------------------------------|
| Apenas o personagem que votou    | Somente o personagem usado no voto fica autorizado              |
| Todos os personagens do usuário  | Todos os personagens do dono ficam autorizados                  |
| Personagem principal             | Apenas o personagem marcado como principal fica autorizado      |
| Personagem que votou + principal | O personagem do voto e o personagem principal ficam autorizados |
| Nenhum personagem                | Este tipo de voto não autoriza entrada de nenhum personagem     |

#### Voto como piloto

Define quais personagens do dono são autorizados quando o voto foi registrado como **Piloto** no BC.

| Campo     | Descrição                                                              |
|-----------|------------------------------------------------------------------------|
| Votou Sim | Quais personagens ficam autorizados quando o piloto votou **Sim**      |
| Votou Não | Quais personagens ficam autorizados quando o piloto votou **Não**      |

Opções disponíveis:

| Opção                  | Descrição                                                              |
|------------------------|------------------------------------------------------------------------|
| Todos os personagens   | Todos os personagens do dono ficam autorizados                         |
| Personagem principal   | Apenas o personagem marcado como principal fica autorizado             |
| Nenhum personagem      | Este tipo de voto de piloto não autoriza entrada de nenhum personagem  |

::: tip
As configurações de **Voto com personagem** e **Voto como piloto** são independentes, permitindo regras distintas
para cada situação — por exemplo, exigir o personagem principal quando o piloto vota Não, mas liberar todos os
personagens quando o piloto vota Sim.
:::

---

## Exigir participação em PvP

Quando ativado, o sistema verifica se o personagem estava presente no local do evento de PvP durante a janela
configurada, com base em **snapshots** de localização capturados periodicamente.

1. Edite o clã
2. Ative **Exigir participação em PvP**
3. Toque em **Configuração de participação em PvP** para abrir as configurações detalhadas
4. Ajuste os parâmetros e toque em **Salvar** dentro do modal

::: info
Ao editar um clã existente, salvar a configuração no modal já persiste imediatamente no banco de dados, sem precisar
salvar o clã novamente.
:::

### Configuração de participação em PvP (modal)

#### Campos globais

| Campo                      | Descrição                                                                                      |
|----------------------------|------------------------------------------------------------------------------------------------|
| Nº de snapshots a avaliar  | Quantas snapshots recentes serão buscadas (ex: 10 = últimas 10 snapshots capturadas)           |
| Presenças mínimas exigidas | Quantas dessas snapshots precisam registrar o personagem no local correto (ex: 3 de 10)        |

#### Regras de localização

Cada regra define um critério de presença válida. É possível adicionar **múltiplas regras** — uma snapshot é
considerada válida se o personagem atender a qualquer uma das regras configuradas.

Para adicionar uma regra, toque em **Adicionar regra**. Para remover, toque no ícone de lixeira ao lado da regra.

| Campo          | Obrigatório | Descrição                                                              |
|----------------|-------------|------------------------------------------------------------------------|
| Subservidor    | Sim         | Subservidor onde o PvP ocorreu (Alfa, Beta, Gama, Delta, Ômega, Zeta) |
| Mapa           | Não         | Mapa do evento (Coração de Fogo, Santuário do Abismo, etc.)            |
| Horário início | Sim         | Início da janela de verificação (formato 24h, ex: 22:00)               |
| Horário fim    | Sim         | Fim da janela de verificação (formato 24h, ex: 23:00)                  |

::: info
Quando o campo **Mapa** não é preenchido, a validação considera apenas o subservidor e o horário — o mapa é ignorado.
Quando preenchido, personagens localizados na cidade no momento do snapshot são ignorados; apenas o servidor é
levado em consideração.
:::

::: tip Exemplo com múltiplas regras
Um clã pode configurar duas regras para cobrir diferentes eventos no mesmo ciclo:

- **Regra 1:** Ômega · Coração de Fogo · 23:00 → 01:00
- **Regra 2:** Alfa · Arma Antiga · 22:00 → 23:00

Com `Nº de snapshots = 10` e `Presenças mínimas = 3`, o personagem precisa aparecer em pelo menos 3 das últimas 10
snapshots, em qualquer uma das regras acima.
:::

---

## Whitelist de alistamento

A whitelist permite que nicks específicos sejam **aceitos automaticamente** sem passar pelas verificações normais
(nível mínimo, participação em BC, participação em PvP, etc.).

1. Edite o clã (ele já precisa estar salvo)
2. Com **Alistamento Automático** ativo, toque em **Whitelist**
3. Adicione ou remova nicks conforme necessário
4. Confirme — a whitelist é salva imediatamente

---

## Deletar um clã

::: danger Ação irreversível
Deletar um clã remove permanentemente os dados do sistema. As sessões de login e caches de alistamento **não são
removidos automaticamente**.
:::

1. Acesse o clã
2. Toque em **Deletar**
3. Confirme a ação
