import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsAdvancedComponent } from './forms-advanced.component';

describe('FormsAdvancedComponent', () => {
  let component: FormsAdvancedComponent;
  let fixture: ComponentFixture<FormsAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
