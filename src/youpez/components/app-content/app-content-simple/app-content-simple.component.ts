import {Component, OnInit, Input} from '@angular/core'

@Component({
  selector: 'youpez-content-simple',
  templateUrl: './app-content-simple.component.html',
  styleUrls: ['./app-content-simple.component.scss']
})
export class AppContentSimpleComponent implements OnInit {

  @Input() mainTitle: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

}
