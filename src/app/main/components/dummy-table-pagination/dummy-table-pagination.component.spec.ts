import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTablePaginationComponent } from './dummy-table-pagination.component';

describe('DummyTablePaginationComponent', () => {
  let component: DummyTablePaginationComponent;
  let fixture: ComponentFixture<DummyTablePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyTablePaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTablePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
