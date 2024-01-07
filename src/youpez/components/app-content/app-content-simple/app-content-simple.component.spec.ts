import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContentSimpleComponent } from './app-content-simple.component';

describe('AppContentSimpleComponent', () => {
  let component: AppContentSimpleComponent;
  let fixture: ComponentFixture<AppContentSimpleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContentSimpleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContentSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
