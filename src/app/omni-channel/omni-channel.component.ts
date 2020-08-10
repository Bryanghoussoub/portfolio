import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { features } from 'src/mocks/omnichannel';
import { DemoServices } from 'src/mocks/models';

declare let jarallax: any;

@Component({
  selector: 'app-omni-channel',
  templateUrl: './omni-channel.component.html',
})
export class OmniChannelComponent implements AfterViewInit {
  DemoServices = DemoServices;
  pageTitle = 'Omni-Channel';
  features: Array<any> = features;

  constructor(private titleService: Title) {}

  ngAfterViewInit() {
    this.titleService.setTitle(this.pageTitle);

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      disableParallax: /iPad|iPhone|iPod|Android/,
    });
  }
}
