import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FlexLayoutModule} from '@angular/flex-layout'

import {CoreModule} from "./core/core.module"
import {SharedModule} from './shared/shared.module'

import {
  GridModule,
  ListModule,
  TabsModule,
  TilesModule
} from 'carbon-components-angular'

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
    GridModule,
    ListModule,
    TabsModule,
    TilesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
