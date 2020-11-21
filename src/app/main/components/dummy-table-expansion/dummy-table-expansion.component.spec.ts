import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTableExpansionComponent } from './dummy-table-expansion.component';

describe('DummyTableExpansionComponent', () => {
  let component: DummyTableExpansionComponent;
  let fixture: ComponentFixture<DummyTableExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyTableExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTableExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
