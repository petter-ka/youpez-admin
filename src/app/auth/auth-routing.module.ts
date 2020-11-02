import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {LayoutComponent} from "../shared/layout/layout.component"
import {AuthLoginComponent} from "./auth-login/auth-login.component"
import {AppLayoutDividedComponent} from "../shared/layout/auth/app-layout-divided/app-layout-divided.component"
import {AppLayoutDividedAltComponent} from "../shared/layout/auth/app-layout-divided-alt/app-layout-divided-alt.component"
import {AppLayoutDividedFullComponent} from "../shared/layout/auth/app-layout-divided-full/app-layout-divided-full.component"
import {AppLayoutBasicComponent} from "../shared/layout/auth/app-layout-basic/app-layout-basic.component"
import {AuthSignupComponent} from "./auth-signup/auth-signup.component"
import {AuthForgotPasswordComponent} from "./auth-forgot-password/auth-forgot-password.component"
import {AuthResetPasswordComponent} from "./auth-reset-password/auth-reset-password.component"
import {AuthConfirmationComponent} from "./auth-confirmation/auth-confirmation.component"
import {AuthBookADemoComponent} from "./auth-book-a-demo/auth-book-a-demo.component"

const routes: Routes = [
  {
    path: 'modern',
    component: AppLayoutDividedComponent,
    children: [
      {
        path: 'signin',
        component: AuthLoginComponent,
      },
      {
        path: 'signup',
        component: AuthSignupComponent,
      },
      {
        path: 'reset-password',
        component: AuthResetPasswordComponent,
      },
      {
        path: 'forgot-password',
        component: AuthForgotPasswordComponent,
      },
      {
        path: 'confirmation',
        component: AuthConfirmationComponent,
      },
    ],
  },
  {
    path: 'full',
    component: AppLayoutDividedAltComponent,
    children: [
      {
        path: 'signin',
        component: AuthLoginComponent,
      },
      {
        path: 'signup',
        component: AuthSignupComponent,
      },
      {
        path: 'reset-password',
        component: AuthResetPasswordComponent,
      },
      {
        path: 'forgot-password',
        component: AuthForgotPasswordComponent,
      },
      {
        path: 'confirmation',
        component: AuthConfirmationComponent,
      },
    ],
  },
  {
    path: 'full-middle',
    component: AppLayoutDividedFullComponent,
    children: [
      {
        path: 'signin',
        component: AuthLoginComponent,
      },
      {
        path: 'signup',
        component: AuthSignupComponent,
      },
      {
        path: 'reset-password',
        component: AuthResetPasswordComponent,
      },
      {
        path: 'forgot-password',
        component: AuthForgotPasswordComponent,
      },
      {
        path: 'confirmation',
        component: AuthConfirmationComponent,
      },
    ],
  },
  {
    path: 'basic',
    component: AppLayoutBasicComponent,
    children: [
      {
        path: 'signin',
        component: AuthLoginComponent,
      },
      {
        path: 'signup',
        component: AuthSignupComponent,
      },
      {
        path: 'reset-password',
        component: AuthResetPasswordComponent,
      },
      {
        path: 'forgot-password',
        component: AuthForgotPasswordComponent,
      },
      {
        path: 'confirmation',
        component: AuthConfirmationComponent,
      },
    ],
  },
  {
    path: 'book-a-demo',
    component: AuthBookADemoComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
