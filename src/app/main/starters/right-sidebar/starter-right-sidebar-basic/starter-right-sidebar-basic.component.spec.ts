import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterRightSidebarBasicComponent } from './starter-right-sidebar-basic.component';

describe('StarterRightSidebarBasicComponent', () => {
  let component: StarterRightSidebarBasicComponent;
  let fixture: ComponentFixture<StarterRightSidebarBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterRightSidebarBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterRightSidebarBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
