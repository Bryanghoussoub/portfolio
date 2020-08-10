import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationExperienceComponent } from './administration-experience.component';

describe('AdministrationExperienceComponent', () => {
  let component: AdministrationExperienceComponent;
  let fixture: ComponentFixture<AdministrationExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrationExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrationExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
