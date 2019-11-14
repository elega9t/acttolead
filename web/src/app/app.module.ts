import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

import * as $ from 'jquery';

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
    OwlSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
