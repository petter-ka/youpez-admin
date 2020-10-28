import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {TypographyComponent} from "./typography/typography.component"
import {LayoutComponent} from "../shared/layout/layout.component"
import {WidgetsGeneralComponent} from "./widgets/widgets-general/widgets-general.component"
import {DashboardDefaultComponent} from "./dashboard/dashboard-default/dashboard-default.component"
import {DashboardAnalyticsComponent} from "./dashboard/dashboard-analytics/dashboard-analytics.component"
import {DashboardCryptoComponent} from "./dashboard/dashboard-crypto/dashboard-crypto.component"
import {ScrumBoardComponent} from "./scrum/scrum-board/scrum-board.component"
import {TasksComponent} from "./tasks/tasks/tasks.component"
import {FileManagerComponent} from "./file-manager/file-manager/file-manager.component"
import {MailComponent} from "./mail/mail/mail.component"
import {MessagesComponent} from "./messages/messages/messages.component"

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: 'default',
            component: DashboardDefaultComponent,
          },
          {
            path: 'analytics',
            component: DashboardAnalyticsComponent,
          },
          {
            path: 'crypto',
            component: DashboardCryptoComponent,
          },
        ],
      },
      {
        path: 'typography',
        component: TypographyComponent,
      },
      {
        path: 'widgets',
        children: [
          {
            path: 'general',
            component: WidgetsGeneralComponent,
          }
        ]
      },
      {
        path: 'scrum-board',
        component: ScrumBoardComponent,
      },
      {
        path: 'tasks',
        component: TasksComponent,
      },
      {
        path: 'file-manager',
        component: FileManagerComponent,
      },
      {
        path: 'mail',
        component: MailComponent,
      },
      {
        path: 'messages',
        component: MessagesComponent,
      }
    ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
