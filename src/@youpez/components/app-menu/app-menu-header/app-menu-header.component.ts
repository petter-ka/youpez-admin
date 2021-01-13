import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core'

@Component({
  selector: 'youpez-menu-header',
  templateUrl: './app-menu-header.component.html',
  styleUrls: ['./app-menu-header.component.css']
})
export class AppMenuHeaderComponent implements OnInit {

  @Input('groupName') groupName: string = ''
  @Input('opened') opened: boolean = true

  @Output('toggle') toggle: EventEmitter<any> = new EventEmitter()

  constructor() {
  }

  ngOnInit() {
  }

  onToggle() {
    this.toggle.next()
  }

}
