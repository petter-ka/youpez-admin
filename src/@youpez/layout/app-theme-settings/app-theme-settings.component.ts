import {Component, OnDestroy, OnInit} from '@angular/core'
import {Subscription, Observable} from 'rxjs'

import {SettingsService} from "../../services/settings.service"
import {appThemes, sideBarThemes, headerThemes} from "@youpez/helpers"
import set = Reflect.set

@Component({
  selector: 'youpez-theme-settings',
  templateUrl: './app-theme-settings.component.html',
  styleUrls: ['./app-theme-settings.component.scss']
})
export class AppThemeSettingsComponent implements OnInit, OnDestroy {

  public appThemes = appThemes
  public sideBarThemes = sideBarThemes
  public headerThemes = headerThemes

  public selectedTheme: string = ''
  public selectedSidebar: string = ''
  public selectedHeader: string = ''

  private settingsSub: Subscription

  constructor(private settingsService: SettingsService,) {
  }

  ngOnInit(): void {
    this.settingsSub = this.settingsService.$theme.subscribe((settings) => {
      this.selectedTheme = settings.theme
      this.selectedSidebar = settings.sidebar
      this.selectedHeader = settings.header
    })
  }

  ngOnDestroy() {
    this.settingsSub.unsubscribe()
  }

  onSetSideBarTheme(name) {
    this.settingsService.setSideBar(name)
    this.settingsService.themeChanged.emit(true)
  }

  onSetHeaderTheme(name) {
    this.settingsService.setHeader(name)
    this.settingsService.themeChanged.emit(true)
  }

  onChangeTheme(name) {
    this.settingsService.setTheme(name)
    this.settingsService.themeChanged.emit(true)
  }

}
