import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {YoupezModule} from "../../@youpez/youpez.module"

@NgModule({
  imports: [
    CommonModule,
    YoupezModule,
  ],
  declarations: [
  ],
  exports: [
    YoupezModule,
  ]
})
export class SharedModule {
  constructor() {

  }
}
