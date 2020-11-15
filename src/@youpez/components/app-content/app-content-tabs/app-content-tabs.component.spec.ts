import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentTabsComponent } from './app-content-tabs.component';

describe('AppContentTabsComponent', () => {
  let component: AppContentTabsComponent;
  let fixture: ComponentFixture<AppContentTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContentTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContentTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
