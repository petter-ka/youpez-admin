import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {NavigationEnd, NavigationStart, Router, RouterModule} from '@angular/router'

import {NgScrollbarModule} from 'ngx-scrollbar'
import {DragDropModule} from '@angular/cdk/drag-drop'
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
  HelpModule,
  ArrowUpModule,
  ArrowDownModule,
  OverflowMenuHorizontalModule,
  OverflowMenuVerticalModule,
  CloudDataOpsModule,
  VirtualPrivateCloudAltModule,
  CheckmarkOutlineModule,
  CaretRightModule,
  CaretLeftModule,
  ArrowRightModule,
  ArrowLeftModule,
  RenewModule,
  AlarmModule,
  MinimizeModule,
  CloudDownloadModule,
  AnalyticsModule,
  ActivityModule,
  DashboardModule,
  TaskModule,
  CatalogModule,
  DocumentModule,
  EmailModule,
  SendAltModule,
  SendModule,
  DashboardReferenceModule,
  UserAdminModule,
  UserAvatarModule,
  FolderModule,
  ImageSearchModule,
  ErrorModule,
  PhraseSentimentModule,
  TableSplitModule,
  ChartColumnModule,
  MagicWandModule,
  TextTrackingModule,
  TextCreationModule,
  TrashCanModule,
  MenuModule,
  RadioButtonModule,
  RadioButtonCheckedModule,
  SettingsAdjustModule,
  SettingsModule,
  CheckboxCheckedModule,
  CloudAppModule,
  BullhornModule,
  BuildingInsights_1Module,
  TagModule as TagModuleIcon, TimeModule,
} from "@carbon/icons-angular"
import {FlexLayoutModule} from '@angular/flex-layout'

import {ResizableModule} from 'angular-resizable-element'
import {BemModule} from 'angular-bem'
import {NgbDropdownModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap'

import {AppSidenavComponent} from "./app-sidenav/app-sidenav/app-sidenav.component"
import {AppSidenavContainerComponent} from "./app-sidenav/app-sidenav-container/app-sidenav-container.component"

import {
  GridModule,
  ListModule,
  TabsModule,
  TilesModule,
  InputModule,
  ButtonModule,
  TagModule,
  BreadcrumbModule,
  CheckboxModule,
  ComboBoxModule,
  AccordionModule,
  TableModule,
  ToggleModule,
  DatePickerModule,
  SearchModule as SearchModuleComponent,
  ContentSwitcherModule,
  SkeletonModule,
} from 'carbon-components-angular'
import {LayoutComponent} from './layout/layout.component'
import {LayoutMiniSidebarComponent} from './layout/layout-mini-sidebar/layout-mini-sidebar.component'
import {LayoutSidebarComponent} from './layout/layout-sidebar/layout-sidebar.component'

import {AppMenuComponent} from "./app-menu/app-menu/app-menu.component"
import {AppMenuHeaderComponent} from "./app-menu/app-menu-header/app-menu-header.component"
import {AppMenuItemComponent} from "./app-menu/app-menu-item/app-menu-item.component"
import {IbmIconComponent} from './ibm-icon/ibm-icon.component'
import {AppTableComponent} from './app-table/app-table.component'
import {AppHeaderComponent} from './layout/app-header/app-header.component'
import {AppHeaderTitleComponent} from './layout/app-header/app-header-title/app-header-title.component'
import {AppHeaderToolsComponent} from './layout/app-header/app-header-tools/app-header-tools.component'
import {AppThemeSettingsComponent} from './layout/app-theme-settings/app-theme-settings.component'
import {AppLayoutHeaderComponent} from './layout/app-layout-header/app-layout-header.component'
import {AppSearchComponent} from './app-search/app-search.component'

const MainModules = [
  RouterModule,
  FlexLayoutModule,
  ResizableModule,
  BemModule,
  NgbDropdownModule,
  NgbTooltipModule,
  DragDropModule,
]

const CarbonModules = [
  GridModule,
  ListModule,
  TabsModule,
  TilesModule,
  InputModule,
  ButtonModule,
  TagModule,
  BreadcrumbModule,
  CheckboxModule,
  ComboBoxModule,
  AccordionModule,
  TableModule,
  ToggleModule,
  DatePickerModule,
  SearchModuleComponent,
  ContentSwitcherModule,
  SkeletonModule,
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
  HelpModule,
  ArrowUpModule,
  ArrowDownModule,
  OverflowMenuHorizontalModule,
  OverflowMenuVerticalModule,
  CloudDataOpsModule,
  VirtualPrivateCloudAltModule,
  CheckmarkOutlineModule,
  CaretRightModule,
  CaretLeftModule,
  ArrowRightModule,
  ArrowLeftModule,
  RenewModule,
  AlarmModule,
  MinimizeModule,
  CloudDownloadModule,
  AnalyticsModule,
  ActivityModule,
  DashboardModule,
  TaskModule,
  CatalogModule,
  DocumentModule,
  EmailModule,
  SendAltModule,
  SendModule,
  DashboardReferenceModule,
  UserAdminModule,
  UserAvatarModule,
  FolderModule,
  ImageSearchModule,
  ErrorModule,
  PhraseSentimentModule,
  TableSplitModule,
  ChartColumnModule,
  MagicWandModule,
  TextTrackingModule,
  TextCreationModule,
  TrashCanModule,
  MenuModule,
  RadioButtonModule,
  RadioButtonCheckedModule,
  SettingsAdjustModule,
  SettingsModule,
  CheckboxCheckedModule,
  CloudAppModule,
  BullhornModule,
  BuildingInsights_1Module,
  TagModuleIcon,
  TimeModule,
]

const Components = [
  AppSidenavComponent,
  AppSidenavContainerComponent,
  LayoutComponent,
  LayoutMiniSidebarComponent,
  LayoutSidebarComponent,
  AppMenuComponent,
  AppMenuHeaderComponent,
  AppMenuItemComponent,
  IbmIconComponent,
  AppTableComponent,
  AppHeaderComponent,
  AppHeaderTitleComponent,
  AppHeaderToolsComponent,
  AppThemeSettingsComponent,
  AppLayoutHeaderComponent,
  AppSearchComponent,
]

@NgModule({
  imports: [
    CommonModule,
    NgScrollbarModule.withConfig({
      visibility: 'hover',
    }),
    ...MainModules,
    ...CarbonIconModules,
    ...CarbonModules,
  ],
  declarations: [
    ...Components,
  ],
  exports: [
    NgScrollbarModule,
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
