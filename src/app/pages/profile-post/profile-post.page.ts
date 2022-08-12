import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StorageService } from 'src/app/services/storage-service/storage.service';
import { AppSettings } from 'src/appSettings';

@Component({
  selector: 'app-profile-payment',
  templateUrl: './profile-post.page.html',
  styleUrls: ['./profile-post.page.scss'],
})
export class ProfilePostPage implements OnInit {
  private posts=[];
  private API_ENDPOINT=AppSettings.API_ENDPOINT;
  constructor(
      private router: Router,
      private http: HttpClient,
      private storageService: StorageService
  ) { }

  ngOnInit() {
    this.getUserPosts();
  }

  async getUserPosts(){
    this.storageService.get("session_id").then(
      (result)=>{
        this.http.get(this.API_ENDPOINT)
      }
    )
    await this.http.get(this.API_ENDPOINT+"post-info/user-posts").subscribe(
      data=>{
        console.log(data);
        this.posts=data["data"];
      },
      error=>{
        console.log(error);
      }
    )
  }
  async goBack() {
    await this.router.navigate(['/profile'], {replaceUrl: true});
  }
}
