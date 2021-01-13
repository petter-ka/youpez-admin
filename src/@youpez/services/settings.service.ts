import {Injectable, EventEmitter} from '@angular/core'
import {DOCUMENT} from '@angular/common'
import {Inject} from "@angular/core"
import {BehaviorSubject} from 'rxjs'

import {environment} from "../../environments/environment"
import {registerTheme} from 'echarts/lib/echarts'
import {getLightEchartsTheme, getDarkEchartsTheme, appThemes, headerThemes, sideBarThemes} from "../helpers"

const checkClass = (arr, name) => {
  return arr.some(el => el.name === name)
}

const saveSessionStorage = (key, value) => {
  return sessionStorage.setItem(key, value)
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private theme = new BehaviorSubject<any>({
    theme: '',
    sidebar: '',
    header: '',
  })
  public $theme = this.theme.asObservable()
  public themeChanged: EventEmitter<any> = new EventEmitter()

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  public setTheme(name) {
    if (this.theme.value.theme === name) {
      return
    }
    if (checkClass(appThemes, name)) {
      this.loadTheme(name)
      this.emitThemeEvent('theme', name)
      saveSessionStorage('--app-theme', name)
    }
    else {
      this.loadTheme('light')
      this.emitThemeEvent('theme', 'light')
    }
  }

  public setSideBar(name) {
    if (this.theme.value.sidebar === name) {
      return
    }
    if (checkClass(sideBarThemes, name)) {
      this.changeThemeClassHelper(sideBarThemes, name)
      this.emitThemeEvent('sidebar', name)
      saveSessionStorage('--app-theme-sidebar', name)
    }
    else {
      this.changeThemeClassHelper(sideBarThemes, 'black')
    }
  }

  public setHeader(name) {
    if (this.theme.value.header === name) {
      return
    }
    if (checkClass(headerThemes, name)) {
      this.changeThemeClassHelper(headerThemes, name)
      this.emitThemeEvent('header', name)
      saveSessionStorage('--app-theme-header', name)
    }
    else {
      this.changeThemeClassHelper(headerThemes, 'black')
    }
  }

  private emitThemeEvent(key, value) {
    const nextValue = {
      ...this.theme.value,
      [key]: value,
    }
    this.theme.next(nextValue)
  }

  private removeTheme(themeName) {
    const rootEl = document.querySelector('html')
    const classList = [].slice.apply(rootEl.classList)

    if (classList.includes(themeName)) {
      rootEl.classList.remove(themeName)
    }
  }

  private setClass(themeName) {
    const rootEl = document.querySelector('html')
    const classList = [].slice.apply(rootEl.classList)

    if (!classList.includes(themeName)) {
      rootEl.classList.add(themeName)
    }
  }

  private changeThemeClassHelper(themes, name) {
    themes
      .filter(el => el.name !== name)
      .forEach(el => {
        this.removeTheme(el.theme)
      })

    themes
      .filter(el => el.name === name)
      .forEach(el => {
        this.setClass(el.theme)
      })
  }

  private loadTheme(theme) {
    if (theme === 'light') {
      this.loadLightTheme()
    }
    else if (theme === 'dark') {
      this.loadDarkTheme()
    }
    else {
      this.loadLightTheme()
    }
  }

  private loadLightTheme() {
    registerTheme('inverse', getDarkEchartsTheme())
    registerTheme('default', getLightEchartsTheme())
    this.removeTheme('app-theme--dark')
    this.setClass('app-theme--light')
    this.loadStyle('theme-light.css')
  }

  private loadDarkTheme() {
    registerTheme('inverse', getLightEchartsTheme())
    registerTheme('default', getDarkEchartsTheme())
    this.removeTheme('app-theme--light')
    this.setClass('app-theme--dark')
    this.loadStyle('theme-dark.css')
  }

  private loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0]
    let themeLink = this.document.getElementById('client-theme') as HTMLLinkElement

    if (themeLink) {
      themeLink.href = styleName
    }
    else {
      const style = this.document.createElement('link')
      style.id = 'client-theme'
      style.type = 'text/css'
      style.rel = 'stylesheet'
      style.href = `${styleName}`
      head.prepend(style)
    }
  }
}
