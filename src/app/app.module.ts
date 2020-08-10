import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WealthManagementComponent } from './wealth-management/wealth-management.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DigitalFinancialSuiteComponent } from './digital-financial-suite/digital-financial-suite.component';
import { AgmCoreModule } from '@agm/core';
import { CareersPageComponent } from './careers/careers.component';
import { CareerComponent } from './career-details/career-details.component';
import { OmniChannelComponent } from './omni-channel/omni-channel.component';
import { PersonalFinancialExperienceComponent } from './personal-financial-experience/personal-financial-experience.component';
import { DigitalBranchExperienceComponent } from './digital-branch-experience/digital-branch-experience.component';
import { BusinessFinancialExperienceComponent } from './business-financial-experience/business-financial-experience.component';
import { AtmExperienceComponent } from './atm-experience/atm-experience.component';
import { AdministrationExperienceComponent } from './administration-experience/administration-experience.component';
import { RequestDemoComponent } from './request-demo/request-demo.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';
import { VisiblePipe } from './pipes/visible.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WealthManagementComponent,
    HeaderComponent,
    FooterComponent,
    DigitalFinancialSuiteComponent,
    CareersPageComponent,
    CareerComponent,
    OmniChannelComponent,
    PersonalFinancialExperienceComponent,
    DigitalBranchExperienceComponent,
    BusinessFinancialExperienceComponent,
    AtmExperienceComponent,
    AdministrationExperienceComponent,
    RequestDemoComponent,
    IndexComponent,
    VisiblePipe,
    GetInTouchComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCnuxYSvtVrxsEMSKEfq6dNuTkpS1De-t0',
    }),
    AppRoutingModule,
    FormsModule,
    NgbDropdownModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
