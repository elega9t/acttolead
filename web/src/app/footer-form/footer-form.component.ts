import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfigService } from '../config.service';
@Component({
  selector: 'app-footer-form',
  templateUrl: './footer-form.component.html',
  styleUrls: ['./footer-form.component.scss']
})
export class FooterFormComponent implements OnInit {

  contactusForm: FormGroup;
  sending: boolean;

  constructor(private fb: FormBuilder,
    private router: Router, private contactService: ConfigService) { }

  ngOnInit() {
  	    this.contactusForm = this.fb.group({
      'firstName' : [null, Validators.required],
      'email' : [null, Validators.required],
      'subject' : [null, Validators.required],
      'message' : [null, Validators.required]
    });
    this.sending = false;
  }

   sendMessage(formData: NgForm) {
    this.sending = false;
    console.log(formData);
    this.contactService.sendMessage(formData).subscribe(
      data => console.log(data)
    );

    setTimeout(() => {
      this.sending = false;
      //this.cancelForm();
    }, 1000);
  }

}
