import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'

import {LayoutComponent} from "./shared/layout/layout.component"

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dataset',
        canActivate: [
          //DatasetGuardService,
        ],
        resolve: {
          //datasets: DatasetV2ResolveService,
        },
        children: [],
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
