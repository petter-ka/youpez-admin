import {Component, OnInit, Input, ViewChildren, QueryList, ElementRef, Output, EventEmitter} from '@angular/core'
import {AppMenuItemComponent} from '../app-menu-item/app-menu-item.component'

@Component({
  selector: 'youpez-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  @ViewChildren('menuLevel') menuLevel: QueryList<AppMenuItemComponent>
  @Input() menu: Array<any> = []
  @Input() opened: boolean = true

  @Output() groupToggle: EventEmitter<string> = new EventEmitter()

  constructor() {
  }

  ngOnInit() {
  }

  onToggle(event) {
    this.menuLevel.map((item) => {
      item.toggleParent(event)
    })
  }

  onGroupToggle(groupName) {
    this.groupToggle.next(groupName)
  }
}
