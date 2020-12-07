import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarterFullWidthTabsComponent } from './starter-full-width-tabs.component';

describe('StarterFullWidthTabsComponent', () => {
  let component: StarterFullWidthTabsComponent;
  let fixture: ComponentFixture<StarterFullWidthTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StarterFullWidthTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StarterFullWidthTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
