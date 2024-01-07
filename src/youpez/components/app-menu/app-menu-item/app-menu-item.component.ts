import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core'
import {Router, Routes} from '@angular/router'
import {AppMenuService} from "../../../services/app-menu.service"

@Component({
  selector: 'app-menu-item',
  templateUrl: './app-menu-item.component.html',
  styleUrls: ['./app-menu-item.component.css']
})
export class AppMenuItemComponent implements OnInit {

  @Input('item') item: any = {}
  @Output() toggle: EventEmitter<any> = new EventEmitter()

  @ViewChild('parentHolder') parentHolder: ElementRef
  @ViewChildren('menuLevel') menuLevel: QueryList<AppMenuItemComponent>

  constructor(private router: Router,
              private appMenuService: AppMenuService) {
  }

  ngOnInit() {
  }

  toggleParent(event) {
    if (!this.parentHolder) {
      return
    }
    const element = this.parentHolder.nativeElement

    if (element.contains(event.target)) {
      element.classList.contains('app-sidebar__list__item--opened') ?
        element.classList.remove('app-sidebar__list__item--opened')
        : element.classList.add('app-sidebar__list__item--opened')
    }
    else {
      element.classList.remove('app-sidebar__list__item--opened')
    }
  }

  onToggle(event) {
    this.menuLevel.map((item) => {
      item.toggleParent(event)
    })
  }

  onClick() {
    if (this.item.callback !== undefined) {
      this.appMenuService.itemClick(this.item.callback)
    }
  }

  isRouteActive(url) {
    if (!url) {
      return false
    }
    return this.router.isActive(url, false)
  }

}
