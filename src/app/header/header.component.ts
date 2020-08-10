import { Component, OnInit, Input } from '@angular/core';
import { socialMediaLinks } from 'src/mocks/common';
import { Router } from '@angular/router';

enum LogoType {
  DEFAULT = 'default',
  WHITE = 'white',
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() logoType: LogoType = LogoType.DEFAULT;
  @Input() buttonClass: string;
  @Input() mediaLinksClass = 'btn-outline-dark';
  @Input() pageTitle: string;
  @Input() showMediaLinks = true;
  @Input() showMiddlePic = true;
  @Input() isOpen = false;

  socialMediaLinks = socialMediaLinks;

  constructor(private router: Router) {}

  ngOnInit() {}

  toggleMenu() {
    if (!this.isOpen) {
      this.router.navigate(['/index']);
      return;
    }
    if (!window.history.length || window.history.length < 3) {
      this.router.navigate(['/home']);
      return;
    }
    window.history.back();
  }
}
