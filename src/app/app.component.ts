import {Component, OnInit} from '@angular/core'
import {registerTheme} from 'echarts/lib/echarts'

import {getDefaultEchartsTheme} from "./core"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'theme'

  ngOnInit(): void {
    registerTheme('default', getDefaultEchartsTheme())
  }
}
