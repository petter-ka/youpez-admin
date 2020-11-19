import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsValidationComponent } from './forms-validation.component';

describe('FormsValidationComponent', () => {
  let component: FormsValidationComponent;
  let fixture: ComponentFixture<FormsValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
