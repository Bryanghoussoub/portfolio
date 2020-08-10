import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalFinancialExperienceComponent } from './personal-financial-experience.component';

describe('PersonalFinancialPageComponent', () => {
  let component: PersonalFinancialExperienceComponent;
  let fixture: ComponentFixture<PersonalFinancialExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalFinancialExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalFinancialExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
