import {Component, OnInit, Input} from '@angular/core'

@Component({
  selector: 'youpez-logo',
  templateUrl: './app-logo.component.html',
  styleUrls: ['./app-logo.component.scss']
})
export class AppLogoComponent implements OnInit {

  @Input() type: string = ''
  @Input() logoWidth: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

}
