import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterLeftSidebarHeaderComponent } from './starter-left-sidebar-header.component';

describe('StarterLeftSidebarHeaderComponent', () => {
  let component: StarterLeftSidebarHeaderComponent;
  let fixture: ComponentFixture<StarterLeftSidebarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterLeftSidebarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterLeftSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
