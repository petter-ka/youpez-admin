import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EchartsComponent} from "./echarts/echarts.component"

const Components = [
  EchartsComponent,
]

@NgModule({
  declarations: [
    ...Components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...Components,
  ]
})
export class ChartsModule {
}
