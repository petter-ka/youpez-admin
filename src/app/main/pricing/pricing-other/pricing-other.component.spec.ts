import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingOtherComponent } from './pricing-other.component';

describe('PricingOtherComponent', () => {
  let component: PricingOtherComponent;
  let fixture: ComponentFixture<PricingOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingOtherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
