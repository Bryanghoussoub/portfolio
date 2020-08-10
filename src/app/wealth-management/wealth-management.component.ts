import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DemoServices } from 'src/mocks/models';

declare let jarallax: any;

@Component({
  selector: 'app-wealth-management',
  templateUrl: './wealth-management.component.html',
})
export class WealthManagementComponent implements AfterViewInit {
  DemoServices = DemoServices;
  pageTitle = 'The Wealth Management Experience';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.pageTitle);
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      disableParallax: /iPad|iPhone|iPod|Android/,
    });
  }
}
