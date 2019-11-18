import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-header',
  templateUrl: './new-header.component.html',
  styleUrls: ['./new-header.component.scss']
})
export class NewHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	$('ul.nav li.dropdown').hover(function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
	}, function() {
	  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
	});
  }

}
