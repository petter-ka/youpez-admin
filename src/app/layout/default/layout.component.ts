import {Component, OnDestroy, OnInit} from '@angular/core'
import {takeUntil} from 'rxjs/operators'
import {Subject} from "rxjs"
import {defaultRouterTransition, MenuType} from "../../../@youpez"
import {SettingsService} from "../../../@youpez"
import {AppMenuService} from "../../../@youpez"

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    defaultRouterTransition,
  ],
})
export class LayoutComponent implements OnInit, OnDestroy {
  private readonly onDestroy = new Subject<void>()

  public mainSidebarOpts = {
    breakpoint: 'md',
    opened: true,
    hoverAble: true,
    mode: 'side',
    toggleableBtn: false,
    size: 'sideBar1',
  }
  public miniSidebarOpts = {}
  public settingsVisible: boolean = false
  public searchVisible: boolean = false
  public lockScreenVisible: boolean = false

  public menu: Array<MenuType> = [
    {
      groupName: 'DASHBOARDS',
      opened: true,
      children: [
        {
          name: 'Dashboard',
          url: '/app/dashboard/default',
          prefix: {
            type: 'cds-icon',
            name: 'home',
          },
        },
        {
          name: 'Platform analytics',
          url: '/app/dashboard/analytics',
          prefix: {
            type: 'cds-icon',
            name: 'activity',
          },
        },
        {
          name: 'Stocks / crypto',
          url: '/app/dashboard/crypto',
          prefix: {
            type: 'cds-icon',
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
            type: 'cds-icon',
            name: 'dashboard--reference',
          },
          url: '/app/scrum-board',
        },
        {
          name: 'Tasks',
          prefix: {
            type: 'cds-icon',
            name: 'task',
          },
          suffix: {
            type: 'badge',
            level: 'danger',
            text: 3,
          },
          url: '/app/tasks',
        },
        {
          name: 'File manager',
          prefix: {
            type: 'cds-icon',
            name: 'folder',
          },
          url: '/app/file-manager',
        },
        {
          name: 'Mail',
          prefix: {
            type: 'cds-icon',
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
            type: 'cds-icon',
            name: 'send--alt',
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
          name: 'User',
          parentUrl: '/app/user',
          prefix: {
            type: 'cds-icon',
            name: 'user--avatar',
          },
          children: [
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
            type: 'cds-icon',
            name: 'application',
          },
          children: [
            {
              name: 'Welcome',
              url: '/app/application/welcome',
            },
            {
              name: 'Getting started',
              url: '/app/application/getting-started',
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
          name: 'Auth',
          prefix: {
            type: 'cds-icon',
            name: 'user--admin',
          },
          children: [
            {
              name: 'Sign In',
              children: [
                {
                  name: 'Style #1',
                  url: '/auth/modern/signin'
                },
                {
                  name: 'Style #2',
                  url: '/auth/full/signin'
                },
                {
                  name: 'Style #3',
                  url: '/auth/full-middle/signin'
                },
                {
                  name: 'Style #4',
                  url: '/auth/basic/signin'
                }
              ]
            },
            {
              name: 'Sign Up',
              children: [
                {
                  name: 'Style #1',
                  url: '/auth/modern/signup'
                },
                {
                  name: 'Style #2',
                  url: '/auth/full/signup'
                },
                {
                  name: 'Style #3',
                  url: '/auth/full-middle/signup'
                },
                {
                  name: 'Style #4',
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
                  name: 'Style #1',
                  url: '/auth/modern/confirmation'
                },
                {
                  name: 'Style #2',
                  url: '/auth/full/confirmation'
                },
                {
                  name: 'Style #3',
                  url: '/auth/full-middle/confirmation'
                },
                {
                  name: 'Style #4',
                  url: '/auth/basic/confirmation'
                }
              ]
            },

            {
              name: 'Forgot password',
              children: [
                {
                  name: 'Style #1',
                  url: '/auth/modern/forgot-password'
                },
                {
                  name: 'Style #2',
                  url: '/auth/full/forgot-password'
                },
                {
                  name: 'Style #3',
                  url: '/auth/full-middle/forgot-password'
                },
                {
                  name: 'Style #4',
                  url: '/auth/basic/forgot-password'
                }
              ]
            },
            {
              name: 'Reset password',
              children: [
                {
                  name: 'Style #1',
                  url: '/auth/modern/reset-password'
                },
                {
                  name: 'Style #2',
                  url: '/auth/full/reset-password'
                },
                {
                  name: 'Style #3',
                  url: '/auth/full-middle/reset-password'
                },
                {
                  name: 'Style #4',
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
          name: 'Pricing',
          parentUrl: '/app/pricing',
          prefix: {
            type: 'cds-icon',
            name: 'money',
          },
          children: [
            {
              name: 'Startup',
              url: '/app/pricing/modern',
            },
            {
              name: 'Corporate',
              url: '/app/pricing/table',
            },
            {
              name: 'Basic',
              url: '/app/pricing/simple',
            },
          ]
        },
        {
          name: 'Profile',
          prefix: {
            type: 'cds-icon',
            name: 'face--activated',
          },
          url: '/app/profile',
        },
        {
          name: 'Timeline',
          prefix: {
            type: 'cds-icon',
            name: 'alarm',
          },
          url: '/app/timeline',
        },
        {
          name: 'Invoice',
          prefix: {
            type: 'cds-icon',
            name: 'document',
          },
          url: '/app/invoice',
        },
        {
          name: 'Search result',
          prefix: {
            type: 'cds-icon',
            name: 'image--search',
          },
          url: '/app/search-result',
        },
        {
          name: 'Coming soon',
          prefix: {
            type: 'cds-icon',
            name: 'in-progress',

          },
          children: [
            {
              name: 'Style #1',
              url: '/auth/coming-soon/modern'
            },
            {
              name: 'Style #2',
              url: '/auth/coming-soon/full'
            },
            {
              name: 'Style #3',
              url: '/auth/coming-soon/full-middle'
            },
            {
              name: 'Style #4',
              url: '/auth/coming-soon/basic'
            }
          ]
        },
        {
          name: 'Maintenance',
          prefix: {
            type: 'cds-icon',
            name: 'hourglass',
          },
          url: '/app/maintenance',
        },
        {
          name: 'Errors',
          prefix: {
            type: 'cds-icon',
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
        {
          name: 'Starters',
          parentUrl: '/app/starters',
          prefix: {
            type: 'cds-icon',
            name: '3d-cursor--alt',
          },
          children: [
            {
              name: 'Full width',
              parentUrl: '/app/starters/full-width',
              children: [
                {
                  name: 'Basic',
                  url: '/app/starters/full-width/basic'
                },
                {
                  name: 'Header',
                  url: '/app/starters/full-width/header'
                },
                {
                  name: 'Tabs',
                  url: '/app/starters/full-width/tabs'
                }
              ]
            },
            {
              name: 'Left sidebar',
              parentUrl: '/app/starters/left-sidebar',
              children: [
                {
                  name: 'Basic',
                  url: '/app/starters/left-sidebar/basic'
                },
                {
                  name: 'Header',
                  url: '/app/starters/left-sidebar/header'
                },
                {
                  name: 'Tabs',
                  url: '/app/starters/left-sidebar/tabs'
                }
              ]
            },
            {
              name: 'Right sidebar',
              parentUrl: '/app/starters/right-sidebar',
              children: [
                {
                  name: 'Basic',
                  url: '/app/starters/right-sidebar/basic'
                },
                {
                  name: 'Header',
                  url: '/app/starters/right-sidebar/header'
                },
                {
                  name: 'Tabs',
                  url: '/app/starters/right-sidebar/tabs'
                }
              ]
            },
            {
              name: 'Application',
              parentUrl: '/app/starters/application',
              children: [
                {
                  name: 'Basic',
                  url: '/app/starters/application/basic'
                },
                {
                  name: 'Advanced',
                  url: '/app/starters/application/advanced'
                },
                {
                  name: 'Complex',
                  url: '/app/starters/application/complex'
                }
              ]
            },
          ]
        }
      ]
    },
    {
      groupName: 'Components',
      opened: true,
      children: [
        {
          name: 'UI components',
          url: '/app/ui-components',
          prefix: {
            type: 'cds-icon',
            name: 'view',
          },
        },
        {
          name: 'Widgets',
          prefix: {
            type: 'cds-icon',
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
              name: 'Cards',
              url: '/app/widgets/cards',
            },
            {
              name: 'Lists',
              url: '/app/widgets/lists',
            },
          ]
        },
        {
          name: 'Tables',
          parentUrl: '/app/tables',
          prefix: {
            type: 'cds-icon',
            name: 'table--split',
          },
          children: [
            {
              name: 'Basic',
              url: '/app/tables/basic',
            },
            {
              name: 'Advanced',
              url: '/app/tables/advanced',
            },
            {
              name: 'Full Datagrid',
              url: '/app/tables/full',
              suffix: {
                type: 'badge',
                level: 'danger',
                text: 'HOT',
              },
            },
          ]
        },
        {
          name: 'Forms',
          prefix: {
            type: 'cds-icon',
            name: 'text--creation',
          },
          parentUrl: '/app/forms',
          children: [
            {
              name: 'General',
              url: '/app/forms/general',
            },
            {
              name: 'Advanced',
              url: '/app/forms/advanced',
            },
            {
              name: 'Validation & Layouts',
              url: '/app/forms/validation',
            },
            {
              name: 'Wizard',
              url: '/app/forms/wizard',
            },
          ]
        },
        {
          name: 'Charts',
          url: '/app/charts',
          prefix: {
            type: 'cds-icon',
            name: 'chart--column',
          },
        },
        {
          name: 'Icons',
          url: '/app/icons',
          prefix: {
            type: 'cds-icon',
            name: 'magic-wand',
          },
        },
        {
          name: 'Typography',
          url: '/app/typography',
          prefix: {
            type: 'cds-icon',
            name: 'text--tracking',
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
            type: 'cds-icon',
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
            type: 'cds-icon',
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
            type: 'cds-icon',
            name: 'home',
          },
        },
        {
          name: 'Disabled Group',
          disabled: true,
          prefix: {
            type: 'cds-icon',
            name: 'home',
          },
          children: []
        },
        {
          name: 'Disabled Subitem',
          prefix: {
            type: 'cds-icon',
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
            type: 'cds-icon',
            name: 'home',
          },
        },
        {
          name: 'Menu item',
          subtitle: 'with subtitle',
          prefix: {
            type: 'cds-icon',
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
            type: 'cds-icon',
            name: 'home',
          },
        },
        {
          name: 'Menu item',
          subtitle: 'with long subtitle, with long subtitle, with log subtitle',
          prefix: {
            type: 'cds-icon',
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

  constructor(private settingsService: SettingsService,
              private appMenuService: AppMenuService) {
  }

  ngOnInit(): void {
    this.appMenuService
      .$callbackClick
      .pipe(takeUntil(this.onDestroy))
      .subscribe((params) => {
        if (params === 'lock') {
          this.lockScreenVisible = true
        }
      })
  }

  ngOnDestroy(): void {
    this.onDestroy.next()
  }

  onMiniSidebarItemClick(event) {
    if (event.key === 'theme') {
      this.settingsVisible = !this.settingsVisible
    }
    if (event.key === 'search') {
      this.searchVisible = true
    }
  }

  onToggleThemeSettings() {
    this.settingsVisible = true
  }

  onSideBarOpen(event) {
    this.mainSidebarOpts.opened = true
  }

  onSideBarToggle(event) {
    this.mainSidebarOpts.opened = !this.mainSidebarOpts.opened
  }

  onCloseSettings(event) {
    this.settingsVisible = false
  }

  onSearchClose(event) {
    this.searchVisible = false
  }

  onLockClose(event) {
    this.lockScreenVisible = false
  }

  onCloseSidebar() {
    this.mainSidebarOpts.opened = false
  }

  onVisibilityChange(event){
    this.mainSidebarOpts.opened=event
  }
}
