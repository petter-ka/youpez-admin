import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterFullWidthHeaderComponent } from './starter-full-width-header.component';

describe('StarterFullWidthHeaderComponent', () => {
  let component: StarterFullWidthHeaderComponent;
  let fixture: ComponentFixture<StarterFullWidthHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterFullWidthHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterFullWidthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
