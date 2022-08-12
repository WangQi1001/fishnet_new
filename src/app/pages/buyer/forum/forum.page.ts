import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AppSettings } from 'src/appSettings';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.page.html',
  styleUrls: ['./forum.page.scss'],
})
export class ForumPage implements OnInit {
  private api_url = AppSettings.API_ENDPOINT;

  private post_url="post-info/";
  private comment_url="comment-info/";
  private posts=[];

  constructor(
    private router: Router,
    private http: HttpClient,
    // private searchResultService: SearchResultService
  ) { }

  ngOnInit() {
    // const userSession = localStorage.getItem('user_session');
    // if (userSession === undefined || userSession == null) {
    //   this.router.navigate(['/signin']);
    // }
    this.getAllPosts();
  }

  async getAllPosts(){
    await this.http.get(this.api_url + this.post_url + "all-posts").subscribe(
      data => {
        // console.log(data);
        for (var i of data["data"]){
          let media = JSON.parse(i.media.replace(/'/g, '"'));
          i.media = media;
          // console.log(media);
          this.posts.push(i);
        }
      },
      error => console.log(error)
    )
  }


}
