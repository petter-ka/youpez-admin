import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTableAdvancedComponent } from './dummy-table-advanced.component';

describe('DummyTableAdvancedComponent', () => {
  let component: DummyTableAdvancedComponent;
  let fixture: ComponentFixture<DummyTableAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyTableAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTableAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
