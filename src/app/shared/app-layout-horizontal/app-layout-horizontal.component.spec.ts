import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutHorizontalComponent } from './app-layout-horizontal.component';

describe('AppLayoutHorizontalComponent', () => {
  let component: AppLayoutHorizontalComponent;
  let fixture: ComponentFixture<AppLayoutHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
