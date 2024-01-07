import {Component, Input, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {isFormItemValid} from "../../../../@youpez"
import {countriesData, usStatesData} from "../../../../@youpez/data/dummy"

@Component({
  selector: 'app-dummy-form-billing',
  templateUrl: './dummy-form-billing.component.html',
  styleUrls: ['./dummy-form-billing.component.scss']
})
export class DummyFormBillingComponent implements OnInit {

  @Input() theme: string = 'light'
  @Input() layout: string = 'horizontal'

  public countries = countriesData
  public usStates = usStatesData

  public formGroup: FormGroup

  constructor(protected formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      country: ['', [Validators.required, Validators.minLength(3)]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      city: ['', [Validators.required]],
      street: ['', [Validators.required]],
      personal: [true, [Validators.required]],
      condition: ['', [Validators.requiredTrue]],
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
