import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import careers from 'src/mocks/careers';
import { ActivatedRoute } from '@angular/router';

declare let jarallax: any;

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
})
export class CareerComponent implements OnInit {
  careers: Array<any> = careers;
  career: any;
  pageTitle = 'Be AN X-Tender';

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    const careerId = this.route.snapshot.paramMap.get('id');
    this.career = this.careers.find(career => career.id === careerId);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.titleService.setTitle(this.career.title);

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      disableParallax: /iPad|iPhone|iPod|Android/,
    });
  }
}
