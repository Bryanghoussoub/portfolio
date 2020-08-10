import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DemoServices } from 'src/mocks/models';

declare let jarallax: any;

@Component({
  selector: 'app-personal-financial-experience',
  templateUrl: './personal-financial-experience.component.html',
})
export class PersonalFinancialExperienceComponent implements AfterViewInit {
  DemoServices = DemoServices;
  pageTitle = 'Our Digital Financial Suite';

  constructor(private titleService: Title) {}

  ngAfterViewInit() {
    this.titleService.setTitle('Personal Financial Experience');

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      disableParallax: /iPad|iPhone|iPod|Android/,
    });
  }
}
