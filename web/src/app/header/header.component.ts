import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Yogesh and Ankit';

    user = {
    name: 'ankit',
    age: 25
  };

	constructor(private translate: TranslateService) {
    	translate.setDefaultLang('en');
  	}

	switchLanguage(language: string) {
	  this.translate.use(language);
	}

  ngOnInit() {
  }

}
