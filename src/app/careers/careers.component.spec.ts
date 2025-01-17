import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareersPageComponent } from './careers.component';

describe('CareersPageComponent', () => {
  let component: CareersPageComponent;
  let fixture: ComponentFixture<CareersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
