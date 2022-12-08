export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: 'fa fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'products',
        icon: 'fa fa-gift',
        label: 'Products',
        items: [
          {
              routeLink: 'products/level1.1',
              label: 'Level 1.1',
              items: [
                  {
                      routeLink: 'products/level2.1',
                      label: 'Level 2.1',
                  },
                  {
                      routeLink: 'products/level2.2',
                      label: 'Level 2.2',
                      items: [
                          {
                              routeLink: 'products/level3.1',
                              label: 'Level 3.1'
                          },
                          {
                              routeLink: 'products/level3.2',
                              label: 'Level 3.2'
                          }
                      ]
                  }
              ]
          },
          {
              routeLink: 'products/level1.2',
              label: 'Level 1.2',
          }
      ]
    },
    {
        routeLink: 'statistics',
        icon: 'fa fa-bar-chart',
        label: 'Statistics'
    },
    {
        routeLink: 'coupens',
        icon: 'fa fa-tags',
        label: 'Coupens'
    },
    {
        routeLink: 'pages',
        icon: 'fa fa-file',
        label: 'Pages'
    },
    {
        routeLink: 'media',
        icon: 'fa fa-camera',
        label: 'Media'
    },
    {
        routeLink: 'settings',
        icon: 'fa fa-cogs',
        label: 'Settings'
    },
    {
        routeLink: 'clientes',
        icon: 'fa fa-user',
        label: 'Clientes'
    },
    {
        routeLink: 'list-usuarios',
        icon: 'fa fa-user',
        label: 'Usuarios'
    },
];
