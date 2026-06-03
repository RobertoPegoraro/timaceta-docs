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
| Nome do clã            | Sim         | Nome exibido no app (precisa ser exatamento igual no painel) |
| ID do clã (Painel)     | Sim         | Identificador numérico do clã no site da Painel              |
| Servidor               | Sim         | Awell, Migal, Midranda, Cronus ou Idhas                      |
| E-mail do Líder        | Sim         | Conta Painel do líder                                        |
| Senha do Líder         | Sim         | Usada para login automático                                  |
| E-mail do Vice-Líder   | Sim         | Conta Painel do vice-líder                                   |
| Senha do Vice-Líder    | Sim         | Usada como fallback se líder falhar                          |
| Nível mínimo           | Sim         | Nível mínimo para ser aceito (0 = sem restrição)             |
| Alistamento Automático | Sim         | Ativa/desativa o job automático                              |
| Verificar voto em BC   | Sim         | Exige que o candidato tenha votado no último BC              |

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

## Ativar ou desativar a exigência de voto no BC

1. Edite o clã
2. Marque **Verificar voto em evento: Sim/Não**
3. Salve

Quando ativado, candidatos que não votaram no último BC ficam com status **Pendente** na fila de alistamento.

### Configuração de voto em evento

Ao ativar a verificação de voto, é possível configurar quantos eventos serão considerados e quais personagens ficam
autorizados conforme o tipo de voto registrado no BC mais recente.

#### Voto com personagem

Define quais personagens do dono são autorizados quando o voto foi registrado com um personagem normal (não piloto).

| Campo       | Descrição                                                                   |
|-------------|-----------------------------------------------------------------------------|
| Votou Sim   | Quais personagens ficam autorizados quando o dono votou **Sim**             |
| Votou Não   | Quais personagens ficam autorizados quando o dono votou **Não**             |

Opções disponíveis:

| Opção                                   | Descrição                                                                 |
|-----------------------------------------|---------------------------------------------------------------------------|
| Apenas o personagem que votou           | Somente o personagem usado no voto fica autorizado                        |
| Todos os personagens do usuário         | Todos os personagens do dono ficam autorizados                            |
| Personagem principal                    | Apenas o personagem marcado como principal fica autorizado                |
| Personagem que votou + principal        | O personagem do voto e o personagem principal ficam autorizados           |
| Nenhum personagem                       | Este tipo de voto não autoriza entrada de nenhum personagem               |

#### Voto como piloto

Define quais personagens do dono são autorizados quando o voto foi registrado como **Piloto** no BC.

| Campo       | Descrição                                                                   |
|-------------|-----------------------------------------------------------------------------|
| Votou Sim   | Quais personagens ficam autorizados quando o piloto votou **Sim**           |
| Votou Não   | Quais personagens ficam autorizados quando o piloto votou **Não**           |

Opções disponíveis:

| Opção                  | Descrição                                                                    |
|------------------------|------------------------------------------------------------------------------|
| Todos os personagens   | Todos os personagens do dono ficam autorizados                               |
| Personagem principal   | Apenas o personagem marcado como principal fica autorizado                   |
| Nenhum personagem      | Este tipo de voto de piloto não autoriza entrada de nenhum personagem        |

::: tip
As configurações de **Voto com personagem** e **Voto como piloto** são independentes, permitindo regras distintas
para cada situação — por exemplo, exigir o personagem principal quando o piloto vota Não, mas liberar todos os
personagens quando o piloto vota Sim.
:::

---

## Deletar um clã

::: danger Ação irreversível
Deletar um clã remove permanentemente os dados do sistema. As sessões de login e caches de alistamento **não são
removidos automaticamente**.
:::

1. Acesse o clã
2. Toque em **Deletar**
3. Confirme a ação
