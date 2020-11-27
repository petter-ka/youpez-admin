import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumViewComponent } from './scrum-view.component';

describe('ScrumViewComponent', () => {
  let component: ScrumViewComponent;
  let fixture: ComponentFixture<ScrumViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
