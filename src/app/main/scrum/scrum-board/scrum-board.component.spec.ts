import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrumBoardComponent } from './scrum-board.component';

describe('ScrumBoardComponent', () => {
  let component: ScrumBoardComponent;
  let fixture: ComponentFixture<ScrumBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrumBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrumBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
