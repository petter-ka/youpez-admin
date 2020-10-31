import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {LayoutComponent} from "../shared/layout/layout.component"
import {AuthLoginComponent} from "./auth-login/auth-login.component"

const routes: Routes = [
  {
    path: 'login',
    component: AuthLoginComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
