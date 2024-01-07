import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from "@angular/forms"
import { provideNgxMask, NgxMaskDirective, NgxMaskPipe } from 'ngx-mask'

import { NgScrollbarModule } from 'ngx-scrollbar'
import { DragDropModule } from '@angular/cdk/drag-drop'
import { A11yModule } from '@angular/cdk/a11y'

import { MatDialogModule } from "@angular/material/dialog"

import { FlexLayoutModule } from '@angular/flex-layout'

import { ResizableModule } from 'angular-resizable-element'

import { NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap'

import { AppSidenavComponent } from "./components/app-sidenav/app-sidenav/app-sidenav.component"
import { AppSidenavContainerComponent } from "./components/app-sidenav/app-sidenav-container/app-sidenav-container.component"

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
  DialogModule,
  LinkModule,
  NotificationModule,
  RadioModule,
  PaginationModule,
  SelectModule,
  SliderModule,
  NumberModule,
  FileUploaderModule, ProgressIndicatorModule, ModalModule, IconModule, IconService,
} from 'carbon-components-angular'

import { ArrowLeft20, ArrowRight20, Email20, Notification20, Dashboard20 } from '@carbon/icons'

import { AppMenuComponent } from "./components/app-menu/app-menu/app-menu.component"
import { AppMenuHeaderComponent } from "./components/app-menu/app-menu-header/app-menu-header.component"
import { AppMenuItemComponent } from "./components/app-menu/app-menu-item/app-menu-item.component"
import { IbmIconComponent } from './components/ibm-icon/ibm-icon.component'
import { AppTableComponent } from './components/app-table/app-table.component'
import { AppHeaderComponent } from './layout/app-header/app-header.component'
import { AppHeaderTitleComponent } from './layout/app-header/app-header-title/app-header-title.component'
import { AppHeaderToolsComponent } from './layout/app-header/app-header-tools/app-header-tools.component'
import { AppThemeSettingsComponent } from './layout/app-theme-settings/app-theme-settings.component'
import { AppLayoutHeaderComponent } from './layout/app-layout-header/app-layout-header.component'
import { AppSearchComponent } from './components/app-search/app-search.component'
import { AppTasksComponent } from './components/app-tasks/app-tasks.component'

import { InputTypeAdvancedPipe } from "./pipes/input-type-advanced.pipe"
import { TextHiglightPipe } from "./pipes/text-higlight.pipe"
import { AppLayoutDividedComponent } from './layout/auth/app-layout-divided/app-layout-divided.component'
import { AppLayoutDividedAltComponent } from './layout/auth/app-layout-divided-alt/app-layout-divided-alt.component'
import { AuthWelcomeScreenComponent } from "./layout/auth/auth-welcome-screen/auth-welcome-screen.component"
import { AppLayoutDividedFullComponent } from './layout/auth/app-layout-divided-full/app-layout-divided-full.component'
import { AppLayoutBasicComponent } from './layout/auth/app-layout-basic/app-layout-basic.component'
import { AppLockScreenComponent } from './components/app-lock-screen/app-lock-screen.component'
import { AppContentTabsComponent } from './components/app-content/app-content-tabs/app-content-tabs.component'
import { AppCreditCardComponent } from './components/app-credit-card/app-credit-card.component'
import { AppContentSimpleComponent } from './components/app-content/app-content-simple/app-content-simple.component'
import { SafePipe } from "./pipes/safe"
import { AppLogoComponent } from './components/app-logo/app-logo.component'
import { AppBreadcrumbComponent } from './components/app-breadcrumb/app-breadcrumb.component'
import { allIcons } from './icons'

const MainModules = [
  RouterModule,
  FlexLayoutModule,
  ResizableModule,
  // BemModule,
  NgbDropdownModule,
  NgbTooltipModule,
  DragDropModule,
  A11yModule,
  ReactiveFormsModule,
  MatDialogModule,
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
  DialogModule,
  // MaximizeModule,
  LinkModule,
  NotificationModule,
  RadioModule,
  PaginationModule,
  ProgressIndicatorModule,
  SelectModule,
  SliderModule,
  NumberModule,
  FileUploaderModule,
  ModalModule,
  IconModule,
]

const Components = [
  AppSidenavComponent,
  AppSidenavContainerComponent,
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
  AppTasksComponent,
  AppLayoutDividedComponent,
  AppLayoutDividedAltComponent,
  AuthWelcomeScreenComponent,
  AppLayoutDividedFullComponent,
  AppLayoutBasicComponent,
  AppLockScreenComponent,
  AppContentTabsComponent,
  AppCreditCardComponent,
  AppContentSimpleComponent,
  AppLogoComponent,
  AppLogoComponent,
  AppBreadcrumbComponent,
]

const Pipes = [
  InputTypeAdvancedPipe,
  TextHiglightPipe,
  SafePipe,
]

@NgModule({
  imports: [
    ...MainModules,
    ...CarbonModules,
    CommonModule,
    NgScrollbarModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  providers: [
    provideNgxMask(),
  ],
  declarations: [
    ...Components,
    ...Pipes,
  ],
  exports: [
    ...Components,
    ...MainModules,
    ...CarbonModules,
    ...Pipes,
    NgScrollbarModule,
  ]
})
export class YoupezModule {
  constructor(protected iconService: IconService) {
    iconService.registerAll(allIcons)
  }
}
