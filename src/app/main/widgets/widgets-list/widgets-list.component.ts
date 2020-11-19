import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.css']
})
export class WidgetsListComponent implements OnInit {

  public subscriptions = [
    {
      month: 'january',
      count: '-111,333',
      up: false,
    },
    {
      month: 'february',
      count: '233,123',
      up: true,
    },
    {
      month: 'march',
      count: '543,854',
      up: true,
    },
    {
      month: 'april',
      count: '-99,112',
      up: false,
    },
    {
      month: 'may',
      count: '678,112',
      up: true,
    },
    {
      month: 'june',
      count: '891,451',
      up: true,
    }
  ]

  public mails = [
    {
      sep: 'Today'
    },
    {
      attachments: 0,
      flagged: false,
      read: false,
      date: 'Oct 29',
      title: 'Question: using setState to access',
      sender: 'Jone Done',
      content: 'Sed ut perspiciatis unde omnis iste natus\n error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n\n et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      attachments: 1,
      flagged: false,
      read: false,
      date: 'Oct 29',
      title: 'Feedback for \'exhaustive-deps\'',
      sender: 'Feedback Jonas',
      content: 'Sed ut perspiciatis unde omnis iste natus\n error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n\n et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      attachments: 0,
      flagged: true,
      read: true,
      date: 'Oct 29',
      title: 'Misspelled "Escape" event type in Focus.js',
      sender: 'Teklmar Ohma',
      content: 'Sed ut perspiciatis unde omnis iste natus\n error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n\n et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      sep: 'Yesterday'
    },
    {
      attachments: 1,
      flagged: true,
      read: true,
      date: 'Oct 29',
      title: 'Feature Request: Add Warning when',
      sender: 'Harindra Kendar',
      content: 'Sed ut perspiciatis unde omnis iste natus\n error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n\n et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      attachments: 1,
      flagged: false,
      read: true,
      date: 'Oct 29',
      title: 'DOM attribute stringification fixes ',
      sender: 'Dyna Joe',
      content: 'Sed ut perspiciatis unde omnis iste natus\n error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n\n et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      attachments: 1,
      flagged: false,
      read: false,
      date: 'Oct 27',
      title: 'Portal Event Bubbling Use Cases',
      sender: 'Little Tuko',
      content: 'Sed ut perspiciatis unde omnis iste natus\n error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n\n et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
