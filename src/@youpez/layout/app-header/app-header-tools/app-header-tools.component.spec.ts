import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderToolsComponent } from './app-header-tools.component';

describe('AppHeaderToolsComponent', () => {
  let component: AppHeaderToolsComponent;
  let fixture: ComponentFixture<AppHeaderToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHeaderToolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
