import {Component, OnInit, Input} from '@angular/core'

@Component({
  selector: 'app-ibm-icon',
  templateUrl: './ibm-icon.component.html',
  styleUrls: ['./ibm-icon.component.scss']
})
export class IbmIconComponent implements OnInit {

  @Input() iconName: string = ''
  @Input() iconSize: string = '24' // 16 | 20 | 24 | 32

  constructor() {
  }

  ngOnInit(): void {
  }

}
