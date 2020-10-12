import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit {

  public menu = [
    {
      groupName: 'APPLICATIONS',
      opened: true,
      children: [
        {
          name: 'Dashboard',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          parentUrl: '/app/dashboard',
          children: [
            {
              name: 'Dashboard 1',
              url: '/app/dashboard/dashboard-v1',
              suffix: {
                type: 'badge',
                level: 'default',
                text: 2,
              },
            },
            {
              name: 'Dashboard 2',
              url: '/app/dashboard/dashboard-v2',
            }
          ]
        },
        {
          name: 'Scrum Board',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          url: '/app/scrum-board',
        },
        {
          name: 'Tasks',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          suffix: {
            type: 'badge',
            level: 'danger',
            text: 3,
          },
          url: '/app/tasks',
        },
        {
          name: 'Notes',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          url: '/app/notes',
        },
        {
          name: 'File Manager',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          url: '/app/file-manager',
        },
        {
          name: 'Mail',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
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
            name: 'home',
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
            name: 'home',
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
            name: 'home',
          },
          url: '/app/profile',
        },
        {
          name: 'Timeline',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          url: '/app/timeline',
        },
        {
          name: 'Invoice',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          url: '/app/invoice',
        },
        {
          name: 'Search Result',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
          url: '/app/search-result',
        },
        {
          name: 'Errors',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
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
            name: 'home',
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
            name: 'home',
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
            name: 'home',
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
            name: 'home',
          },
        },
        {
          name: 'Icons',
          url: '/app/icons',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        },
        {
          name: 'Typography',
          url: '/app/typography',
          prefix: {
            type: 'ibm-icon',
            name: 'home',
          },
        }
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

}
