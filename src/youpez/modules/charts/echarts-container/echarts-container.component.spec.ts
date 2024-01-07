import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsContainerComponent } from './echarts-container.component';

describe('EchartsContainerComponent', () => {
  let component: EchartsContainerComponent;
  let fixture: ComponentFixture<EchartsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
