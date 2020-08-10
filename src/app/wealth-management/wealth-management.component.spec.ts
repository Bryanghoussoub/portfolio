import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthManagementComponent } from './wealth-management.component';

describe('WealthManagementPageComponent', () => {
  let component: WealthManagementComponent;
  let fixture: ComponentFixture<WealthManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WealthManagementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
