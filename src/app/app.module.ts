import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@angular/flex-layout'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import {NgxMdModule} from "ngx-md"

import { CoreModule } from "./core/core.module"
import { SharedModule } from './shared/shared.module'

import {
  HttpClientModule,
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HTTP_INTERCEPTORS
} from '@angular/common/http'

import { AppComponent } from './app.component'
import { StoreModule } from '@ngrx/store'
import { reducers, metaReducers } from './store/app.reducers'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'
import { EffectsModule } from '@ngrx/effects'
import { AppEffects } from './store/app.effects'
import { routes } from './app-routes'
import { provideRouter } from '@angular/router'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [provideRouter(routes)],
  bootstrap: [AppComponent]
})
export class AppModule {
}
