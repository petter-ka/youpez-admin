import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailComposeComponent } from './mail-compose.component';

describe('MailComposeComponent', () => {
  let component: MailComposeComponent;
  let fixture: ComponentFixture<MailComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailComposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
