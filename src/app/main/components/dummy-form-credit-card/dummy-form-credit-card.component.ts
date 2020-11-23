import {Component, OnInit, Input} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {isFormItemValid} from "../../../../@youpez"

@Component({
  selector: 'app-dummy-form-credit-card',
  templateUrl: './dummy-form-credit-card.component.html',
  styleUrls: ['./dummy-form-credit-card.component.scss']
})
export class DummyFormCreditCardComponent implements OnInit {

  @Input() theme: string = 'light'
  @Input() layout: string = 'horizontal'

  public formGroup: FormGroup

  constructor(protected formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      cardNumber: ['', [Validators.required, Validators.minLength(3)]],
      cardHolder: ['', [Validators.required, Validators.minLength(3)]],
      expiration: ['', [Validators.required]],
      cvc: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
    }, {updateOn: 'blur'})
  }

  submit() {
    this.formGroup.markAllAsTouched()
  }

  reset() {
    this.formGroup.reset()
  }

  isValid(name) {
    return isFormItemValid(this.formGroup, name)
  }

  isFormValid() {
    if (!this.formGroup.valid) {
      return false
    }
    return true
  }

  getRowLayout(num) {
    if (this.layout === 'vertical') {
      return '100%'
    }
    return num + '%'
  }
}
