import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtmExperienceComponent } from './atm-experience.component';

describe('AtmExperienceComponent', () => {
  let component: AtmExperienceComponent;
  let fixture: ComponentFixture<AtmExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtmExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtmExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
