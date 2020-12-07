import { Component, OnInit } from '@angular/core';
import {AppTab} from "../../../../../@youpez"

@Component({
  selector: 'app-starter-full-width-tabs',
  templateUrl: './starter-full-width-tabs.component.html',
  styleUrls: ['./starter-full-width-tabs.component.scss']
})
export class StarterFullWidthTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public tabs: AppTab[] = [
    {
      name: 'Tab1',
      url: '',
    },
    {
      name: 'Tab2',
      url: '',
    },
    {
      name: 'Tab3',
      url: '',
    },
    {
      name: 'Tab4',
      url: '',
    },
    {
      name: 'Disabled',
      disabled: true,
    }
  ]
}
