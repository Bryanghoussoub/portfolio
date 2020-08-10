import { Component, OnInit } from '@angular/core';
import { copyright, socialMediaLinks } from 'src/mocks/common';
import { footerLinksGroup } from 'src/mocks/menus';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  copyright = copyright;
  socialMediaLinks = socialMediaLinks;
  linksGroup: Array<any> = footerLinksGroup;

  constructor() {}

  ngOnInit() {}
}
