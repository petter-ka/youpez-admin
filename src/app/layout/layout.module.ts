import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SharedModule} from "../shared/shared.module"

import {LayoutComponent} from "./default/layout.component"
import {AppLayoutHorizontalComponent} from "./horizontal/app-layout-horizontal/app-layout-horizontal.component"

import {LayoutMiniSidebarComponent} from "./menu/layout-mini-sidebar/layout-mini-sidebar.component"
import {LayoutSidebarComponent} from "./menu/layout-sidebar/layout-sidebar.component"

@NgModule({
  declarations: [
    LayoutComponent,
    AppLayoutHorizontalComponent,
    LayoutMiniSidebarComponent,
    LayoutSidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    LayoutComponent,
    AppLayoutHorizontalComponent,
    LayoutMiniSidebarComponent,
    LayoutSidebarComponent,
  ],
})
export class LayoutModule {
}
