import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutDividedAltComponent } from './app-layout-divided-alt.component';

describe('AppLayoutDividedAltComponent', () => {
  let component: AppLayoutDividedAltComponent;
  let fixture: ComponentFixture<AppLayoutDividedAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutDividedAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutDividedAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
