import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-pricing-modern',
  templateUrl: './pricing-modern.component.html',
  styleUrls: ['./pricing-modern.component.scss']
})
export class PricingModernComponent implements OnInit {

  public period: number = 12

  public packages = [
    {
      type: 'business',
      price: {
        1: 100,
        12: 80,
      },
      features: [
        '5 projects',
        '15 storage',
        'API access',
        'Free download',
        'Basic support',
      ],
      use: 'Perfect for small / medium companies',
      subtitle: 'All core features, including:',
      users: 'up to 10 users',
      button: 1,
      cssClass: 'app-bg-success-lt-30 app-text-contrast',
    },
    {
      type: 'premium',
      price: {
        1: 300,
        12: 250,
      },
      features: [
        'Unlimited projects',
        'Unlimited storage',
        'Custom logo',
        'Private cloud',
        'Advanced support',
      ],
      use: 'Perfect for big companies',
      subtitle: 'Everything in Business, plus',
      users: 'up to 100 users',
      button: 1,
      cssClass: 'app-bg-success-lt-20 app-text-contrast',
      recommend: true,
    },
    {
      type: 'enterprise',
      price: {},
      features: [
        'Kubernetes support',
        'Hadoop connection',
        '3rd party integrations',
        '24/7 support',
        'On-premise',
      ],
      use: 'Perfect for giant companies',
      subtitle: 'Everything in Premium, plus',
      users: 'more than 100 users',
      button: 2,
      cssClass: 'app-bg-success-lt-10 app-text-contrast',
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

  onChange(event) {
    if (event.checked) {
      this.period = 12
    }
    else {
      this.period = 1
    }
  }

}
