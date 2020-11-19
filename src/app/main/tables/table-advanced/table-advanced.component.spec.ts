import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAdvancedComponent } from './table-advanced.component';

describe('TableAdvancedComponent', () => {
  let component: TableAdvancedComponent;
  let fixture: ComponentFixture<TableAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAdvancedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
