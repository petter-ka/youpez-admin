import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SharedModule} from "../shared/shared.module"
import {LayoutModule} from "../layout/layout.module"
import {AgGridModule} from '@ag-grid-community/angular'
import {ChartsModule} from '../../@youpez'
import {MainRoutingModule} from './main-routing.module'

import {TypographyComponent} from './typography/typography.component'
import {WidgetsGeneralComponent} from './widgets/widgets-general/widgets-general.component'
import {DashboardDefaultComponent} from './dashboard/dashboard-default/dashboard-default.component'
import {DashboardAnalyticsComponent} from './dashboard/dashboard-analytics/dashboard-analytics.component'
import {DashboardCryptoComponent} from './dashboard/dashboard-crypto/dashboard-crypto.component'
import {ScrumBoardComponent} from './scrum/scrum-board/scrum-board.component'
import {TasksComponent} from './tasks/tasks/tasks.component'
import {FileManagerComponent} from './file-manager/file-manager/file-manager.component'
import {MailComponent} from './mail/mail/mail.component'
import {MessagesComponent} from './messages/messages/messages.component'
import {UserSettingsComponent} from './user/user-settings/user-settings.component'
import {UserLayoutComponent} from './user/user-layout/user-layout.component'
import {UserBillingComponent} from './user/user-billing/user-billing.component'
import {UserCreditcardComponent} from './user/user-creditcard/user-creditcard.component'
import {UserTransactionsComponent} from './user/user-transactions/user-transactions.component'
import {TimelineComponent} from './timeline/timeline.component'
import {ProfileComponent} from './profile/profile.component'
import {PricingSimpleComponent} from './pricing/pricing-simple/pricing-simple.component'
import {PricingModernComponent} from './pricing/pricing-modern/pricing-modern.component'
import {PricingTableComponent} from './pricing/pricing-table/pricing-table.component'
import {InvoiceComponent} from './invoice/invoice.component'
import {SearchResultComponent} from './search-result/search-result.component'
import {Error404Component} from './errors/error404/error404.component'
import {Error500Component} from './errors/error500/error500.component'
import {FaqComponent} from './application/faq/faq.component'
import {ManualComponent} from './application/manual/manual.component'
import {SupportComponent} from './application/support/support.component'
import {ChangelogComponent} from './application/changelog/changelog.component'
import {MaintenanceComponent} from './maintenance/maintenance.component'
import {WelcomeComponent} from './application/welcome/welcome.component'
import {GettingStartedComponent} from './application/getting-started/getting-started.component'
import {PricingOtherComponent} from './pricing/pricing-other/pricing-other.component'

@NgModule({
  declarations: [
    TypographyComponent,
    WidgetsGeneralComponent,
    DashboardDefaultComponent,
    DashboardAnalyticsComponent,
    DashboardCryptoComponent,
    ScrumBoardComponent,
    TasksComponent,
    FileManagerComponent,
    MailComponent,
    MessagesComponent,
    UserSettingsComponent,
    UserLayoutComponent,
    UserBillingComponent,
    UserCreditcardComponent,
    UserTransactionsComponent,
    TimelineComponent,
    ProfileComponent,
    PricingSimpleComponent,
    PricingModernComponent,
    PricingTableComponent,
    InvoiceComponent,
    SearchResultComponent,
    Error404Component,
    Error500Component,
    FaqComponent,
    ManualComponent,
    SupportComponent,
    ChangelogComponent,
    MaintenanceComponent,
    WelcomeComponent,
    GettingStartedComponent,
    PricingOtherComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    SharedModule,
    ChartsModule,
    AgGridModule.withComponents([]),
  ]
})
export class MainModule {
}
