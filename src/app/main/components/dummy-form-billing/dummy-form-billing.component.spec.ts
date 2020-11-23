import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyFormBillingComponent } from './dummy-form-billing.component';

describe('DummyFormBillingComponent', () => {
  let component: DummyFormBillingComponent;
  let fixture: ComponentFixture<DummyFormBillingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyFormBillingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyFormBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
