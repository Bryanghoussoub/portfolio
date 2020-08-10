import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DemoServices } from 'src/mocks/models';

declare let jarallax: any;
@Component({
  selector: 'app-atm-experience',
  templateUrl: './atm-experience.component.html',
  styles: [],
})
export class AtmExperienceComponent implements AfterViewInit {
  DemoServices = DemoServices;
  pageTitle = 'Our Digital Financial Suite';

  constructor(private titleService: Title) {}

  ngAfterViewInit() {
    this.titleService.setTitle('ATM Experience');

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      disableParallax: /iPad|iPhone|iPod|Android/,
    });
  }
}
