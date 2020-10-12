import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDefaultComponent } from './dashboard-default.component';

describe('DashboardDefaultComponent', () => {
  let component: DashboardDefaultComponent;
  let fixture: ComponentFixture<DashboardDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
