import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {SharedModule} from "../shared/shared.module"

import {AuthRoutingModule} from './auth-routing.module'
import {AuthLoginComponent} from './auth-login/auth-login.component';
import { AuthWelcomeScreenComponent } from './auth-welcome-screen/auth-welcome-screen.component'


@NgModule({
  declarations: [AuthLoginComponent, AuthWelcomeScreenComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule {
}
