import {Component, EventEmitter, OnInit, Output, Input, ViewChild, AfterViewInit, ElementRef} from '@angular/core'
import {NgScrollbar} from "ngx-scrollbar"
import {MenuType} from "../../../../@youpez"

@Component({
  selector: 'app-layout-sidebar',
  templateUrl: './layout-sidebar.component.html',
  styleUrls: ['./layout-sidebar.component.scss']
})
export class LayoutSidebarComponent implements OnInit, AfterViewInit {

  @ViewChild(NgScrollbar, {static: false}) scrollBar: NgScrollbar
  @ViewChild('sideBarHolder') sideBarHolder: ElementRef

  @Input() opened: boolean = false
  @Input() menu: Array<MenuType> = []
  @Output() sideBarToggle: EventEmitter<boolean> = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.scrollToActiveElement()
    }, 100)
  }

  onGroupToggle(groupName) {
    this.menu = this.menu.map(item => {
      if (item.groupName === groupName) {
        item.opened = !item.opened
      }
      return item
    })
  }

  onSideBarToggle() {
    this.sideBarToggle.next(true)
  }

  scrollToActiveElement() {
    const holderElementHeight = this.sideBarHolder.nativeElement.offsetHeight
    const element: any = document.getElementsByClassName("app-sidebar__list__item__inner--active")[0]

    if (element) {
      const offsetTop = element.offsetTop
      if (offsetTop > holderElementHeight) {
        this.scrollBar.scrollTo({top: offsetTop - ((holderElementHeight / 2) - 25), duration: 50})
      }
    }
  }

}
