import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() {
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
}
