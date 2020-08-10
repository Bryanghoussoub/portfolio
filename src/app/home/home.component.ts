import { Component, OnInit } from '@angular/core';
import { companyInfo, googleMapOptions } from 'src/mocks/common';
import { Title } from '@angular/platform-browser';
import { DemoServices, mobileLayers } from 'src/mocks/models';
import { trigger, transition, style, animate } from '@angular/animations';

declare let jarallax: any;
declare let Flickity: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('1s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  DemoServices = DemoServices;
  mobileLayers = mobileLayers;
  mapOptions: any = googleMapOptions;
  companyInfo: any = companyInfo;
  showSection3Desciption = false;
  pageTitle = `X-Tends : Let's Shape the Future of Banking Together`;
  selectedMobileLayer = {
    key: 'smart_assistance',
    value: 'Super Powers',
  };

  constructor(private titleService: Title) {}

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.titleService.setTitle(this.pageTitle);

    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.5,
      disableParallax: /iPad|iPhone|iPod|Android/,
    });

    const flick = new Flickity('.mobile-carousel .carousel', {
      prevNextButtons: false,
      autoPlay: true,
    });

    window.addEventListener('scroll', this.scroll, true);
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = () => {
    const sec3: HTMLElement = document.getElementById('section3');
    this.showSection3Desciption = window.scrollY >= sec3.offsetTop - 300;
    // tslint:disable-next-line: semicolon
  };

  selectMobileLayer(layer: any) {
    this.selectedMobileLayer.key = layer.key.toLowerCase();
    this.selectedMobileLayer.value = layer.value;
    console.log(this.selectedMobileLayer);
  }
}
