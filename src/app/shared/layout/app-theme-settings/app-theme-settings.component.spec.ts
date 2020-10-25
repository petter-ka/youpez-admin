import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppThemeSettingsComponent } from './app-theme-settings.component';

describe('AppThemeSettingsComponent', () => {
  let component: AppThemeSettingsComponent;
  let fixture: ComponentFixture<AppThemeSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppThemeSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppThemeSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
