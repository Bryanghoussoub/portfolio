import { Component, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DemoServices } from 'src/mocks/models';

declare let jarallax: any;

@Component({
  selector: 'app-digital-branch-experience',
  templateUrl: './digital-branch-experience.component.html',
})
export class DigitalBranchExperienceComponent implements AfterViewInit {
  DemoServices= DemoServices;
  pageTitle = 'Digital Branch Experience';

  constructor(private titleService: Title) {}

  ngAfterViewInit() {
    this.titleService.setTitle(this.pageTitle);

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      disableParallax: /iPad|iPhone|iPod|Android/,
    });
  }
}
