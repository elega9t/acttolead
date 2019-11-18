import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
declare var $: any;

@Component({
  selector: 'app-owl-slider',
  templateUrl: './owl-slider.component.html',
  styleUrls: ['./owl-slider.component.scss']
})
export class OwlSliderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
	  	
  }

  ngAfterViewInit() {
  	$(document).ready(function() {

  	});
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    margin:10,
    autoplay:true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }
}
