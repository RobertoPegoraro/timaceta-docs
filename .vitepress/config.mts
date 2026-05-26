import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Timaceta — Manual do Sistema',
  description: 'Documentação completa do app Timaceta para gestão de clãs no Priston Tales (Zenit)',
  lang: 'pt-BR',
  base: '/timaceta-docs/',

  head: [
    ['meta', { name: 'theme-color', content: '#1a1a2e' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Timaceta — Manual do Sistema' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'Timaceta Docs',

    nav: [
      { text: 'Início', link: '/' },
      { text: 'Alistamento', link: '/alistamento/automatico' },
      { text: 'Recrutamento', link: '/recrutamento/' },
      { text: 'Administração', link: '/admin/' },
    ],

    sidebar: [
      {
        text: 'Primeiros Passos',
        items: [
          { text: 'Visão Geral', link: '/' },
          { text: 'Tela Inicial (Home)', link: '/inicio/' },
          { text: 'Login e Autenticação', link: '/login/' },
          { text: 'Criar Conta', link: '/login/criar-conta' },
          { text: 'Recuperar Senha', link: '/login/recuperar-senha' },
        ],
      },
      {
        text: 'Perfil e Personagens',
        items: [
          { text: 'Meu Perfil', link: '/perfil/' },
          { text: 'Personagens — Visão Geral', link: '/personagens/' },
          { text: 'Cadastrar / Editar Personagem', link: '/personagens/campos' },
          { text: 'Compartilhamento de Personagem', link: '/personagens/compartilhamento' },
          { text: 'Consultar Membros', link: '/personagens/consultar-membros' },
        ],
      },
      {
        text: 'Alistamento',
        items: [
          { text: 'Como funciona', link: '/alistamento/' },
          { text: 'Alistamento Automático', link: '/alistamento/automatico' },
          { text: 'Alistamento Manual', link: '/alistamento/manual' },
          { text: 'Regras de Aceite e Rejeição', link: '/alistamento/regras' },
        ],
      },
      {
        text: 'Recrutamento',
        items: [
          { text: 'Visão Geral', link: '/recrutamento/' },
          { text: 'Como Votar', link: '/recrutamento/votacao' },
          { text: 'Gerenciar Candidatos', link: '/recrutamento/gerenciar' },
        ],
      },
      {
        text: 'Eventos (BC e PvP)',
        items: [
          { text: 'Eventos e Votação', link: '/eventos/' },
          { text: 'Grupos PvP', link: '/eventos/grupos-pvp' },
        ],
      },
      {
        text: 'Informações do Clã',
        items: [
          { text: 'Regras', link: '/regras/' },
          { text: 'Horário dos Bosses', link: '/horario-boss/' },
          { text: 'Política de Privacidade', link: '/privacidade/' },
        ],
      },
      {
        text: 'Permissões e Cargos',
        items: [
          { text: 'Cargos do Sistema', link: '/permissoes/' },
          { text: 'O que cada cargo pode fazer', link: '/permissoes/funcionalidades' },
        ],
      },
      {
        text: 'Administração',
        items: [
          { text: 'Visão Geral', link: '/admin/' },
          { text: 'Gerenciar Clãs', link: '/admin/clas' },
          { text: 'Gerenciar Usuários', link: '/admin/usuarios' },
          { text: 'Configurações do Sistema', link: '/admin/configuracoes' },
          { text: 'Notificações', link: '/admin/notificacoes' },
          { text: 'Avisos e Dicas', link: '/admin/avisos' },
          { text: 'Relatórios (Google Sheets)', link: '/admin/relatorios' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [],

    footer: {
      message: 'Timaceta — Gestão de Clãs para Priston Tales (Zenit)',
      copyright: 'Documentação interna — uso restrito ao clã',
    },

    editLink: {
      pattern: '',
      text: '',
    },

    outline: {
      label: 'Nesta página',
      level: [2, 3],
    },

    docFooter: {
      prev: 'Anterior',
      next: 'Próximo',
    },

    darkModeSwitchLabel: 'Tema',
    lightModeSwitchTitle: 'Modo claro',
    darkModeSwitchTitle: 'Modo escuro',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Voltar ao topo',
  },
})
