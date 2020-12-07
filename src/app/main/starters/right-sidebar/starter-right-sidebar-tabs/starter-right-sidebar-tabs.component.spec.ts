import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterRightSidebarTabsComponent } from './starter-right-sidebar-tabs.component';

describe('StarterRightSidebarTabsComponent', () => {
  let component: StarterRightSidebarTabsComponent;
  let fixture: ComponentFixture<StarterRightSidebarTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterRightSidebarTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterRightSidebarTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
