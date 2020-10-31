import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthWelcomeScreenComponent } from './auth-welcome-screen.component';

describe('AuthWelcomeScreenComponent', () => {
  let component: AuthWelcomeScreenComponent;
  let fixture: ComponentFixture<AuthWelcomeScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthWelcomeScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthWelcomeScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
