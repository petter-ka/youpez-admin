import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthConfirmationComponent } from './auth-confirmation.component';

describe('AuthConfirmationComponent', () => {
  let component: AuthConfirmationComponent;
  let fixture: ComponentFixture<AuthConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
