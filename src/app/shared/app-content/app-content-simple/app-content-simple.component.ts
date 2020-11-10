import {Component, OnInit, Input} from '@angular/core'

@Component({
  selector: 'app-content-simple',
  templateUrl: './app-content-simple.component.html',
  styleUrls: ['./app-content-simple.component.scss']
})
export class AppContentSimpleComponent implements OnInit {

  @Input() title: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

}
