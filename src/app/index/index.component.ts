import {
  Component,
  OnInit,
  AfterViewInit,
  Directive,
  ChangeDetectorRef,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { indexMenus } from 'src/mocks/menus';
import { Router } from '@angular/router';

declare let Flickity: any;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements AfterViewInit {
  pageTitle = `X-Tends : Let's Shape the Future of Banking Together`;
  menus = indexMenus;
  smallScreen = document.body.clientWidth <= 768;

  constructor(private titleService: Title, private router: Router) {}

  ngAfterViewInit() {
    this.titleService.setTitle(this.pageTitle);
    this.createCarousel();
  }

  createCarousel() {
    const self = this;
    if (this.smallScreen) {
      return;
    }
    const flickity = new Flickity('.carousel', {
      bgLazyLoad: 1,
      contain: true,
      freeScroll: true,
      freeScrollFriction: 0.03,
      prevNextButtons: false,
      pageDots: false,
      on: {
        staticClick(
          event: any,
          pointer: any,
          cellElement: any,
          cellIndex: number
        ) {
          self.navigateByIndex(cellIndex);
        },
      },
    });

    flickity.slider.style.transform = 'translateX(5%)';
  }

  navigateByIndex(index) {
    const menu = this.menus[index];
    this.router.navigate([menu.url]);
  }
}
