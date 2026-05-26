# Relatórios (Google Sheets)

O sistema oferece dois relatórios exportáveis diretamente para uma planilha do **Google Sheets**: lista de personagens dos membros e participações em eventos BC.

## Como acessar

1. Abra o menu lateral (☰)
2. Vá em **Gestão → Relatórios**
3. Escolha o relatório desejado

---

## Relatório 1 — Lista de Personagens

Exporta os dados completos de todos os usuários ativos e seus personagens para uma planilha Google Sheets.

### Quem pode usar
Admin

### Como usar

1. Em **Relatórios**, toque em **Lista de Personagens**
2. Informe o **ID da Planilha** do Google Sheets onde os dados serão salvos
   - O ID fica na URL da planilha: `docs.google.com/spreadsheets/d/**ID_AQUI**/edit`
3. Toque em **Atualizar Planilha**
4. Aguarde o processamento (uma janela de progresso é exibida)
5. A planilha é atualizada automaticamente

::: tip
O sistema salva o ID da última planilha usada. Na próxima vez o campo já virá preenchido.
:::

### Dados exportados

Para cada usuário ativo e seus personagens, a planilha recebe as seguintes colunas:

| Coluna | Conteúdo |
|---|---|
| Nome | Nome completo do usuário |
| Telefone | WhatsApp cadastrado |
| E-mail | E-mail de login |
| Último acesso | Data e hora do último acesso ao app |
| Nick | Nick do personagem |
| Nível | Nível atual |
| Classe | Classe do personagem |
| Verthex Ataque | Sim/Não + aging |
| Armadura Verthex | Sim/Não + aging |
| Luvas Greedy | Sim/Não + aging |
| Amuleto Yag | Sim/Não |
| Relíquias | Lista de relíquias do personagem |
| Quests | Todas as quests feitas? Sim/Não |

---

## Relatório 2 — Participações BC

Exporta uma matriz de presença em eventos de Bless Castle para uma planilha Google Sheets.

### Quem pode usar
Admin e Coordenador BC

### Como usar

1. Em **Relatórios**, toque em **Participações BC**
2. Informe o **ID da Planilha** do Google Sheets
3. Selecione o **período** de análise:
   - Últimos **30 dias**
   - Últimos **60 dias**
   - Últimos **90 dias**
4. Toque em **Atualizar Planilha**
5. Aguarde o processamento

::: tip
O sistema salva o período selecionado como padrão para a próxima vez.
:::

### Estrutura da planilha exportada

A planilha é organizada como uma **matriz**:

- **Linhas** = cada usuário ativo
- **Colunas** = cada evento BC no período (da mais recente para a mais antiga)

Para cada cruzamento (usuário × evento):

| Valor | Significado |
|---|---|
| SIM | Votou que vai participar |
| NÃO | Votou que não vai participar |
| NÃO VOTOU | Não registrou presença |
| — | Usuário foi criado após o evento (não podia votar) |

### Colunas de totais (ao final)

| Coluna | Conteúdo |
|---|---|
| Total Eventos | Quantos BCs ocorreram no período |
| Total SIM | Quantas vezes o usuário votou SIM |
| Total NÃO | Quantas vezes o usuário votou NÃO |
| Total Não Votou | Quantas vezes não votou |

### Para que serve

- Identificar membros com baixa participação em BCs
- Embasar decisões de permanência no clã
- Verificar se a regra de voto no BC está sendo cumprida
- Acompanhar evolução de participação ao longo do tempo

---

## Pré-requisito: Autenticação Google Sheets

Para que a exportação funcione, o sistema precisa de autorização para escrever na planilha. Esse processo de autenticação é feito internamente pelo sistema (OAuth). Se a autenticação expirar, entre em contato com o administrador técnico do app.

::: warning
A planilha deve estar acessível pela conta Google configurada no sistema. Compartilhe a planilha com permissão de **Editor** para a conta de serviço configurada.
:::
