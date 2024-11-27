import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {YoupezModule} from "@youpez/youpez.module"

@NgModule({
  imports: [
    CommonModule,
    YoupezModule,
  ],
  declarations: [
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    YoupezModule,
  ]
})
export class SharedModule {
  constructor() {

  }
}
