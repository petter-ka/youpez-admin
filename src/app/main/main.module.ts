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
import {DashboardCryptoComponent} from './dashboard/dashboard-crypto/dashboard-crypto.component';
import { ScrumBoardComponent } from './scrum/scrum-board/scrum-board.component';
import { TasksComponent } from './tasks/tasks/tasks.component'

@NgModule({
  declarations: [
    TypographyComponent,
    WidgetsGeneralComponent,
    DashboardDefaultComponent,
    DashboardAnalyticsComponent,
    DashboardCryptoComponent,
    ScrumBoardComponent,
    TasksComponent
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
