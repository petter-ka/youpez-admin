import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTransactionsComponent } from './user-transactions.component';

describe('UserTransactionsComponent', () => {
  let component: UserTransactionsComponent;
  let fixture: ComponentFixture<UserTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
