import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SharedModule} from "../shared/shared.module"
import {LayoutModule} from "../layout/layout.module"
import {AgGridModule} from '@ag-grid-community/angular'
import {ChartsModule} from '../../@youpez'
import {MainRoutingModule} from './main-routing.module'

import {TypographyComponent} from './typography/typography.component'
import {WidgetsGeneralComponent} from './widgets/widgets-general/widgets-general.component'
import {DashboardDefaultComponent} from './dashboard/dashboard-default/dashboard-default.component'
import {DashboardAnalyticsComponent} from './dashboard/dashboard-analytics/dashboard-analytics.component'
import {DashboardCryptoComponent} from './dashboard/dashboard-crypto/dashboard-crypto.component'
import {ScrumBoardComponent} from './scrum/scrum-board/scrum-board.component'
import {TasksComponent} from './tasks/tasks/tasks.component'
import {FileManagerComponent} from './file-manager/file-manager/file-manager.component'
import {MailComponent} from './mail/mail/mail.component'
import {MessagesComponent} from './messages/messages/messages.component'
import {UserSettingsComponent} from './user/user-settings/user-settings.component'
import {UserLayoutComponent} from './user/user-layout/user-layout.component'
import {UserBillingComponent} from './user/user-billing/user-billing.component'
import {UserCreditcardComponent} from './user/user-creditcard/user-creditcard.component'
import {UserTransactionsComponent} from './user/user-transactions/user-transactions.component'
import {TimelineComponent} from './timeline/timeline.component'
import {ProfileComponent} from './profile/profile.component'
import {PricingSimpleComponent} from './pricing/pricing-simple/pricing-simple.component'
import {PricingModernComponent} from './pricing/pricing-modern/pricing-modern.component'
import {PricingTableComponent} from './pricing/pricing-table/pricing-table.component'
import {InvoiceComponent} from './invoice/invoice.component'
import {SearchResultComponent} from './search-result/search-result.component'
import {Error404Component} from './errors/error404/error404.component'
import {Error500Component} from './errors/error500/error500.component'
import {FaqComponent} from './application/faq/faq.component'
import {ManualComponent} from './application/manual/manual.component'
import {SupportComponent} from './application/support/support.component'
import {ChangelogComponent} from './application/changelog/changelog.component'
import {MaintenanceComponent} from './maintenance/maintenance.component'
import {WelcomeComponent} from './application/welcome/welcome.component'
import {GettingStartedComponent} from './application/getting-started/getting-started.component'
import {PricingOtherComponent} from './pricing/pricing-other/pricing-other.component'
import {UiComponentsComponent} from './ui-components/ui-components.component'
import {WidgetsCardComponent} from './widgets/widgets-card/widgets-card.component'
import {WidgetsListComponent} from './widgets/widgets-list/widgets-list.component'
import {TableBasicComponent} from './tables/table-basic/table-basic.component'
import {TableAdvancedComponent} from './tables/table-advanced/table-advanced.component'
import {TableFullComponent} from './tables/table-full/table-full.component'
import {ChartsComponent} from './charts/charts.component'
import {IconsComponent} from './icons/icons.component'
import {FormsGeneralComponent} from './forms/forms-general/forms-general.component'
import {FormsAdvancedComponent} from './forms/forms-advanced/forms-advanced.component'
import {FormsValidationComponent} from './forms/forms-validation/forms-validation.component'
import {FormsWizardComponent} from './forms/forms-wizard/forms-wizard.component'
import {DummyTableExpansionComponent} from './components/dummy-table-expansion/dummy-table-expansion.component'
import {DummyTableAdvancedComponent} from './components/dummy-table-advanced/dummy-table-advanced.component'
import {DummyTablePaginationComponent} from './components/dummy-table-pagination/dummy-table-pagination.component'
import {DummyTableRichComponent} from './components/dummy-table-rich/dummy-table-rich.component'
import {DummyFormCreditCardComponent} from './components/dummy-form-credit-card/dummy-form-credit-card.component'
import {DummyFormBillingComponent} from './components/dummy-form-billing/dummy-form-billing.component'
import {DummyFormWizardComponent} from './components/dummy-form-wizard/dummy-form-wizard.component'
import {ScrumFormComponent} from './scrum/scrum-form/scrum-form.component'
import {ScrumViewComponent} from './scrum/scrum-view/scrum-view.component'
import {MailComposeComponent} from './mail/mail-compose/mail-compose.component';
import { StarterFullWidthBasicComponent } from './starters/full-width/starter-full-width-basic/starter-full-width-basic.component';
import { StarterFullWidthHeaderComponent } from './starters/full-width/starter-full-width-header/starter-full-width-header.component';
import { StarterFullWidthTabsComponent } from './starters/full-width/starter-full-width-tabs/starter-full-width-tabs.component';
import { StarterLeftSidebarBasicComponent } from './starters/left-sidebar/starter-left-sidebar-basic/starter-left-sidebar-basic.component';
import { StarterLeftSidebarHeaderComponent } from './starters/left-sidebar/starter-left-sidebar-header/starter-left-sidebar-header.component';
import { StarterLeftSidebarTabsComponent } from './starters/left-sidebar/starter-left-sidebar-tabs/starter-left-sidebar-tabs.component';
import { StarterRightSidebarBasicComponent } from './starters/right-sidebar/starter-right-sidebar-basic/starter-right-sidebar-basic.component';
import { StarterRightSidebarHeaderComponent } from './starters/right-sidebar/starter-right-sidebar-header/starter-right-sidebar-header.component';
import { StarterRightSidebarTabsComponent } from './starters/right-sidebar/starter-right-sidebar-tabs/starter-right-sidebar-tabs.component';
import { StarterApplicationBasicComponent } from './starters/application/starter-application-basic/starter-application-basic.component';
import { StarterApplicationAdvancedComponent } from './starters/application/starter-application-advanced/starter-application-advanced.component';
import { StarterApplicationComplexComponent } from './starters/application/starter-application-complex/starter-application-complex.component'

