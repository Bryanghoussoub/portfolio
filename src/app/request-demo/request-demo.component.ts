import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { demoServices, DemoServices } from 'src/mocks/models';

interface RequestDemoForm {
  fullName: string;
  companyName: string;
  email: string;
  mobileNumber: string;
  interestIn: string;
}

@Component({
  selector: 'app-request-demo',
  templateUrl: './request-demo.component.html',
})
export class RequestDemoComponent implements OnInit {
  form: RequestDemoForm | any;
  services = demoServices;
  pageTitle = 'Request Demo';
  selectedItem: any;

  constructor(private route: ActivatedRoute, private titleService: Title) {
    const interestIn =
      this.route.snapshot.paramMap.get('interest') ||
      DemoServices.ALL_SOLUTIONS;
    this.titleService.setTitle(this.pageTitle);
    this.form = {
      interestIn,
    };

    this.services.forEach(s => {
      s.checked = s.value === interestIn;
    });
  }

  toggleCheck(item: any) {
    item.checked = !item.checked;
    if (item.value === DemoServices.ALL_SOLUTIONS) {
      this.services.forEach(s => (s.checked = item.checked));
    }
    this.selectedItem = item;
    this.form.interestIn = item.value;
  }

  ngOnInit() {}

  submit() {}
}
