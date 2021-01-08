import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {AuthLoginComponent} from "./auth-login/auth-login.component"

import {
  AppLayoutDividedComponent,
  AppLayoutDividedAltComponent,
  AppLayoutDividedFullComponent,
  AppLayoutBasicComponent
} from "@youpez/index"

import {AuthSignupComponent} from "./auth-signup/auth-signup.component"
import {AuthForgotPasswordComponent} from "./auth-forgot-password/auth-forgot-password.component"
import {AuthResetPasswordComponent} from "./auth-reset-password/auth-reset-password.component"
import {AuthConfirmationComponent} from "./auth-confirmation/auth-confirmation.component"
import {AuthBookADemoComponent} from "./auth-book-a-demo/auth-book-a-demo.component"
import {ComingSoonComponent} from "./coming-soon/coming-soon.component"

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
  },
  {
    path: 'coming-soon',
    children: [
      {
        path: 'modern',
        component: AppLayoutDividedComponent,
        children: [
          {
            path: '',
            component: ComingSoonComponent,
          }
        ]
      },
      {
        path: 'full',
        component: AppLayoutDividedAltComponent,
        children: [
          {
            path: '',
            component: ComingSoonComponent,
          }
        ]
      },
      {
        path: 'full-middle',
        component: AppLayoutDividedFullComponent,
        children: [
          {
            path: '',
            component: ComingSoonComponent,
          }
        ]
      },
      {
        path: 'basic',
        component: AppLayoutBasicComponent,
        children: [
          {
            path: '',
            component: ComingSoonComponent,
          }
        ]
      },
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
}
