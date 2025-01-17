import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerComponent } from './career-details.component';

describe('CareerDetailsPageComponent', () => {
  let component: CareerComponent;
  let fixture: ComponentFixture<CareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
