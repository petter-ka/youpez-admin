import {Injectable} from '@angular/core'
import {environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class WindowRefService {

  constructor() {
  }

  getNativeWindow() {
    return window
  }

  callWindowResize() {
    if (typeof(Event) === 'function') {
      // modern browsers
      window.dispatchEvent(new Event('resize'))
    } else {
      // for IE and other old browsers
      // causes deprecation warning on modern browsers
      //const evt = window.document.createEvent('UIEvents')
      //evt.initEvent('resize', true, false, window, 0)
      //window.dispatchEvent(evt)
    }
  }

  getLocationHostName() {
    const connection = 'http'
    return connection + window.location.hostname
  }

  getLocationHostNameWithRoute(route: string) {
    return this.getLocationHostName() + route
  }
}
