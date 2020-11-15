import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutHeaderComponent } from './app-layout-header.component';

describe('AppLayoutHeaderComponent', () => {
  let component: AppLayoutHeaderComponent;
  let fixture: ComponentFixture<AppLayoutHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
