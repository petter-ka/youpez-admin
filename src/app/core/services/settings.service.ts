import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() {
  }

  setTheme(themeName) {
    const rootEl = document.querySelector('html')
    const classList = [].slice.apply(rootEl.classList)

    rootEl.classList.add(themeName)
    /*if (classList.includes('app-theme-sidebar-light')) {
      rootEl.classList.remove('app-theme-sidebar-light')
      rootEl.classList.add('app-theme-sidebar-dark')
    }
    if (classList.includes('app-theme-sidebar-dark')) {
      rootEl.classList.remove('app-theme-sub-sidebar-light')
      rootEl.classList.add('app-theme-sub-sidebar-dark')
    }
    if (classList.includes('app-theme-sidebar-dark') && classList.includes('app-theme-sub-sidebar-dark')) {
      rootEl.classList.remove('app-theme-sidebar-dark')
      rootEl.classList.remove('app-theme-sub-sidebar-dark')
      rootEl.classList.add('app-theme-sidebar-light')
      rootEl.classList.add('app-theme-sub-sidebar-light')
    }*/
  }
}
