import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {NgScrollbarModule} from 'ngx-scrollbar'
import {
  AddModule,
  CaretDownModule,
  HomeModule,
  SearchModule,
  AccountModule,
  ChatModule,
  NotificationModule,
  CloudSatelliteModule,
  ApiModule,
  ApertureModule,
  UserModule,
  ToolsModule,
  ApplicationModule,
} from "@carbon/icons-angular"
import {FlexLayoutModule} from '@angular/flex-layout'

import {ResizableModule} from 'angular-resizable-element'
import {BemModule} from 'angular-bem'

import {AppSidenavComponent} from "./app-sidenav/app-sidenav/app-sidenav.component"
import {AppSidenavContainerComponent} from "./app-sidenav/app-sidenav-container/app-sidenav-container.component"

import {
  GridModule,
  ListModule,
  TabsModule,
  TilesModule,
  InputModule,
} from 'carbon-components-angular'

const MainModules = [
  FlexLayoutModule,
  ResizableModule,
  BemModule,
  NgScrollbarModule,
]

const CarbonModules = [
  GridModule,
  ListModule,
  TabsModule,
  TilesModule,
  InputModule,
]

const CarbonIconModules = [
  CaretDownModule,
  AddModule,
  HomeModule,
  SearchModule,
  AccountModule,
  ChatModule,
  NotificationModule,
  CloudSatelliteModule,
  ApiModule,
  ApertureModule,
  UserModule,
  ToolsModule,
  ApplicationModule,
]

const Components = [
  AppSidenavComponent,
  AppSidenavContainerComponent,
]

@NgModule({
  imports: [
    CommonModule,
    ...MainModules,
    ...CarbonIconModules,
    ...CarbonModules,
  ],
  declarations: [
    ...Components
  ],
  exports: [
    ...Components,
    ...MainModules,
    ...CarbonIconModules,
    ...CarbonModules,

  ]
})
export class SharedModule {
  constructor() {

  }
}
