import {Component, OnInit} from '@angular/core'
import {defaultRouterTransition} from "../../core"

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    defaultRouterTransition,
  ],
})
export class LayoutComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
