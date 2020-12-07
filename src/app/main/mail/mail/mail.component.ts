import {Component, OnInit} from '@angular/core'
import {MailService} from "../mail.service"

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

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
    {
      attachments: 0,
      flagged: true,
      read: true,
      date: 'Oct 26',
      title: 'Memory leak after component unload',
      sender: 'Hembar Intez',
      content: 'Sed ut perspiciatis unde omnis iste natus\n error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n\n et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      sep: 'Monday'
    },
    {
      attachments: 1,
      flagged: false,
      read: true,
      date: 'Oct 29',
      title: 'Bug: missing interactions in profiler',
      sender: 'Kendal Imba',
      content: 'Sed ut perspiciatis unde omnis iste natus\n error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n\n et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      attachments: 1,
      flagged: false,
      read: false,
      date: 'Oct 27',
      title: 'Jest: Cannot assign to read only property',
      sender: 'Teuja Kitt',
      content: 'Sed ut perspiciatis unde omnis iste natus\n error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n\n et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
    {
      attachments: 0,
      flagged: true,
      read: true,
      date: 'Oct 26',
      title: 'Batching makes it difficult',
      sender: 'McDona Bill',
      content: 'Sed ut perspiciatis unde omnis iste natus\n error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis\n\n et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,\n sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
    },
  ]

  public selectedMail: any = null
  public sidebarVisible: boolean = true

  constructor(private mailService: MailService) {
  }

  ngOnInit(): void {
    this.selectedMail = this.mails[1]
  }

  onSelect(mail: any) {
    mail.read = true
    this.selectedMail = mail
  }

  onToggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible
  }

  onCompose() {
    this.mailService.open(null).afterClosed().subscribe(() => {

    })
  }

}
