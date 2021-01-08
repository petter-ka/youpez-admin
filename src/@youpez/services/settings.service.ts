import {Injectable} from '@angular/core'
import {DOCUMENT} from '@angular/common'
import {Inject} from "@angular/core"
import {environment} from "../../environments/environment"
import {registerTheme} from 'echarts/lib/echarts'
import {getLightEchartsTheme, getDarkEchartsTheme} from "../../@youpez"
import {appThemes, headerThemes, sideBarThemes} from "../../@youpez"

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

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  removeTheme(themeName) {
    const rootEl = document.querySelector('html')
    const classList = [].slice.apply(rootEl.classList)

    if (classList.includes(themeName)) {
      rootEl.classList.remove(themeName)
    }
  }

  setClass(themeName) {
    const rootEl = document.querySelector('html')
    const classList = [].slice.apply(rootEl.classList)

    if (!classList.includes(themeName)) {
      rootEl.classList.add(themeName)
    }
  }

  setTheme(name) {
    if (checkClass(appThemes, name)) {
      this.loadTheme(name)
      saveSessionStorage('--app-theme', name)
    }
    else {
      this.loadTheme('light')
    }
  }

  setSideBar(name) {
    if (checkClass(sideBarThemes, name)) {
      this.changeThemeClassHelper(sideBarThemes, name)
      saveSessionStorage('--app-theme-sidebar', name)
    }
    else {
      this.changeThemeClassHelper(sideBarThemes, 'black')
    }
  }

  setHeader(name) {
    if (checkClass(headerThemes, name)) {
      this.changeThemeClassHelper(headerThemes, name)
      saveSessionStorage('--app-theme-header', name)
    }
    else {
      this.changeThemeClassHelper(headerThemes, 'black')
    }
  }

  changeThemeClassHelper(themes, name) {
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

  loadTheme(theme) {
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

  loadLightTheme() {
    registerTheme('inverse', getDarkEchartsTheme())
    registerTheme('default', getLightEchartsTheme())
    this.removeTheme('app-theme--dark')
    this.setClass('app-theme--light')
    this.loadStyle('theme-light.css')
  }

  loadDarkTheme() {
    registerTheme('inverse', getLightEchartsTheme())
    registerTheme('default', getDarkEchartsTheme())
    this.removeTheme('app-theme--light')
    this.setClass('app-theme--dark')
    this.loadStyle('theme-dark.css')
  }

  loadStyle(styleName: string) {
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
      head.appendChild(style)
    }
  }
}
