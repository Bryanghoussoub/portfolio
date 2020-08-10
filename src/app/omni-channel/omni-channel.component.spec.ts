import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OmniChannelComponent } from './omni-channel.component';

describe('OmnichannelPageComponent', () => {
  let component: OmniChannelComponent;
  let fixture: ComponentFixture<OmniChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmniChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmniChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
