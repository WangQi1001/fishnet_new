import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  previousPage(){
    this.router.navigate(['/homepage-new'])
  }

  openNewsDetail(){
    this.router.navigate(['/notifications-news-detail'])
  }

}
