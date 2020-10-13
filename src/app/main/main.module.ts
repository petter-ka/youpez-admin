import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SharedModule} from "../shared/shared.module"
import {ChartsModule} from "../charts/charts.module"

import {MainRoutingModule} from './main-routing.module'
import {TypographyComponent} from './typography/typography.component'
import {WidgetsGeneralComponent} from './widgets/widgets-general/widgets-general.component'
import {DashboardDefaultComponent} from './dashboard/dashboard-default/dashboard-default.component'

@NgModule({
  declarations: [
    TypographyComponent,
    WidgetsGeneralComponent,
    DashboardDefaultComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    ChartsModule,
  ]
})
export class MainModule {
}
