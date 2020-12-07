import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterRightSidebarHeaderComponent } from './starter-right-sidebar-header.component';

describe('StarterRightSidebarHeaderComponent', () => {
  let component: StarterRightSidebarHeaderComponent;
  let fixture: ComponentFixture<StarterRightSidebarHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterRightSidebarHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterRightSidebarHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
