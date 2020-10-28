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
      groupName: 'APPLICATIONS',
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
          name: 'Stocks / Crypto',
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
        {
          name: 'Scrum Board',

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
          name: 'File Manager',
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
              name: 'Log In',
              url: '/auth/log-in',
            },
            {
              name: 'Sign Up',
              url: '/auth/sign-up',
            },
            {
              name: 'Confirmation',
              url: '/auth/confirmation',
            },
            {
              name: 'Lock screen',
              url: '/auth/lock-screen',
            },
            {
              name: 'Forgot password',
              url: '/auth/forgot-password',
            },
            {
              name: 'Reset password',
              url: '/auth/reset-password',
            }
          ]
        },
        {
          name: 'Profile',
          prefix: {
            type: 'ibm-icon',
            name: 'userAvatar',
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
          name: 'Search Result',
          prefix: {
            type: 'ibm-icon',
            name: 'imageSearch',
          },
          url: '/app/search-result',
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
            },
            {
              name: '500',
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
