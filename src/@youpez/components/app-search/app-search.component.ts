import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core'

@Component({
  selector: 'youpez-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit, AfterViewInit {

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.onClose()
    }
  }

  @ViewChild('searchElement') searchElement: ElementRef
  @Output() close = new EventEmitter()

  public loading: boolean = true

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.searchElement.nativeElement.focus()
    }, 200)
    setTimeout(() => {
      this.loading = false
    }, 700)
  }

  onClose() {
    this.close.next(true)
  }

}
