import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.scss']
})
export class PricingTableComponent implements OnInit {

  public period = 1

  public features = [
    {
      group: 'Application',
      children: [
        {id: 1, name: 'Projects'},
        {id: 2, name: 'Users'},
        {id: 3, name: 'Storage'},
        {id: 4, name: 'API'},
        {id: 5, name: 'Download'},
        {id: 6, name: 'Cloud'},
      ]
    },
    {
      group: 'Backend',
      children: [
        {id: 7, name: 'On-premise'},
        {id: 8, name: 'Private cloud'},
        {id: 9, name: 'API burst'},
        {id: 10, name: 'Fraud detection / hour'},
        {id: 11, name: 'Load balancer / hour'},
        {id: 12, name: 'Bandwidth'},
      ]
    },
  ]

  public packages = [
    {
      type: 'Business',
      price: {
        1: 100,
        12: 80,
      },
      features: {
        1: 5,
        2: 2,
        3: '500 GB',
        4: true,
        5: true,
        6: false,
        7: false,
        8: false,
        9: false,
        10: '0,87 $',
        11: '0,11 $',
        12: '5 Gigabit',
      },
      use: 'Perfect for small companies',
      subtitle: 'All core features, including:',
      users: 'up to 10 users',
      button: 1,
      cssClass: 'app-bg-success-lt-30 app-text-contrast',
    },
    {
      type: 'Premium',
      price: {
        1: 300,
        12: 250,
      },
      features: {
        1: 25,
        2: 50,
        3: 'Unlimited',
        4: true,
        5: true,
        6: true,
        7: false,
        8: true,
        9: true,
        10: '0,55 $',
        11: '0,09 $',
        12: '100 Gigabit',
      },
      use: 'Perfect for big companies',
      subtitle: 'Everything in Business, plus',
      users: 'up to 100 users',
      button: 1,
      cssClass: 'app-bg-success-lt-20 app-text-contrast',
      recommend: true,
    },
    {
      type: 'Enterprise',
      price: {},
      features: {
        1: 'Unlimited',
        2: 'Unlimited',
        3: 'Unlimited',
        4: true,
        5: true,
        6: true,
        7: true,
        8: true,
        9: true,
        10: '0,01 $',
        11: '0,02 $',
        12: '1000+ Gigabit',
      },
      use: 'Perfect for giant companies',
      subtitle: 'Everything in Enterprise, plus',
      users: 'more than 100 users',
      button: 2,
      cssClass: 'app-bg-success-lt-10 app-text-contrast',
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  isBoolean(n) {
    return typeof n === 'boolean'
  }

  isString(s) {
    return typeof s === 'string' || s instanceof String
  }

  isInteger(n) {
    return Number.isInteger(n)
  }

  onChange(event) {

  }

}
