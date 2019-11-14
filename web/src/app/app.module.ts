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

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
    OwlSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
