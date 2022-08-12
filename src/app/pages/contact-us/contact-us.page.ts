import { Component,Input, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  message: any;
  form: FormGroup;

  constructor(
      private router: Router,
      private location: Location,
      private formBuilder: FormBuilder,
      private alertController: AlertController,
      private loadingController: LoadingController,
      private modalController: ModalController,
  ) { 
    this.form = formBuilder.group({
      message: ['', Validators.required],
    });
    this.message = this.form.controls.message;
  }

  ngOnInit() {
  }

  sendMessage(){
    //send it to db
  }
  async goBack() {
    await this.router.navigate(['/profile'], {replaceUrl: true});
  }

}
