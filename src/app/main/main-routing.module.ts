import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {TypographyComponent} from "./typography/typography.component"

import {LayoutComponent} from '../layout/default/layout.component'
import {AppLayoutHorizontalComponent} from "../layout/horizontal/app-layout-horizontal/app-layout-horizontal.component"

import {WidgetsGeneralComponent} from "./widgets/widgets-general/widgets-general.component"
import {DashboardDefaultComponent} from "./dashboard/dashboard-default/dashboard-default.component"
import {DashboardAnalyticsComponent} from "./dashboard/dashboard-analytics/dashboard-analytics.component"
import {DashboardCryptoComponent} from "./dashboard/dashboard-crypto/dashboard-crypto.component"
import {ScrumBoardComponent} from "./scrum/scrum-board/scrum-board.component"
import {TasksComponent} from "./tasks/tasks/tasks.component"
import {FileManagerComponent} from "./file-manager/file-manager/file-manager.component"
import {MailComponent} from "./mail/mail/mail.component"
import {MessagesComponent} from "./messages/messages/messages.component"
import {UserSettingsComponent} from "./user/user-settings/user-settings.component"
import {UserLayoutComponent} from "./user/user-layout/user-layout.component"
import {UserBillingComponent} from "./user/user-billing/user-billing.component"
import {UserCreditcardComponent} from "./user/user-creditcard/user-creditcard.component"
import {UserTransactionsComponent} from "./user/user-transactions/user-transactions.component"
import {TimelineComponent} from "./timeline/timeline.component"
import {ProfileComponent} from "./profile/profile.component"
import {InvoiceComponent} from "./invoice/invoice.component"
import {SearchResultComponent} from "./search-result/search-result.component"
import {Error404Component} from "./errors/error404/error404.component"
import {Error500Component} from "./errors/error500/error500.component"
import {PricingSimpleComponent} from "./pricing/pricing-simple/pricing-simple.component"
import {PricingModernComponent} from "./pricing/pricing-modern/pricing-modern.component"
import {PricingTableComponent} from "./pricing/pricing-table/pricing-table.component"
import {MaintenanceComponent} from "./maintenance/maintenance.component"
import {FaqComponent} from "./application/faq/faq.component"
import {ManualComponent} from "./application/manual/manual.component"
import {SupportComponent} from "./application/support/support.component"
import {ChangelogComponent} from "./application/changelog/changelog.component"
import {WelcomeComponent} from "./application/welcome/welcome.component"
import {GettingStartedComponent} from "./application/getting-started/getting-started.component"
import {UiComponentsComponent} from "./ui-components/ui-components.component"
import {WidgetsCardComponent} from "./widgets/widgets-card/widgets-card.component"
import {WidgetsListComponent} from "./widgets/widgets-list/widgets-list.component"
import {TableBasicComponent} from "./tables/table-basic/table-basic.component"
import {TableAdvancedComponent} from "./tables/table-advanced/table-advanced.component"
import {TableFullComponent} from "./tables/table-full/table-full.component"
import {ChartsComponent} from "./charts/charts.component"
import {IconsComponent} from "./icons/icons.component"
import {FormsGeneralComponent} from "./forms/forms-general/forms-general.component"
import {FormsAdvancedComponent} from "./forms/forms-advanced/forms-advanced.component"
import {FormsValidationComponent} from "./forms/forms-validation/forms-validation.component"
import {FormsWizardComponent} from "./forms/forms-wizard/forms-wizard.component"
import {StarterFullWidthBasicComponent} from "./starters/full-width/starter-full-width-basic/starter-full-width-basic.component"
import {StarterFullWidthHeaderComponent} from "./starters/full-width/starter-full-width-header/starter-full-width-header.component"
import {StarterFullWidthTabsComponent} from "./starters/full-width/starter-full-width-tabs/starter-full-width-tabs.component"
import {StarterLeftSidebarBasicComponent} from "./starters/left-sidebar/starter-left-sidebar-basic/starter-left-sidebar-basic.component"
import {StarterLeftSidebarHeaderComponent} from "./starters/left-sidebar/starter-left-sidebar-header/starter-left-sidebar-header.component"
import {StarterLeftSidebarTabsComponent} from "./starters/left-sidebar/starter-left-sidebar-tabs/starter-left-sidebar-tabs.component"
import {StarterRightSidebarBasicComponent} from "./starters/right-sidebar/starter-right-sidebar-basic/starter-right-sidebar-basic.component"
import {StarterRightSidebarHeaderComponent} from "./starters/right-sidebar/starter-right-sidebar-header/starter-right-sidebar-header.component"
import {StarterRightSidebarTabsComponent} from "./starters/right-sidebar/starter-right-sidebar-tabs/starter-right-sidebar-tabs.component"
import {StarterApplicationBasicComponent} from "./starters/application/starter-application-basic/starter-application-basic.component"
import {StarterApplicationAdvancedComponent} from "./starters/application/starter-application-advanced/starter-application-advanced.component"
import {StarterApplicationComplexComponent} from "./starters/application/starter-application-complex/starter-application-complex.component"

