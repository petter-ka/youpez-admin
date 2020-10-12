import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SharedModule} from "../shared/shared.module"

import {MainRoutingModule} from './main-routing.module'
import {TypographyComponent} from './typography/typography.component';
import { WidgetsGeneralComponent } from './widgets/widgets-general/widgets-general.component'

@NgModule({
  declarations: [
    TypographyComponent,
    WidgetsGeneralComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
  ]
})
export class MainModule {
}
