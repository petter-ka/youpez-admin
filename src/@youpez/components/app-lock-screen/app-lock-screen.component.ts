import {Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild} from '@angular/core'

@Component({
  selector: 'youpez-lock-screen',
  templateUrl: './app-lock-screen.component.html',
  styleUrls: ['./app-lock-screen.component.scss']
})
export class AppLockScreenComponent implements OnInit {
  @Output() close = new EventEmitter()

  public loading: boolean = true

  constructor() {
  }

  ngOnInit(): void {

  }

  onClose() {
    this.close.next(true)
  }

}
