import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderAllComponent } from './slider-all.component';

describe('SliderAllComponent', () => {
  let component: SliderAllComponent;
  let fixture: ComponentFixture<SliderAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
