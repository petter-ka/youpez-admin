import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchComponent } from './app-search.component';

describe('AppSearchComponent', () => {
  let component: AppSearchComponent;
  let fixture: ComponentFixture<AppSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
