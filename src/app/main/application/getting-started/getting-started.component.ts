import {Component, OnInit} from '@angular/core'
import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.component.html',
  styleUrls: ['./getting-started.component.css']
})
export class GettingStartedComponent implements OnInit {

  public videos = [
    {
      title: 'App Introduction',
      topic: 'video tutorials',
      url: 'https://www.youtube.com/embed/PH-2FfFD2PU',
      seen: true,
      steps: [
        'Click \'Sign Up\'',
        'Fill the form',
        'Accept terms & condition',
        'Submit form',
        'Check your email',
        'Login to your account',
      ],
      page: 'App authentication',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      title: 'Introduction to Youpez',
      topic: 'app tutorials',
      url: 'https://www.youtube.com/embed/WwQ62OyCNz4',
      seen: true,
      steps: [
        'Click \'Sign Up\'',
        'Fill the form',
        'Accept terms & condition',
        'Submit form',
        'Check your email',
        'Login to your account',
      ],
      page: 'Cloud format',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      title: 'Advanced Topics',
      topic: '5min explanation',
      url: 'https://www.youtube.com/embed/OmphHSaO1sE',
      steps: [
        'Click \'Sign Up\'',
        'Fill the form',
        'Accept terms & condition',
        'Submit form',
        'Check your email',
        'Login to your account',
      ],
      page: 'Dashboard',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      title: 'Packaging and Deploy',
      topic: 'cloud environment',
      url: 'https://www.youtube.com/embed/7rkeORD4jSw',
      steps: [
        'Click \'Sign Up\'',
        'Fill the form',
        'Accept terms & condition',
        'Submit form',
        'Check your email',
        'Login to your account',
      ],
      page: 'Emails',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      title: 'Serverless on Youpez',
      topic: 'statistics',
      url: 'https://www.youtube.com/embed/Bsq5cKkS33I',
      steps: [
        'Click \'Sign Up\'',
        'Fill the form',
        'Accept terms & condition',
        'Submit form',
        'Check your email',
        'Login to your account',
      ],
      page: 'File manager',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    },
    {
      title: 'Youpez administration',
      topic: 'video tutorials',
      url: 'https://www.youtube.com/embed/PH-2FfFD2PU',
      steps: [
        'Click \'Sign Up\'',
        'Fill the form',
        'Accept terms & condition',
        'Submit form',
        'Check your email',
        'Login to your account',
      ],
      page: 'Invoices',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id tincidunt dui. Maecenas elementum eros id imperdiet molestie. Vestibulum semper tempus turpis.',
    }
  ]

  constructor(private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
  }

  getUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
  }

  trackByFn(index, row) {
    return row.title
  }

}
