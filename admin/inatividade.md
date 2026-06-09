# Usuários Inativos

O sistema de inatividade monitora automaticamente os membros que deixaram de votar nos eventos de Bless Castle e toma
ações para alertá-los e auxiliar a liderança na gestão do engajamento.

---

## Como funciona

### 1. Disparo automático ao encerrar um BC

Toda vez que um administrador **encerra a votação de um evento de Bless Castle**, o sistema executa uma varredura
automática em segundo plano. Esse processo:

1. Consulta os **últimos N eventos** encerrados (N é configurável — veja [Configuração](#configuracao)).
2. Verifica, para cada membro ativo, se ele votou em **algum** desses eventos.
3. Classifica como **inativo** todo membro que **não votou em nenhum** dos últimos N eventos.

> A varredura roda após o encerramento e não bloqueia a tela do administrador — é um processo em segundo plano.

---

### 2. Definição de inatividade

Um membro é considerado **inativo** quando:

- Possui cadastro **ativo** no sistema, e
- **Não registrou voto** (nem Sim, nem Não, nem como Piloto) em **nenhum** dos últimos N eventos de Bless Castle.

Se o membro votou em pelo menos um evento dentro da janela, ele **não** aparece como inativo.

---

### 3. Configuração — número de eventos

O valor de N é definido nas **Configurações do Sistema** pelo campo **"Eventos para Inatividade"** (`eventos_inatividade`
no Firestore).

- **Padrão:** 3 eventos
- **Mínimo:** 1 evento
- Para alterar: **Gestão → Configurações** → campo "Eventos para Inatividade"

::: tip
Quanto menor o número, mais sensível é a detecção. Um valor de 1 marca como inativo qualquer membro que não votou no
último BC. Um valor de 5 exige ausência em 5 BCs consecutivos.
:::

---

### 4. Notificação push aos inativos

Após identificar os membros inativos, o sistema envia uma **notificação push** diretamente para cada um deles (via
Firebase Cloud Messaging). A notificação informa:

- **Título:** "Inatividade detectada"
- **Corpo:** "Você não votou nos últimos N eventos. Participe!"

A notificação só é enviada para dispositivos que possuem token FCM registrado (ou seja, o membro já fez login no app
pelo menos uma vez).

---

### 5. Banner na tela inicial

Além do push, o sistema grava um registro no Firestore para cada membro inativo
(`inatividade_notificacoes/{userId}`). Na próxima vez que o membro abre o app:

- Um **banner de aviso** aparece na tela inicial com a mensagem:
  > "Você não votou nos últimos eventos do Bless Castle."
- O banner **bloqueia a tela inicial** — o membro precisa fechar o aviso antes de usar o app.
- Ao fechar o banner, o flag `mostrar` no Firestore é marcado como `false` e o banner não reaparece.

---

## Tela de Usuários Inativos

Acesse em **Gestão → Usuários Inativos** (visível apenas para Admins).

### O que a tela mostra

- **Cabeçalho:** quantos eventos foram considerados na última varredura, qual foi o último evento encerrado e quando
  a varredura ocorreu.
- **Chip de contagem:** número total de membros inativos detectados (verde = nenhum, vermelho = há inativos).
- **Lista de membros inativos:** ordenada por data de último acesso ao app — quem **não acessa há mais tempo aparece
  primeiro**. Membros que nunca acessaram ficam no topo.

### Informações de cada membro

| Campo          | Descrição                               |
|----------------|-----------------------------------------|
| Nome           | Nome completo cadastrado                |
| Telefone       | WhatsApp registrado no perfil           |
| E-mail         | E-mail da conta                         |
| Último acesso  | Data do último login no app             |

### Ações disponíveis

Toque no ícone **⋮** ao lado de um membro para acessar o menu:

- **Inativar Cadastro** — desativa a conta do membro. Uma modal de confirmação é exibida antes da ação.
  Após a inativação, o membro perde acesso ao app e é removido da lista imediatamente.

::: warning
A inativação é **imediata**. O membro perderá o acesso assim que você confirmar. Para reativar, use a tela
**Gestão → Usuários**.
:::

---

## Dados persistidos no Firestore

| Coleção / Documento                        | Conteúdo                                                                    |
|--------------------------------------------|-----------------------------------------------------------------------------|
| `inatividade_config/ultimo_verificado`     | Nome do último evento verificado, data da varredura, total de inativos e N  |
| `inatividade_notificacoes/{userId}`        | `mostrar: true/false`, mensagem, N e data da verificação para cada inativo  |

---

## Fluxo completo resumido

```
Admin encerra BC
      ↓
Sistema salva metadados (inatividade_config/ultimo_verificado)
      ↓
Computa inativos (membros ativos sem voto nos últimos N eventos)
      ↓
Para cada inativo:
  ├── Grava inatividade_notificacoes/{userId} com mostrar: true
  └── Envia push notification (se token FCM disponível)
      ↓
Membro abre o app:
  ├── Banner bloqueia tela inicial
  └── Ao fechar: mostrar → false (banner não reaparece)
```

---

## Boas práticas

- **Revise a lista regularmente** após cada BC encerrado para identificar membros que precisam de atenção.
- **Ajuste o valor de N** conforme a frequência de BCs do clã. Para clãs com BCs semanais, N=3 representa ~3 semanas
  de inatividade.
- **Use "Inativar Cadastro"** com cautela — confirme antes com a liderança se o membro deve ser removido do sistema.
