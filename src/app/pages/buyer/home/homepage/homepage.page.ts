import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertController, LoadingController, ModalController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openHomepage(){
    this.router.navigate(['/homepage']);
  }

  openForum(){
    this.router.navigate(['./forum']);
  }

  openChatroom(){
    this.router.navigate(['/chatroom']);
  }

  openProfile(){
    this.router.navigate(['/profile']);
  }

  openNotification(){
    this.router.navigate(['/notifications']);
  }

  openCategory(){
    this.router.navigate(['/category']);
  }

  openBirdCategory(){
    this.router.navigate(['/bird-category']);
  }

  openFlowerCategory(){
    this.router.navigate(['/flower-category']);
  }

  openInsectCategory(){
    this.router.navigate(['/insect-category']);
  }

  openShoppingCart(){
    this.router.navigate(['/shopping-cart']);
  }


}
