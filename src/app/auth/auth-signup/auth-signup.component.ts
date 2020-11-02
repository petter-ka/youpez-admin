import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from "@angular/forms"
import {Router} from "@angular/router"
import {NotificationService} from "carbon-components-angular"

@Component({
  selector: 'app-auth-signup',
  templateUrl: './auth-signup.component.html',
  styleUrls: ['./auth-signup.component.scss']
})
export class AuthSignupComponent implements OnInit {

  public formGroup: FormGroup

  constructor(protected formBuilder: FormBuilder,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      firstName: ['', [Validators.required,]],
      lastName: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      condition: [true],
    }, {updateOn: 'blur'})
  }

  onSubmit() {
    this.formGroup.markAllAsTouched()
    /*this.router.navigate(['/app'])
    this.notificationService.showToast({
      type: "info",
      title: "Sample toast",
      subtitle: "Sample subtitle message",
      caption: "Sample caption",
      target: "body",
      message: "message",
      duration: 2000,
    })*/
  }

  isValid(name) {
    const instance = this.formGroup.get(name)
    return instance.invalid && (instance.dirty || instance.touched)
  }

}
