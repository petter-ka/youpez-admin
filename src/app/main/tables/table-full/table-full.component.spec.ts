import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFullComponent } from './table-full.component';

describe('TableFullComponent', () => {
  let component: TableFullComponent;
  let fixture: ComponentFixture<TableFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
