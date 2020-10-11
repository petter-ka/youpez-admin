import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutSidebarComponent } from './layout-sidebar.component';

describe('LayoutSidebarComponent', () => {
  let component: LayoutSidebarComponent;
  let fixture: ComponentFixture<LayoutSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
