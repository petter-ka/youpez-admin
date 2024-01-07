import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutDividedFullComponent } from './app-layout-divided-full.component';

describe('AppLayoutDividedFullComponent', () => {
  let component: AppLayoutDividedFullComponent;
  let fixture: ComponentFixture<AppLayoutDividedFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutDividedFullComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutDividedFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
