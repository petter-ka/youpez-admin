import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterLeftSidebarTabsComponent } from './starter-left-sidebar-tabs.component';

describe('StarterLeftSidebarTabsComponent', () => {
  let component: StarterLeftSidebarTabsComponent;
  let fixture: ComponentFixture<StarterLeftSidebarTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterLeftSidebarTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterLeftSidebarTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
