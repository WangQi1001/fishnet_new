import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-seller',
  templateUrl: './toolbar-seller.component.html',
  styleUrls: ['./toolbar-seller.component.scss'],
})
export class ToolbarSellerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  openHomepage(){
    this.router.navigate(['/seller/homepage'])
  }

  openForum(){
    this.router.navigate(['seller/forum'])
  }

  openChatroom(){
    this.router.navigate(['seller/chatroom'])
  }

  openAddProduct(){
    this.router.navigate(['/product-category'])
  }

  openSellerProfile(){
    this.router.navigate(['seller/profile'])
  }

}
