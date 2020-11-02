import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordComponent } from './auth-forgot-password.component';

describe('AuthForgotPasswordComponent', () => {
  let component: AuthForgotPasswordComponent;
  let fixture: ComponentFixture<AuthForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
