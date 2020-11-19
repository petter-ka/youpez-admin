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

const routeForPages = [
  {
    path: 'dashboard',
    children: [
      {
        path: 'default',
        component: DashboardDefaultComponent,
      },
      {
        path: 'analytics',
        component: DashboardAnalyticsComponent,
      },
      {
        path: 'crypto',
        component: DashboardCryptoComponent,
      },
    ],
  },
  {
    path: 'typography',
    component: TypographyComponent,
  },
  {
    path: 'widgets',
    children: [
      {
        path: 'general',
        component: WidgetsGeneralComponent,
      },
      {
        path: 'cards',
        component: WidgetsCardComponent,
      },
      {
        path: 'lists',
        component: WidgetsListComponent,
      },
    ]
  },
  {
    path: 'tables',
    children: [
      {
        path: 'basic',
        component: TableBasicComponent,
      },
      {
        path: 'advanced',
        component: TableAdvancedComponent,
      },
      {
        path: 'full',
        component: TableFullComponent,
      },
    ]
  },
  {
    path: 'forms',
    children: [
      {
        path: 'general',
        component: FormsGeneralComponent,
      },
      {
        path: 'advanced',
        component: FormsAdvancedComponent,
      },
      {
        path: 'validation',
        component: FormsValidationComponent,
      },
      {
        path: 'wizard',
        component: FormsWizardComponent,
      },
    ]
  },
  {
    path: 'charts',
    component: ChartsComponent,
  },
  {
    path: 'icons',
    component: IconsComponent,
  },
  {
    path: 'scrum-board',
    component: ScrumBoardComponent,
  },
  {
    path: 'tasks',
    component: TasksComponent,
  },
  {
    path: 'file-manager',
    component: FileManagerComponent,
  },
  {
    path: 'ui-components',
    component: UiComponentsComponent,
  },
  {
    path: 'mail',
    component: MailComponent,
  },
  {
    path: 'messages',
    component: MessagesComponent,
  },
  {
    path: 'timeline',
    component: TimelineComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
  },
  {
    path: 'search-result',
    component: SearchResultComponent,
  },
  /*{
    path: 'coming-soon',
    component: ComingSoonComponent,
  },*/
  {
    path: 'maintenance',
    component: MaintenanceComponent,
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
    path: 'pricing',
    children: [
      {
        path: 'simple',
        component: PricingSimpleComponent,
      },
      {
        path: 'modern',
        component: PricingModernComponent,
      },
      {
        path: 'table',
        component: PricingTableComponent,
      }
    ],
  },
  {
    path: 'user',
    component: UserLayoutComponent,
    children: [
      {
        path: 'settings',
        component: UserSettingsComponent,
      },
      {
        path: 'billing',
        component: UserBillingComponent,
      },
      {
        path: 'creditcard',
        component: UserCreditcardComponent,
      },
      {
        path: 'transactions',
        component: UserTransactionsComponent,
      },
    ]
  },
  {
    path: 'application',
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'getting-started',
        component: GettingStartedComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'manual',
        component: ManualComponent,
      },
      {
        path: 'support',
        component: SupportComponent,
      },
      {
        path: 'changelog',
        component: ChangelogComponent,
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
  {
    path: 'horizontal',
    component: AppLayoutHorizontalComponent,
    children: routeForPages,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
