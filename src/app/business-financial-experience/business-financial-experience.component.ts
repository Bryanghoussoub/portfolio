import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DemoServices } from 'src/mocks/models';

declare let jarallax: any;

@Component({
  selector: 'app-business-financial-experience',
  templateUrl: './business-financial-experience.component.html',
  styles: [],
})
export class BusinessFinancialExperienceComponent implements AfterViewInit {
  DemoServices = DemoServices;
  pageTitle = 'Business Financial Experience';

  constructor(private titleService: Title) {}

  ngAfterViewInit() {
    this.titleService.setTitle(this.pageTitle);

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      disableParallax: /iPad|iPhone|iPod|Android/,
    });
  }
}
