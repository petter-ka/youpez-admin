import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsGeneralComponent } from './widgets-general.component';

describe('WidgetsGeneralComponent', () => {
  let component: WidgetsGeneralComponent;
  let fixture: ComponentFixture<WidgetsGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetsGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
