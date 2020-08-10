import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalBranchExperienceComponent } from './digital-branch-experience.component';

describe('DigitalBranchPageComponent', () => {
  let component: DigitalBranchExperienceComponent;
  let fixture: ComponentFixture<DigitalBranchExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalBranchExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalBranchExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
