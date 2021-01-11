import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EchartsComponent} from "./echarts/echarts.component"
import {EchartsContainerComponent} from './echarts-container/echarts-container.component'

const Components = [
  EchartsComponent,
  EchartsContainerComponent,
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
