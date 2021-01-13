import {Component, OnInit, Input, Output} from '@angular/core'
import {AppTab} from "../../../"
import {Router} from "@angular/router"


export declare type TabType = 'navigation' | 'sm'

@Component({
  selector: 'youpez-content-tabs',
  templateUrl: './app-content-tabs.component.html',
  styleUrls: ['./app-content-tabs.component.scss']
})
export class AppContentTabsComponent implements OnInit {

  @Input() navigation: boolean = true
  @Input() tabs: AppTab[] = []
  @Input() contentTitle:string = 'F'

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onClick(tab: AppTab) {
    if (this.navigation === true) {
      if (!tab.active) {
        this.router.navigate([tab.url])
      }
    }
  }
}
