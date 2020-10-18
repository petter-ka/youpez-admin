import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCryptoComponent } from './dashboard-crypto.component';

describe('DashboardCryptoComponent', () => {
  let component: DashboardCryptoComponent;
  let fixture: ComponentFixture<DashboardCryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardCryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
