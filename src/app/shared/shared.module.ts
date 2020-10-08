import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ResizableModule} from 'angular-resizable-element'
import {BemModule} from 'angular-bem'

import {AppSidenavComponent} from "./app-sidenav/app-sidenav/app-sidenav.component"
import {AppSidenavContainerComponent} from "./app-sidenav/app-sidenav-container/app-sidenav-container.component"

const Components = [
  AppSidenavComponent,
  AppSidenavContainerComponent,
]

@NgModule({
  imports: [
    CommonModule,
    ResizableModule,
    BemModule,
  ],
  declarations: [
    ...Components
  ],
  exports: [
    ...Components,
    ResizableModule,
    BemModule,
  ]
})
export class SharedModule {
  constructor() {

  }
}
