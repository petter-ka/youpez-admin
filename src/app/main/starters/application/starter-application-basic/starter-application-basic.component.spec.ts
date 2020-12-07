import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterApplicationBasicComponent } from './starter-application-basic.component';

describe('StarterApplicationBasicComponent', () => {
  let component: StarterApplicationBasicComponent;
  let fixture: ComponentFixture<StarterApplicationBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterApplicationBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterApplicationBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
