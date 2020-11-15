import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbmIconComponent } from './ibm-icon.component';

describe('IbmIconComponent', () => {
  let component: IbmIconComponent;
  let fixture: ComponentFixture<IbmIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbmIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbmIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
