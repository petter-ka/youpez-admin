import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCreditCardComponent } from './app-credit-card.component';

describe('AppCreditCardComponent', () => {
  let component: AppCreditCardComponent;
  let fixture: ComponentFixture<AppCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
