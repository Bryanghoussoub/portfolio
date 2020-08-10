import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { demoServices, DemoServices } from 'src/mocks/models';
import { companyInfo, googleMapOptions } from 'src/mocks/common';

interface RequestDemoForm {
  fullName: string;
  companyName: string;
  email: string;
  mobileNumber: string;
  interestIn: string;
  message: string;
}

@Component({
  selector: 'app-get-in-touch',
  templateUrl: './get-in-touch.component.html',
})
export class GetInTouchComponent implements OnInit {
  form: RequestDemoForm | any;
  services = demoServices;
  pageTitle = 'Get in touch';
  mapOptions: any = googleMapOptions;
  companyInfo: any = companyInfo;

  constructor(private route: ActivatedRoute, private titleService: Title) {
    this.titleService.setTitle(this.pageTitle);
    this.form = {};
  }

  toggleCheck(item: any) {
    item.checked = !item.checked;
    if (item.value === DemoServices.ALL_SOLUTIONS) {
      this.services.forEach(s => (s.checked = item.checked));
    }
  }

  ngOnInit() {}

  submit() {}
}
