import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTasksComponent } from './app-tasks.component';

describe('AppTasksComponent', () => {
  let component: AppTasksComponent;
  let fixture: ComponentFixture<AppTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppTasksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
