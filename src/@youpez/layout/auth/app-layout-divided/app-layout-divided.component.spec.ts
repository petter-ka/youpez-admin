import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutDividedComponent } from './app-layout-divided.component';

describe('AppLayoutDividedComponent', () => {
  let component: AppLayoutDividedComponent;
  let fixture: ComponentFixture<AppLayoutDividedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutDividedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutDividedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
