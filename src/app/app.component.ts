import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute, NavigationStart, NavigationEnd, NavigationCancel} from "@angular/router"
import {registerTheme} from 'echarts/lib/echarts'
import {environment} from "../environments/environment"

import {getLightEchartsTheme, getDarkEchartsTheme} from "../@youpez"
import {SettingsService} from "../@youpez/services/settings.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private appLoaded: boolean = false
  private title: string = 'theme'

  constructor(private settingsService: SettingsService,
              private router: Router,
              private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe((queryParams) => {
        //console.log(queryParams)
        console.log(queryParams)
      })
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        //this.slimLoadingBarService.start()
      }
      if (event instanceof NavigationEnd) {
        if (!this.appLoaded) {
          (<any>window).appBootstrap()
          this.appLoaded = true
        }
        //this.slimLoadingBarService.complete()
      }
      if (event instanceof NavigationCancel) {
        //this.slimLoadingBarService.reset()
      }
    })

    if (environment.theme === 'dark') {
      registerTheme('inverse', getLightEchartsTheme())
      registerTheme('default', getDarkEchartsTheme())
    }
    else {
      registerTheme('inverse', getDarkEchartsTheme())
      registerTheme('default', getLightEchartsTheme())
    }

    this.settingsService.setTheme('app-theme--default')
    this.settingsService.setTheme('app-theme-sidebar--black')
    this.settingsService.setTheme('app-theme-header--black')


  }
}
