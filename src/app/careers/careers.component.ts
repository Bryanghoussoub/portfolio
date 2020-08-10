import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import careers from 'src/mocks/careers';

declare let jarallax: any;

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
})
export class CareersPageComponent implements AfterViewInit {
  pageTitle = 'Be AN X-Tender';
  careers: Array<any> = careers;

  constructor(private titleService: Title) {}

  ngAfterViewInit() {
    this.titleService.setTitle(this.pageTitle);

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      disableParallax: /iPad|iPhone|iPod|Android/,
    });
  }
}
