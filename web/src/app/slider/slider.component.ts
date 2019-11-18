import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }


  ngAfterViewInit() {
  	$(document).ready(function() {
      $('[data-toggle="owlcarousel"], [data-toggle="owl-carousel"]').each(function() {
        var $this = $(this),
        owlCarouselSettings = $this.data('owlcarousel-settings') || {};

        $this.owlCarousel(owlCarouselSettings);
      });
  	});
  }


}
