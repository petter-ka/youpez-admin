import { Component, OnInit } from '@angular/core';
import {AppTab} from "../../../../@youpez"

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {

  public tabs: AppTab[] = [
    {
      name: 'Settings',
      url: '/app/user/settings',
    },
    {
      name: 'Billing',
      url: '/app/user/billing',
    },
    {
      name: 'Credit card',
      url: '/app/user/creditcard',
    },
    {
      name: 'Transactions',
      url: '/app/user/transactions',
    },
    {
      name: 'VIP Area',
      disabled: true,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