@NgModule({
  declarations: [
    TypographyComponent,
    WidgetsGeneralComponent,
    DashboardDefaultComponent,
    DashboardAnalyticsComponent,
    DashboardCryptoComponent,
    ScrumBoardComponent,
    TasksComponent,
    FileManagerComponent,
    MailComponent,
    MessagesComponent,
    UserSettingsComponent,
    UserLayoutComponent,
    UserBillingComponent,
    UserCreditcardComponent,
    UserTransactionsComponent,
    TimelineComponent,
    ProfileComponent,
    PricingSimpleComponent,
    PricingModernComponent,
    PricingTableComponent,
    InvoiceComponent,
    SearchResultComponent,
    Error404Component,
    Error500Component,
    FaqComponent,
    ManualComponent,
    SupportComponent,
    ChangelogComponent,
    MaintenanceComponent,
    WelcomeComponent,
    GettingStartedComponent,
    PricingOtherComponent,
    UiComponentsComponent,
    WidgetsCardComponent,
    WidgetsListComponent,
    TableBasicComponent,
    TableAdvancedComponent,
    TableFullComponent,
    ChartsComponent,
    IconsComponent,
    FormsGeneralComponent,
    FormsAdvancedComponent,
    FormsValidationComponent,
    FormsWizardComponent,
    DummyTableExpansionComponent,
    DummyTableAdvancedComponent,
    DummyTablePaginationComponent,
    DummyTableRichComponent,
    DummyFormCreditCardComponent,
    DummyFormBillingComponent,
    DummyFormWizardComponent,
    ScrumFormComponent,
    ScrumViewComponent,
    MailComposeComponent,
    StarterFullWidthBasicComponent,
    StarterFullWidthHeaderComponent,
    StarterFullWidthTabsComponent,
    StarterLeftSidebarBasicComponent,
    StarterLeftSidebarHeaderComponent,
    StarterLeftSidebarTabsComponent,
    StarterRightSidebarBasicComponent,
    StarterRightSidebarHeaderComponent,
    StarterRightSidebarTabsComponent,
    StarterApplicationBasicComponent,
    StarterApplicationAdvancedComponent,
    StarterApplicationComplexComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    SharedModule,
    ChartsModule,
    AgGridModule.withComponents([]),
  ]
})
export class MainModule {
}
