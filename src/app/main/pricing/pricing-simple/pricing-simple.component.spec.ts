import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingSimpleComponent } from './pricing-simple.component';

describe('PricingSimpleComponent', () => {
  let component: PricingSimpleComponent;
  let fixture: ComponentFixture<PricingSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
