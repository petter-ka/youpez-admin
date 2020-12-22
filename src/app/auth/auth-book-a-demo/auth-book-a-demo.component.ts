import {Component, OnInit, ViewChild} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {NotificationService} from "carbon-components-angular"

import {NgScrollbar} from "ngx-scrollbar"
import {passwordRegex, passwordCheckerHelper, isFormItemValid, numberRegex,} from "../../../@youpez"
import {countriesData,usStatesData} from "../../../@youpez/data/dummy"

@Component({
  selector: 'app-auth-book-a-demo',
  templateUrl: './auth-book-a-demo.component.html',
  styleUrls: ['./auth-book-a-demo.component.scss']
})
export class AuthBookADemoComponent implements OnInit {

  @ViewChild('scrollbar', {static: false}) scrollbar: NgScrollbar

  public formGroup: FormGroup
  public formGroup2: FormGroup
  public formGroup3: FormGroup
  public currentStep: number = 1
  public step1Valid: boolean = false
  public step2Valid: boolean = false
  public step1Loading: boolean = false
  public step2Loading: boolean = false
  public step3Loading: boolean = false
  public countries = countriesData
  public usStates = usStatesData
  public industries = [
    {content: "Software", id: "1"},
    {content: "Marketing", id: "2"},
    {content: "Hardware", id: "3"},
    {content: "IT", id: "4"},
    {content: "AI", id: "5"},
    {content: "Data-science", id: "6"},
  ]
  public storage = [
    {content: "1GB", id: "1"},
    {content: "2GB", id: "2"},
    {content: "3GB", id: "3"},
    {content: "4GB", id: "4"},
    {content: "5GB", id: "5"},
    {content: "6GB", id: "6"},
  ]
  public areaCodes = [
    {content: "+1", id: "1"},
    {content: "+2", id: "2"},
    {content: "+3", id: "3"},
    {content: "+22", id: "4"},
    {content: "+33", id: "5"},
    {content: "+44", id: "6"},
  ]

  constructor(protected formBuilder: FormBuilder,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.createForm1()
    this.createForm2()
    this.createForm3()
  }

  createForm1() {
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      condition: ['', [Validators.requiredTrue]],
    }, {updateOn: 'blur'})
  }

  createForm2() {
    this.formGroup2 = this.formBuilder.group({
      phone: ['', [Validators.required, Validators.minLength(4), Validators.pattern(numberRegex)]],
      area: ['1', [Validators.required]],
      company: ['', [Validators.required, Validators.minLength(4)]],
      job: ['', [Validators.required, Validators.minLength(4)]],
      industry: ['', [Validators.required]],
      storage: ['', [Validators.required]],
    }, {updateOn: 'blur'})
  }

  createForm3() {
    this.formGroup3 = this.formBuilder.group({
      code: ['', [Validators.required, Validators.minLength(7), Validators.pattern(numberRegex)]],
    }, {updateOn: 'blur'})
  }

  onSubmit() {
    this.formGroup.markAllAsTouched()
    if (!this.formGroup.valid) {
      return
    }
    this.step1Loading = true
    setTimeout(() => {
      this.gotoStep(2)
      this.step1Loading = false
      this.step1Valid = true
    }, 2500)
  }

  onSubmit2() {
    this.formGroup2.markAllAsTouched()
    if (!this.formGroup2.valid) {
      return
    }
    this.step2Loading = true
    setTimeout(() => {
      this.gotoStep(3)
      this.step2Loading = false
      this.step2Valid = true
    }, 2500)
  }

  onSubmit3() {
    this.formGroup3.markAllAsTouched()
    this.step3Loading = true

    setTimeout(() => {
      this.gotoStep(3)
      this.step3Loading = false
    }, 2500)
  }

  gotoStep(number) {
    this.currentStep = number
    const element = `#form_${number}`
    setTimeout(() => {
      this.scrollbar.scrollTo({bottom: 0, duration: 400})
    }, 400)
  }

  isValid(name) {
    return isFormItemValid(this.formGroup, name)
  }

  isValid2(name) {
    return isFormItemValid(this.formGroup2, name)
  }

  isValid3(name) {
    return isFormItemValid(this.formGroup3, name)
  }

  getPasswordClass(name, type) {
    const instance = this.formGroup.get(name)
    const test = !passwordCheckerHelper(instance.value, type) && (instance.dirty || instance.touched)
    return test ? 'app-color-danger' : ((instance.dirty || instance.touched) ? 'app-color-success' : '')
  }
}
