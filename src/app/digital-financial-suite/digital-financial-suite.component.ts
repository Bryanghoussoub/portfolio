import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DemoServices } from 'src/mocks/models';

declare let jarallax: any;

@Component({
  selector: 'app-digital-financial-suite',
  templateUrl: './digital-financial-suite.component.html',
  styles: [],
})
export class DigitalFinancialSuiteComponent implements AfterViewInit {
  DemoServices = DemoServices;
  pageTitle = 'Our Digital Financial Suite';

  constructor(private titleService: Title) {}

  ngAfterViewInit() {
    this.titleService.setTitle(this.pageTitle);

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      disableParallax: /iPad|iPhone|iPod|Android/,
    });
  }
}
