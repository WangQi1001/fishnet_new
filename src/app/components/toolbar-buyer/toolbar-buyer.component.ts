import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar-buyer',
  templateUrl: './toolbar-buyer.component.html',
  styleUrls: ['./toolbar-buyer.component.scss'],
})
export class ToolbarBuyerComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {}

  async openHomepage(){
    //this.router.navigate(['/homepage-new'])
    await this.router.navigate(['/homepage-new'], {replaceUrl: true});
  }

  async openForum(){
    //this.router.navigate(['./forum'])
    await this.router.navigate(['/forum'], {replaceUrl: true});
  }

  async openChatroom(){
    //this.router.navigate(['/chatroom'])
    await this.router.navigate(['/chatroom'], {replaceUrl: true});
  }

  async openShoppingCart(){
    //this.router.navigate(['/shopping-cart'])
    await this.router.navigate(['/shopping-cart'], {replaceUrl: true});
  }

  async openProfile(){
    //this.router.navigate(['/profile'])
    await this.router.navigate(['/profile'], {replaceUrl: true});
  }

}
