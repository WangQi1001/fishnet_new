import { Component, OnInit } from '@angular/core';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

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
