import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service/storage.service';
import { AppSettings } from 'src/appSettings';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {
  searchInput: string;
  private api_endpoint=AppSettings.API_ENDPOINT;
  private chats=[];
  constructor(
    private router: Router,
    private storageService: StorageService,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.storageService.get("session_id").then(
      res=>{
        console.log(res);
        this.getChats();
      },
      err=>{
        console.log(err);
        this.router.navigate(['/signin']);
      }
    );
  }

  async enterChatroom(chat) {
    // if (id == "Fishnet") {
    //   await this.router.navigate(['/chatroom-page-two'], {replaceUrl: true});
    // }
    // if (id == "ShopID") {
    //   await this.router.navigate(['/chatroom-page-three'], {replaceUrl: true});
    // }

    this.router.navigate(['/chatroom-page'], {state: {chat: chat}});
    
  }


  // searchInputted(event){
  //   if(this.searchInput!==''){
  //     this.messages = this.messages2.filter(x=> x.id.toLowerCase().includes(this.searchInput.toLowerCase()))
  //   }else{
  //     this.messages = this.messages2;
  //   }
  // }
 
  

  getChats(){
    this.storageService.get("session_id").then(
      res=>{
        // console.log()

        this.http.post(this.api_endpoint+"chat-info/get-chats", JSON.stringify({session_id: res})).subscribe(
          res=>{
            console.log(res);
            this.chats=res["data"];
          },
          err=>{
            console.log(err);
          }
        )
      },
      err=>{
        console.log(err);
      }
    )
  }
}
