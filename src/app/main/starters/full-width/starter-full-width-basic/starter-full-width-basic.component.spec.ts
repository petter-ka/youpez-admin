import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterFullWidthBasicComponent } from './starter-full-width-basic.component';

describe('StarterFullWidthBasicComponent', () => {
  let component: StarterFullWidthBasicComponent;
  let fixture: ComponentFixture<StarterFullWidthBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterFullWidthBasicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterFullWidthBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
