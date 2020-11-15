import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutMiniSidebarComponent } from './layout-mini-sidebar.component';

describe('LayoutMiniSidebarComponent', () => {
  let component: LayoutMiniSidebarComponent;
  let fixture: ComponentFixture<LayoutMiniSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutMiniSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutMiniSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
