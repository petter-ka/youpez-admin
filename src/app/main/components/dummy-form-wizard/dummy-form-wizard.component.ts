import {Component, OnInit, Input} from '@angular/core'

@Component({
  selector: 'app-dummy-form-wizard',
  templateUrl: './dummy-form-wizard.component.html',
  styleUrls: ['./dummy-form-wizard.component.scss']
})
export class DummyFormWizardComponent implements OnInit {

  @Input() orientation: string = ''
  @Input() formTheme: string = 'light'
  @Input() formLayout: string = 'horizontal'

  public steps = [
    {
      text: "Billing",
      state: ["current"],
    },
    {
      text: "Credit card",
      state: ["incomplete"],
    },
    {
      text: "Summary",
      state: ["incomplete"],
    },
    {
      text: "Purchase",
      state: ["incomplete"]
    },
  ]
  public current = 0

  constructor() {
  }

  ngOnInit(): void {

  }

  stepSelected(event) {
    this.current = event.index
  }

  onGotoStep(step, valid) {
    if (valid) {
      this.current = step
    }
  }

}
