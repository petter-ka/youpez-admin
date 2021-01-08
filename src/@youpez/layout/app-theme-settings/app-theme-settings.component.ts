import {Component, OnInit} from '@angular/core'
import {SettingsService} from "../../services/settings.service"
import {appThemes, sideBarThemes, headerThemes} from "@youpez/helpers"

@Component({
  selector: 'app-theme-settings',
  templateUrl: './app-theme-settings.component.html',
  styleUrls: ['./app-theme-settings.component.scss']
})
export class AppThemeSettingsComponent implements OnInit {

  public appThemes = appThemes
  public sideBarThemes = sideBarThemes
  public headerThemes = headerThemes

  constructor(private settingsService: SettingsService,) {
  }

  ngOnInit(): void {
  }

  onSetSideBarTheme(name) {
    this.settingsService.setSideBar(name)
  }

  onSetHeaderTheme(name) {
    this.settingsService.setHeader(name)
  }

  onChangeTheme(name) {
    this.settingsService.setTheme(name)
  }

}
