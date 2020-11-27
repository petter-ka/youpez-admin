import {Component, OnInit} from '@angular/core'
import {Router, ActivatedRoute} from "@angular/router"
import {registerTheme} from 'echarts/lib/echarts'

import {getLightEchartsTheme, getDarkEchartsTheme} from "../@youpez"
import {SettingsService} from "../@youpez/services/settings.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'theme'

  constructor(private settingsService: SettingsService,
              private router: Router,
              private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((queryParams) => {
      console.log(queryParams)
    })
    registerTheme('inverse', getDarkEchartsTheme())
    registerTheme('default', getLightEchartsTheme())
    this.settingsService.setTheme('app-theme--light')
    this.settingsService.setTheme('app-theme-sidebar--black')
    this.settingsService.setTheme('app-theme-header--black')

  }
}
