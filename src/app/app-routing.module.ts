import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WealthManagementComponent } from './wealth-management/wealth-management.component';
import { DigitalFinancialSuiteComponent } from './digital-financial-suite/digital-financial-suite.component';
import { CareersPageComponent } from './careers/careers.component';
import { CareerComponent } from './career-details/career-details.component';
import { OmniChannelComponent } from './omni-channel/omni-channel.component';
import { PersonalFinancialExperienceComponent } from './personal-financial-experience/personal-financial-experience.component';
import { DigitalBranchExperienceComponent } from './digital-branch-experience/digital-branch-experience.component';
import { AtmExperienceComponent } from './atm-experience/atm-experience.component';
import { BusinessFinancialExperienceComponent } from './business-financial-experience/business-financial-experience.component';
import { AdministrationExperienceComponent } from './administration-experience/administration-experience.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { IndexComponent } from './index/index.component';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'wealth-management',
    component: WealthManagementComponent,
  },
  {
    path: 'digital-financial-suite',
    component: DigitalFinancialSuiteComponent,
  },
  {
    path: 'omni-channel',
    component: OmniChannelComponent,
  },
  {
    path: 'administration-experience',
    component: AdministrationExperienceComponent,
  },
  {
    path: 'digital-branch-experience',
    component: DigitalBranchExperienceComponent,
  },
  {
    path: 'personal-financial-experience',
    component: PersonalFinancialExperienceComponent,
  },
  {
    path: 'business-financial-experience',
    component: BusinessFinancialExperienceComponent,
  },
  {
    path: 'atm-experience',
    component: AtmExperienceComponent,
  },
  {
    path: 'request-demo',
    component: RequestDemoComponent,
  },
  {
    path: 'careers',
    component: CareersPageComponent,
  },
  {
    path: 'get-in-touch',
    component: GetInTouchComponent,
  },
  {
    path: 'careers/:id',
    component: CareerComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
