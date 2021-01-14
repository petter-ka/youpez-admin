import {Component, EventEmitter, OnInit, Output} from '@angular/core'

@Component({
  selector: 'app-main-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() menuClick: EventEmitter<boolean> = new EventEmitter()
  @Output() itemClick: EventEmitter<any> = new EventEmitter()

  constructor() {
  }

  ngOnInit(): void {
  }

  onSideBarToggle($event) {
    this.menuClick.next(true)
  }

  onItemClick(event) {
    this.itemClick.next(event)
  }
}
