import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMenuHeaderComponent } from './app-menu-header.component';

describe('AppMenuHeaderComponent', () => {
  let component: AppMenuHeaderComponent;
  let fixture: ComponentFixture<AppMenuHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMenuHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
