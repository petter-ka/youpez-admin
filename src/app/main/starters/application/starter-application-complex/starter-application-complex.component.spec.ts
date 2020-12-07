import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterApplicationComplexComponent } from './starter-application-complex.component';

describe('StarterApplicationComplexComponent', () => {
  let component: StarterApplicationComplexComponent;
  let fixture: ComponentFixture<StarterApplicationComplexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterApplicationComplexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterApplicationComplexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
