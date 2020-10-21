import {Component, OnInit} from '@angular/core'
import {registerTheme} from 'echarts/lib/echarts'

import {getDefaultEchartsTheme} from "./core"
import {SettingsService} from "./core/services/settings.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'theme'

  constructor(private settingsService: SettingsService) {

  }

  ngOnInit(): void {
    registerTheme('default', getDefaultEchartsTheme())
    this.settingsService.setTheme('app-theme--default')
  }
}
