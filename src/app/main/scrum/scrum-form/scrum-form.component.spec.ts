import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumFormComponent } from './scrum-form.component';

describe('ScrumFormComponent', () => {
  let component: ScrumFormComponent;
  let fixture: ComponentFixture<ScrumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
