import { Component } from '@angular/core';
import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  template: '<router-outlet (activate)="onActivate()"></router-outlet>',
})
export class AppComponent {
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string
  ) {}

  onActivate() {
    this.makeChangeBaseOnRoute(this.router.url);

    if (isPlatformBrowser(this.platformId)) {
      // window.scrollTo(0, 0);
      const scrollToTop = window.setInterval(() => {
          const pos = window.pageYOffset;
          if (pos > 0) {
            window.scrollTo(0, pos - 40);
          } else {
            window.clearInterval(scrollToTop);
          }
        }, 16);
    }
  }

  makeChangeBaseOnRoute(url: string) {
    switch (url) {
      case '/index':
        document.body.style.backgroundColor = '#f5f5f5';
        break;
      default:
        document.body.style.backgroundColor = '#ffffff';
    }
  }
}
