export default defineI18nConfig(() => ({
  legacy: false,
  locale: "es",
  defaultLocale: "es",
  messages: {
    es: {
      meta: {
        title: "Minearte Network",
        description: "Minearte Network es un servidor de minecraft Semipremium no pay to win que de seguro disfrutaras!",
        keywords: "Servidor Minecraft, Minearte, Network"
      },
      welcome: "Bienvenido a Minearte",
      ip: "mc.minearte.net",
      clickToCopy: "Click para copiar",
      loading: "Cargando...",
      discord: "Servidor de Discord",
      clickToJoin: "Click para unirte",
      ipCopied: "IP copiada al portapapeles",
      pageName: "Minearte Network",
      nav: {
        home: "Inicio",
        store: "Tienda",
        discord: "Discord",
        rules: "Reglas",
      },
      store: {
        meta: {
          title: "Tienda | Minearte Network",
          description: "Tienda de Minearte Network, donde podras comprar rangos y mas tanto para box pvp como survival!",
          keywords: "Tienda, Minearte, Network"
        },
        nav: {
          home: "Inicio",
        },
        index: {
          header: 'Bienvenido a la tienda de Minearte Network',
          subheader: 'Aqui podras comprar rangos y mas tanto para box pvp como survival!',
        },
        category: {
          goBack: "Volver",
          buy: "Comprar",
          description: "Descripcion",
        },
        goTo: "Ir a la seccion: ",
        buyPrompt: {
          title: "Introduce tu nombre de usuario",
          placeholder: "username",
          confirm: "Comprar",
          cancel: "Cancelar",
        },
        redirectingToTebex: {
          title: "Redireccionando a Tebex.",
          error: "Error al redireccionar a Tebex.",
          confirm: "Okey",
        }
      }
    },
  },
}));
