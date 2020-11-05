import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SharedModule} from "../shared/shared.module"
import {ChartsModule} from "../charts/charts.module"
import {AgGridModule} from '@ag-grid-community/angular'

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
import {UserBillingComponent} from './user/user-billing/user-billing.component';
import { UserCreditcardComponent } from './user/user-creditcard/user-creditcard.component';
import { UserTransactionsComponent } from './user/user-transactions/user-transactions.component'

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
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ChartsModule,
    AgGridModule.withComponents([]),
  ]
})
export class MainModule {
}
