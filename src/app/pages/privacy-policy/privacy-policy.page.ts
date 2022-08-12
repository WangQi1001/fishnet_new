import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.page.html',
  styleUrls: ['./privacy-policy.page.scss'],
})
export class PrivacyPolicyPage implements OnInit {

  constructor(
    private router: Router,
      private location: Location,
      private alertController: AlertController,
      private loadingController: LoadingController,
      private modalController: ModalController,
  ) { }

  ngOnInit() {
  }
  async goBack() {
    await this.router.navigate(['/profile'], {replaceUrl: true});
  }

}
