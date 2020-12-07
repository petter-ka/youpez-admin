import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterApplicationAdvancedComponent } from './starter-application-advanced.component';

describe('StarterApplicationAdvancedComponent', () => {
  let component: StarterApplicationAdvancedComponent;
  let fixture: ComponentFixture<StarterApplicationAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterApplicationAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterApplicationAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
