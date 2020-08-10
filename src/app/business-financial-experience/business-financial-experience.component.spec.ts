import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFinancialExperienceComponent } from './business-financial-experience.component';

describe('BusinessFinancialExperienceComponent', () => {
  let component: BusinessFinancialExperienceComponent;
  let fixture: ComponentFixture<BusinessFinancialExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFinancialExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFinancialExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
