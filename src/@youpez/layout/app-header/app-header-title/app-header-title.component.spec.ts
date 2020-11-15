import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeaderTitleComponent } from './app-header-title.component';

describe('AppHeaderTitleComponent', () => {
  let component: AppHeaderTitleComponent;
  let fixture: ComponentFixture<AppHeaderTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppHeaderTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
