import {Injectable} from '@angular/core'
import {Subject} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class AppMenuService {

  public $callbackClick = new Subject()

  constructor() {
  }

  itemClick(params) {
    this.$callbackClick.next(params)
  }
}
