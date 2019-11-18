import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UniqueCommitmentsComponent } from './unique-commitments/unique-commitments.component';

import { OnlineMarketingComponent } from './online-marketing/online-marketing.component';
import { CorporateEventsComponent } from './corporate-events/corporate-events.component';
import { HrServicesComponent } from './hr-services/hr-services.component';
import { TradingDivisonComponent } from './trading-divison/trading-divison.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'unique-commitments', component: UniqueCommitmentsComponent },
	{ path: 'online-marketing', component: OnlineMarketingComponent },
    { path: 'corporate-events', component: CorporateEventsComponent },
    { path: 'hr-services', component: HrServicesComponent },
    { path: 'trading-divison', component: TradingDivisonComponent },
    { path: 'contact-us', component: ContactUsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
