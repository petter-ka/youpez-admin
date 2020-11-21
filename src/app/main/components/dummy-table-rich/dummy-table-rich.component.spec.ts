import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTableRichComponent } from './dummy-table-rich.component';

describe('DummyTableRichComponent', () => {
  let component: DummyTableRichComponent;
  let fixture: ComponentFixture<DummyTableRichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyTableRichComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTableRichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
