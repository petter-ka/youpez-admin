import {Injectable} from '@angular/core'
import {DOCUMENT} from '@angular/common'
import {Inject} from "@angular/core"
import {environment} from "../../environments/environment"

import {registerTheme} from 'echarts/lib/echarts'
import {getLightEchartsTheme, getDarkEchartsTheme} from "../../@youpez"

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  getRootClasses() {

  }

  removeTheme(themeName) {
    const rootEl = document.querySelector('html')
    const classList = [].slice.apply(rootEl.classList)

    if (classList.includes(themeName)) {
      rootEl.classList.remove(themeName)
    }
  }

  setTheme(themeName) {
    const rootEl = document.querySelector('html')
    const classList = [].slice.apply(rootEl.classList)

    if (!classList.includes(themeName)) {
      rootEl.classList.add(themeName)
    }
  }

  loadTheme(){
    this.loadLightTheme()
  }

  loadLightTheme() {
    registerTheme('inverse', getDarkEchartsTheme())
    registerTheme('default', getLightEchartsTheme())
    this.removeTheme('app-theme--dark')
    this.setTheme('app-theme--light')
    this.loadStyle('theme-light.css')
  }

  loadDarkTheme() {
    registerTheme('inverse', getLightEchartsTheme())
    registerTheme('default', getDarkEchartsTheme())
    this.removeTheme('app-theme--light')
    this.setTheme('app-theme--dark')
    this.loadStyle('theme-dark.css')
  }

  loadStyle(styleName: string) {
    const head = this.document.getElementsByTagName('head')[0]

    let themeLink = this.document.getElementById(
      'client-theme'
    ) as HTMLLinkElement
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
