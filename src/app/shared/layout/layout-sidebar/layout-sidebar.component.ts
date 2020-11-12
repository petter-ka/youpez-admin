import {Component, EventEmitter, OnInit, Output, Input} from '@angular/core'

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit {

  @Input() opened: boolean = false
  @Output() sideBarToggle: EventEmitter<boolean> = new EventEmitter()

  public menu = [
    {
      groupName: 'DASHBOARDS',
      opened: true,
      children: [
        {
          name: 'Dashboard',
          url: '/app/dashboard/default',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
        {
          name: 'Analytics',
          url: '/app/dashboard/analytics',
          prefix: {
            type: 'ibm-icon',
            name: 'activity',
          },
        },

        {
          name: 'Stocks / crypto',
          url: '/app/dashboard/crypto',
          prefix: {
            type: 'ibm-icon',
            name: 'analytics',
          },
          suffix: {
            type: 'badge',
            level: 'default',
            text: '!',
          },
        },
      ],
    },
    {
      groupName: 'APPLICATIONS',
      opened: true,
      children: [
        {
          name: 'Scrum board',

          prefix: {
            type: 'ibm-icon',
            name: 'dashboardReference',
          },
          url: '/app/scrum-board',
        },
        {
          name: 'Tasks',
          prefix: {
            type: 'ibm-icon',
            name: 'task',
          },
          suffix: {
            type: 'badge',
            level: 'danger',
            text: 3,
          },
          url: '/app/tasks',
        },
        /*        {
                  name: 'Notes',
                  prefix: {
                    type: 'ibm-icon',
                    name: 'catalog',
                  },
                  url: '/app/notes',
                },*/
        {
          name: 'File manager',
          prefix: {
            type: 'ibm-icon',
            name: 'folder',
          },
          url: '/app/file-manager',
        },
        {
          name: 'Mail',
          prefix: {
            type: 'ibm-icon',
            name: 'email',
          },
          suffix: {
            type: 'badge',
            level: 'success',
            text: 'NEW',
          },
          url: '/app/mail',
        },
        {
          name: 'Messages',
          prefix: {
            type: 'ibm-icon',
            name: 'sendAlt',
          },
          url: '/app/messages',
        }
      ]
    },
    {
      groupName: 'PAGES',
      opened: true,
      children: [
        {
          name: 'Auth',
          prefix: {
            type: 'ibm-icon',
            name: 'userAdmin',
          },
          children: [
            {
              name: 'Sign In',
              children: [
                {
                  name: 'Modern',
                  url: '/auth/modern/signin'
                },
                {
                  name: 'Full',
                  url: '/auth/full/signin'
                },
                {
                  name: 'Full middle',
                  url: '/auth/full-middle/signin'
                },
                {
                  name: 'Basic',
                  url: '/auth/basic/signin'
                }
              ]
            },
            {
              name: 'Sign Up',
              children: [
                {
                  name: 'Modern',
                  url: '/auth/modern/signup'
                },
                {
                  name: 'Full',
                  url: '/auth/full/signup'
                },
                {
                  name: 'Full middle',
                  url: '/auth/full-middle/signup'
                },
                {
                  name: 'Basic',
                  url: '/auth/basic/signup'
                }
              ]
            },
            {
              name: 'Book a demo',
              url: '/auth/book-a-demo',
              suffix: {
                type: 'badge',
                level: 'danger',
                text: 'HOT',
              },
            },
            {
              name: 'Confirmation',
              url: '/auth/confirmation',
              children: [
                {
                  name: 'Modern',
                  url: '/auth/modern/confirmation'
                },
                {
                  name: 'Full',
                  url: '/auth/full/confirmation'
                },
                {
                  name: 'Full middle',
                  url: '/auth/full-middle/confirmation'
                },
                {
                  name: 'Basic',
                  url: '/auth/basic/confirmation'
                }
              ]
            },

            {
              name: 'Forgot password',
              children: [
                {
                  name: 'Modern',
                  url: '/auth/modern/forgot-password'
                },
                {
                  name: 'Full',
                  url: '/auth/full/forgot-password'
                },
                {
                  name: 'Full middle',
                  url: '/auth/full-middle/forgot-password'
                },
                {
                  name: 'Basic',
                  url: '/auth/basic/forgot-password'
                }
              ]
            },
            {
              name: 'Reset password',
              children: [
                {
                  name: 'Modern',
                  url: '/auth/modern/reset-password'
                },
                {
                  name: 'Full',
                  url: '/auth/full/reset-password'
                },
                {
                  name: 'Full middle',
                  url: '/auth/full-middle/reset-password'
                },
                {
                  name: 'Basic',
                  url: '/auth/basic/reset-password'
                }
              ]
            },
            {
              name: 'Lock screen',
              callback: 'lock',
            },
          ]
        },
        {
          name: 'User',
          parentUrl: '/app/user',
          prefix: {
            type: 'ibm-icon',
            name: 'userAvatar',
          },
          children:[
            {
              name: 'Settings',
              url: '/app/user/settings',
            },
            {
              name: 'Billing',
              url: '/app/user/billing',
            },
            {
              name: 'Creditcard',
              url: '/app/user/creditcard',
            },
            {
              name: 'Transactions',
              url: '/app/user/transactions',
            },
          ]
        },
        {
          name: 'Web application',
          parentUrl: '/app/application',
          prefix: {
            type: 'ibm-icon',
            name: 'application',
          },
          children:[
            {
              name: 'Welcome',
              url: '/app/application/welcome',
            },
            {
              name: 'FAQ',
              url: '/app/application/faq',
            },
            {
              name: 'Documentation',
              url: '/app/application/manual',
            },
            {
              name: 'Support',
              url: '/app/application/support',
            },
            {
              name: 'Changelog',
              url: '/app/application/changelog',
            },
          ]
        },
        {
          name: 'Pricing',
          prefix: {
            type: 'ibm-icon',
            name: 'money',
          },
          children:[
            {
              name: 'Simple',
              url: '/app/pricing/simple',
            },
            {
              name: 'Modern',
              url: '/app/pricing/modern',
            },
            {
              name: 'Table',
              url: '/app/pricing/table',
            },
          ]
        },
        {
          name: 'Profile',
          prefix: {
            type: 'ibm-icon',
            name: 'faceActivated',
          },
          url: '/app/profile',
        },
        {
          name: 'Timeline',
          prefix: {
            type: 'ibm-icon',
            name: 'alarm',
          },
          url: '/app/timeline',
        },
        {
          name: 'Invoice',
          prefix: {
            type: 'ibm-icon',
            name: 'document',
          },
          url: '/app/invoice',
        },
        {
          name: 'Search result',
          prefix: {
            type: 'ibm-icon',
            name: 'imageSearch',
          },
          url: '/app/search-result',
        },
        {
          name: 'Coming soon',
          prefix: {
            type: 'ibm-icon',
            name: 'inProgress',

          },
          children: [
            {
              name: 'Modern',
              url: '/auth/coming-soon/modern'
            },
            {
              name: 'Full',
              url: '/auth/coming-soon/full'
            },
            {
              name: 'Full middle',
              url: '/auth/coming-soon/full-middle'
            },
            {
              name: 'Basic',
              url: '/auth/coming-soon/basic'
            }
          ]
        },
        {
          name: 'Maintenance',
          prefix: {
            type: 'ibm-icon',
            name: 'hourglass',
          },
          url: '/app/maintenance',
        },
        {
          name: 'Errors',
          prefix: {
            type: 'ibm-icon',
            name: 'error',
          },
          suffix: {
            type: 'badge',
            level: 'danger',
            text: 2,
          },
          children: [
            {
              name: '404',
              url: '/app/errors/404',
            },
            {
              name: '500',
              url: '/app/errors/500',
            },
          ]
        },
      ]
    },
    {
      groupName: 'Components',
      opened: true,
      children: [
        {
          name: 'Widgets',
          prefix: {
            type: 'ibm-icon',
            name: 'phraseSentiment',
          },
          parentUrl: '/app/widgets',
          children: [
            {
              name: 'General',
              url: '/app/widgets/general',
              suffix: {
                type: 'badge',
                level: 'default',
                text: '!',
              },
            },
            {
              name: 'Lists',
              url: '/auth/sign-up',
            },
            {
              name: 'Charts',
              url: '/auth/sign-up',
            },
          ]
        },
        {
          name: 'Tables',
          prefix: {
            type: 'ibm-icon',
            name: 'tableSplit',
          },
          children: [
            {
              name: 'Basic',
              url: '/auth/log-in',
            },
            {
              name: 'Advanced',
              url: '/auth/sign-up',
            },
            {
              name: 'Full',
              url: '/auth/sign-up',
            },
          ]
        },
        {
          name: 'Forms',
          prefix: {
            type: 'ibm-icon',
            name: 'textCreation',
          },
          children: [
            {
              name: 'General',
              url: '/auth/log-in',
            },
            {
              name: 'Advanced',
              url: '/auth/sign-up',
            },
            {
              name: 'Validation',
              url: '/auth/sign-up',
            },
            {
              name: 'Wizard',
              url: '/auth/sign-up',
            },
          ]
        },
        {
          name: 'Charts',
          url: '/app/charts',
          prefix: {
            type: 'ibm-icon',
            name: 'chartColumn',
          },
        },
        {
          name: 'Icons',
          url: '/app/icons',
          prefix: {
            type: 'ibm-icon',
            name: 'magicWand',
          },
        },
        {
          name: 'Typography',
          url: '/app/typography',
          prefix: {
            type: 'ibm-icon',
            name: 'textTracking',
          },
        }
      ]
    },
    {
      groupName: 'Menu features',
      opened: true,
      children: [
        {
          name: 'Badge number',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          suffix: {
            type: 'badge',
            level: 'danger',
            text: 2,
          },
        },
        {
          name: 'Badge text',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          suffix: {
            type: 'badge',
            level: 'success',
            text: 'Updated',

          },
        },
        {
          name: 'Disabled Item',
          disabled: true,
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
        {
          name: 'Disabled Group',
          disabled: true,
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          children: []
        },
        {
          name: 'Disabled Subitem',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          children: [
            {
              name: 'Disabled Item',
              disabled: true,
            }
          ]
        },
        {
          name: 'Looooong Menu item, with loooong menu item',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
        {
          name: 'Menu item',
          subtitle: 'with subtitle',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          children: [
            {
              name: 'Subitem',
            },
          ]
        },
        {
          name: 'Menu item',
          subtitle: 'with subtitle',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
        {
          name: 'Menu item',
          subtitle: 'with long subtitle, with long subtitle, with log subtitle',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
      ]
    },
    {
      groupName: 'iconless features ',
      opened: true,
      children: [
        {
          name: 'Iconless',
        },
        {
          name: 'Iconless badge',
          suffix: {
            type: 'badge',
            level: 'danger',
            text: 'Deleted',
          },
        },
        {
          name: 'Iconless sub',
          children: [
            {
              name: 'Sub item',
            }
          ]
        },
      ]
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onGroupToggle(groupName) {
    this.menu = this.menu.map(item => {
      if (item.groupName === groupName) {
        item.opened = !item.opened
      }
      return item
    })
  }

  onSideBarToggle() {
    this.sideBarToggle.next(true)
  }

}
