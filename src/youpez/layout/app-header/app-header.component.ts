import {Component, OnInit, Input} from '@angular/core'

@Component({
  selector: 'youpez-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Input() bordered: boolean = true

  constructor() {
  }

  ngOnInit(): void {
  }

}
