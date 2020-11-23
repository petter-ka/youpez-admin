import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyFormCreditCardComponent } from './dummy-form-credit-card.component';

describe('DummyFormCreditCardComponent', () => {
  let component: DummyFormCreditCardComponent;
  let fixture: ComponentFixture<DummyFormCreditCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyFormCreditCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyFormCreditCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
