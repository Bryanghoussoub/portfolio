import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalFinancialSuiteComponent } from './digital-financial-suite.component';

describe('DigitalFinancialPageComponent', () => {
  let component: DigitalFinancialSuiteComponent;
  let fixture: ComponentFixture<DigitalFinancialSuiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalFinancialSuiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalFinancialSuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
