import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-user-transactions',
  templateUrl: './user-transactions.component.html',
  styleUrls: ['./user-transactions.component.scss']
})
export class UserTransactionsComponent implements OnInit {

  public transactions = [
    {
      number: 'YP-0122',
      title: 'Youpez PREMIUM subscription for 1 month',
      range: '07-01-2020 - 08-01-2020',
      price: '900.00',
      payed: false,
    },
    {
      number: 'YP-0121',
      title: 'Youpez PREMIUM subscription for 1 month',
      range: '07-01-2020 - 08-01-2020',
      price: '900.00',
      payed: true,
    },
    {
      number: 'YP-0120',
      title: 'Youpez PREMIUM subscription for 1 month',
      range: '06-01-2020 - 07-01-2020',
      price: '900.00',
      payed: true,
    },
    {
      number: 'YP-0119',
      title: 'Youpez PREMIUM subscription for 1 month',
      range: '04-01-2020 - 05-01-2020',
      price: '900.00',
      payed: true,
    },
    {
      number: 'YP-0118',
      title: 'Youpez PREMIUM subscription for 1 month',
      range: '03-01-2020 - 04-01-2020',
      price: '900.00',
      payed: true,
    },
    {
      number: 'YP-0117',
      title: 'Youpez PLUS subscription for 1 month',
      range: '02-01-2020 - 03-01-2020',
      price: '300.00',
      payed: true,
    },
    {
      number: 'YP-0116',
      title: 'Youpez TRIAL subscription for 1 month',
      range: '02-01-2020 - 03-01-2020',
      price: '0.00',
      payed: true,
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
