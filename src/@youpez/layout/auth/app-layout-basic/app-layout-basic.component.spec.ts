import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutBasicComponent } from './app-layout-basic.component';

describe('AppLayoutBasicComponent', () => {
  let component: AppLayoutBasicComponent;
  let fixture: ComponentFixture<AppLayoutBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
