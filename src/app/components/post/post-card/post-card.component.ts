import { Component, OnInit, Input, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from 'src/appSettings';
// import { PostCommentCardComponent } from '../post-comment-card/post-comment-card.component';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss'],
})
export class PostCardComponent implements OnInit {


  @Input() post_info;
  private API_ENDPOINT=AppSettings.API_ENDPOINT;
  private POST_ENDPOINT="post-info/";
  private COMMENT_ENDPOINT="comment-info/"
  private comments=[];
  private comment_count=0;
  private comment_collapsed=true;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCommentsPreview();
  }

  async getCommentsPreview(){
    await this.http.get(this.API_ENDPOINT + this.COMMENT_ENDPOINT + "get-post-comments-preview/"+this.post_info["id"]).subscribe(
      data=>{
        console.log(data);
        this.comments=data["data"];
        this.comment_count=this.comments.length;
      },
      error=>{
        console.log(error)
      }
    )
  }

  async getComments(){
    await this.http.get(this.API_ENDPOINT + this.COMMENT_ENDPOINT + "get-post-comments/"+this.post_info["id"]).subscribe(
      data=>{
        console.log(data);
        this.comments=data["data"];
        this.comment_count=this.comments.length;
      },
      error=>{
        console.log(error)
      }
    )
  }

  showAllClicked(){
    this.comment_collapsed=false;
    this.getComments()
  }

}