const starterPages = [
  {
    path: 'full-width',
    children: [
      {
        path: 'basic',
        component: StarterFullWidthBasicComponent,
      },
      {
        path: 'header',
        component: StarterFullWidthHeaderComponent,
      },
      {
        path: 'tabs',
        component: StarterFullWidthTabsComponent,
      }
    ]
  },
  {
    path: 'left-sidebar',
    children: [
      {
        path: 'basic',
        component: StarterLeftSidebarBasicComponent,
      },
      {
        path: 'header',
        component: StarterLeftSidebarHeaderComponent,
      },
      {
        path: 'tabs',
        component: StarterLeftSidebarTabsComponent,
      }
    ]
  },
  {
    path: 'right-sidebar',
    children: [
      {
        path: 'basic',
        component: StarterRightSidebarBasicComponent,
      },
      {
        path: 'header',
        component: StarterRightSidebarHeaderComponent,
      },
      {
        path: 'tabs',
        component: StarterRightSidebarTabsComponent,
      }
    ]
  },
  {
    path: 'application',
    children: [
      {
        path: 'basic',
        component: StarterApplicationBasicComponent,
      },
      {
        path: 'advanced',
        component: StarterApplicationAdvancedComponent,
      },
      {
        path: 'complex',
        component: StarterApplicationComplexComponent,
      }
    ]
  }
]

