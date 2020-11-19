import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsWizardComponent } from './forms-wizard.component';

describe('FormsWizardComponent', () => {
  let component: FormsWizardComponent;
  let fixture: ComponentFixture<FormsWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
