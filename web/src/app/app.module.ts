import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ConfigService } from './config.service';
//import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ElementComponent } from './element/element.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FooterFormComponent } from './footer-form/footer-form.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { OurClientComponent } from './our-client/our-client.component';
import { OwlSliderComponent } from './owl-slider/owl-slider.component';


import { CarouselModule } from 'ngx-owl-carousel-o';

import * as $ from 'jquery';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NewHeaderComponent } from './new-header/new-header.component';
import { BannerComponent } from './banner/banner.component';
import { UniqueCommitmentsComponent } from './unique-commitments/unique-commitments.component';
import { OnlineMarketingComponent } from './online-marketing/online-marketing.component';
import { CorporateEventsComponent } from './corporate-events/corporate-events.component';
import { HrServicesComponent } from './hr-services/hr-services.component';
import { TradingDivisonComponent } from './trading-divison/trading-divison.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ElementComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    FooterFormComponent,
    SliderComponent,
    HomeComponent,
    OurClientComponent,
    OwlSliderComponent,
    RegisterComponent,
    LoginComponent,
    PortfolioComponent,
    NewHeaderComponent,
    BannerComponent,
    UniqueCommitmentsComponent,
    OnlineMarketingComponent,
    CorporateEventsComponent,
    HrServicesComponent,
    TradingDivisonComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
