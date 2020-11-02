import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthBookADemoComponent } from './auth-book-a-demo.component';

describe('AuthBookADemoComponent', () => {
  let component: AuthBookADemoComponent;
  let fixture: ComponentFixture<AuthBookADemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthBookADemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthBookADemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
