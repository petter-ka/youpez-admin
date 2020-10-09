import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FlexLayoutModule} from '@angular/flex-layout'

import {CoreModule} from "./core/core.module"
import {SharedModule} from './shared/shared.module'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
