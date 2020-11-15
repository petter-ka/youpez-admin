import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLockScreenComponent } from './app-lock-screen.component';

describe('AppLockScreenComponent', () => {
  let component: AppLockScreenComponent;
  let fixture: ComponentFixture<AppLockScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLockScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLockScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
