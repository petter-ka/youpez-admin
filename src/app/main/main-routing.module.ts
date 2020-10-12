import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {TypographyComponent} from "./typography/typography.component"
import {LayoutComponent} from "../shared/layout/layout.component"
import {WidgetsGeneralComponent} from "./widgets/widgets-general/widgets-general.component"

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
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
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
