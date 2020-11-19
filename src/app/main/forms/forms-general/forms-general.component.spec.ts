import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsGeneralComponent } from './forms-general.component';

describe('FormsGeneralComponent', () => {
  let component: FormsGeneralComponent;
  let fixture: ComponentFixture<FormsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
