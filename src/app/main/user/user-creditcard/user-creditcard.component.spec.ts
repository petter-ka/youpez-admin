import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreditcardComponent } from './user-creditcard.component';

describe('UserCreditcardComponent', () => {
  let component: UserCreditcardComponent;
  let fixture: ComponentFixture<UserCreditcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCreditcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCreditcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
