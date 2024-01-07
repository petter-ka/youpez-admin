import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuItemComponent } from './app-menu-item.component';

describe('AppMenuItemComponent', () => {
  let component: AppMenuItemComponent;
  let fixture: ComponentFixture<AppMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