const routeForPages = [
  {
    path: 'dashboard',
    data: {
      breadcrumb: 'Dashboard'
    },
    children: [
      {
        path: 'default',
        component: DashboardDefaultComponent,
        data: {
          breadcrumb: 'Default'
        },
      },
      {
        path: 'analytics',
        component: DashboardAnalyticsComponent,
        data: {
          breadcrumb: 'Analytics'
        },
      },
      {
        path: 'crypto',
        component: DashboardCryptoComponent,
        data: {
          breadcrumb: 'Stocks / Crypto'
        },
      },
    ],
  },
  {
    path: 'typography',
    component: TypographyComponent,
    data: {
      breadcrumb: 'Typography'
    },
  },
  {
    path: 'widgets',
    data: {
      breadcrumb: 'Widgets'
    },
    children: [
      {
        path: 'general',
        component: WidgetsGeneralComponent,
        data: {
          breadcrumb: 'General'
        },
      },
      {
        path: 'cards',
        component: WidgetsCardComponent,
        data: {
          breadcrumb: 'Cards'
        },
      },
      {
        path: 'lists',
        component: WidgetsListComponent,
        data: {
          breadcrumb: 'List'
        },
      },
    ]
  },
  {
    path: 'tables',
    data: {
      breadcrumb: 'Tables'
    },
    children: [
      {
        path: 'basic',
        component: TableBasicComponent,
        data: {
          breadcrumb: 'Basic'
        },
      },
      {
        path: 'advanced',
        component: TableAdvancedComponent,
        data: {
          breadcrumb: 'Advanced'
        },
      },
      {
        path: 'full',
        component: TableFullComponent,
        data: {
          breadcrumb: 'Datagrid'
        },
      },
    ]
  },
  {
    path: 'forms',
    data: {
      breadcrumb: 'Forms'
    },
    children: [
      {
        path: 'general',
        component: FormsGeneralComponent,
        data: {
          breadcrumb: 'General'
        },
      },
      {
        path: 'advanced',
        component: FormsAdvancedComponent,
        data: {
          breadcrumb: 'Advanced'
        },
      },
      {
        path: 'validation',
        component: FormsValidationComponent,
        data: {
          breadcrumb: 'Validation'
        },
      },
      {
        path: 'wizard',
        component: FormsWizardComponent,
        data: {
          breadcrumb: 'Wizard'
        },
      },
    ]
  },
  {
    path: 'charts',
    component: ChartsComponent,
    data: {
      breadcrumb: 'Charts'
    },
  },
  {
    path: 'icons',
    component: IconsComponent,
    data: {
      breadcrumb: 'Icons'
    },
  },
  {
    path: 'scrum-board',
    component: ScrumBoardComponent,
    data: {
      breadcrumb: 'Scrum board'
    },
  },
  {
    path: 'tasks',
    component: TasksComponent,
    data: {
      breadcrumb: 'Tasks'
    },
  },
  {
    path: 'file-manager',
    component: FileManagerComponent,
    data: {
      breadcrumb: 'File-manager'
    },
  },
  {
    path: 'ui-components',
    component: UiComponentsComponent,
    data: {
      breadcrumb: 'UI components'
    },
  },
  {
    path: 'mail',
    component: MailComponent,
    data: {
      breadcrumb: 'Mail'
    },
  },
  {
    path: 'messages',
    component: MessagesComponent,
    data: {
      breadcrumb: 'Messages'
    },
  },
  {
    path: 'timeline',
    component: TimelineComponent,
    data: {
      breadcrumb: 'Timeline'
    },
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      breadcrumb: 'Profile'
    },
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
    data: {
      breadcrumb: 'Invoice'
    },
  },
  {
    path: 'search-result',
    component: SearchResultComponent,
    data: {
      breadcrumb: 'Search Result'
    },
  },
  {
    path: 'maintenance',
    component: MaintenanceComponent,
    data: {
      breadcrumb: 'Maintenance'
    },
  },
  {
    path: 'errors',
    children: [
      {
        path: '404',
        component: Error404Component,
      },
      {
        path: '500',
        component: Error500Component,
      }
    ],
  },
  {
    path: 'starters',
    children: [...starterPages],
  },
  {
    path: 'pricing',
    data: {
      breadcrumb: 'Pricing'
    },
    children: [
      {
        path: 'simple',
        component: PricingSimpleComponent,
        data: {
          breadcrumb: 'Simple'
        },
      },
      {
        path: 'modern',
        component: PricingModernComponent,
        data: {
          breadcrumb: 'Modern'
        },
      },
      {
        path: 'table',
        component: PricingTableComponent,
        data: {
          breadcrumb: 'Table'
        },
      }
    ],
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    data: {
      breadcrumb: 'User'
    },
    children: [
      {
        path: 'settings',
        component: UserSettingsComponent,
        data: {
          breadcrumb: 'Settings'
        },
      },
      {
        path: 'billing',
        component: UserBillingComponent,
        data: {
          breadcrumb: 'Billing'
        },
      },
      {
        path: 'creditcard',
        component: UserCreditcardComponent,
        data: {
          breadcrumb: 'Creditcard'
        },
      },
      {
        path: 'transactions',
        component: UserTransactionsComponent,
        data: {
          breadcrumb: 'Transactions'
        },
      },
    ]
  },
  {
    path: 'application',
    data: {
      breadcrumb: 'Application'
    },
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
        data: {
          breadcrumb: 'Welcome'
        },
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent,
        data: {
          breadcrumb: 'Getting started'
        },
      },
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          breadcrumb: 'FAQ'
        },
      },
      {
        path: 'manual',
        component: ManualComponent,
        data: {
          breadcrumb: 'Manual'
        },
      },
      {
        path: 'support',
        component: SupportComponent,
        data: {
          breadcrumb: 'Support'
        },
      },
      {
        path: 'changelog',
        component: ChangelogComponent,
        data: {
          breadcrumb: 'Changelog'
        },
      },
    ]
  },
  {
    path: '**',
    redirectTo: '/app/dashboard/default',
    pathMatch: 'full',
  },
]

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: routeForPages,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
