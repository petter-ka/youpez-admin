import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingModernComponent } from './pricing-modern.component';

describe('PricingModernComponent', () => {
  let component: PricingModernComponent;
  let fixture: ComponentFixture<PricingModernComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingModernComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingModernComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
