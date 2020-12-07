import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterLeftSidebarBasicComponent } from './starter-left-sidebar-basic.component';

describe('StarterLeftSidebarBasicComponent', () => {
  let component: StarterLeftSidebarBasicComponent;
  let fixture: ComponentFixture<StarterLeftSidebarBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterLeftSidebarBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterLeftSidebarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
