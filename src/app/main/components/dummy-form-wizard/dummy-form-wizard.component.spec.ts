import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyFormWizardComponent } from './dummy-form-wizard.component';

describe('DummyFormWizardComponent', () => {
  let component: DummyFormWizardComponent;
  let fixture: ComponentFixture<DummyFormWizardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyFormWizardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyFormWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
