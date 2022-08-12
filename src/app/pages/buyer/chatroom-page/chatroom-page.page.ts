import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage-service/storage.service';
import { AppSettings } from 'src/appSettings';
// import {Firebase} from "@awesome-cordova-plugins/firebase/ngx"


// for notification and real-time message displaying
import {Platform} from '@ionic/angular';
import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic";


@Component({
  selector: 'app-chatroom-page',
  templateUrl: './chatroom-page.page.html',
  styleUrls: ['./chatroom-page.page.scss'],
})
export class ChatroomPagePage implements OnInit, AfterViewChecked {
  @ViewChild("chatScroll") private chatScroll: ElementRef;
  @ViewChild("myScroll") private myScroll: ElementRef;

  private chat_id;
  private chat;
  private api_url=AppSettings.API_ENDPOINT
  private messages;
  private newMsg;
  constructor(
    private router: Router,
    private http: HttpClient,
    private storageService: StorageService,
    private platform: Platform
    // private firebase: Firebase
  ) { 
    this.registerChat();
  }

  ngOnInit() {
    this.chat_id=this.router.getCurrentNavigation().extras.state.chat.id;
    this.chat=this.router.getCurrentNavigation().extras.state.chat;
    this.loadMessages(this.chat_id);
    // this.scrollToBottom();
    // this.scrollToBottom("auto");
  }
  ionViewDidEnter(){
    this.scrollToBottom("auto");
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom("smooth");
  }
  
  loadMessages(id){
    this.storageService.get("session_id").then(
      data=>{
        // console.log({session_id: data, chat_id: id});
        this.http.post(this.api_url+"chat-info/get-chat", JSON.stringify({session_id: data, chat_id: id})).subscribe(
          data=>{
            let messages=data["data"];
            // console.log(messages);
            messages.sort((a, b)=>{
              return new Date(a.datetime) >new Date(b.datetime) ? 1 : -1; 
            })
            this.messages=data["data"];
            this.messages=messages;
          }
        )

      }
    )
  }

  sendMessage(id){
    const date = new Date();
    const day=date.toLocaleDateString("en-HK");
    const day_formatted=day.split("/").reverse().join("-");
    const time=date.toLocaleTimeString("it-IT");

    const datetime=day_formatted+" "+time;

    
    // console.log
    
    this.storageService.get("session_id").then(
      data=>{
        console.log(this.chat);
        console.log({session_id: data, message: this.newMsg, chat_id:this.chat_id, datetime: datetime, r1_id: this.chat.r1_id, r2_id: this.chat.r2_id});
        this.http.post(this.api_url+"chat-info/send-message", JSON.stringify({session_id: data, message: this.newMsg, chat_id:this.chat_id, datetime: datetime, r1_id: this.chat.r1_id, r2_id: this.chat.r2_id})).subscribe(
          data=>{
            console.log(data)
            this.messages.push({
              id: 0,
              chat_id: id,
              message: this.newMsg,
              sender_id:0,
              datetime: datetime,
              read: "0",
              if_sender: "1"
            })
            this.newMsg="";
          },
          err=>{
            console.log(err)
          }
        );
        
      },
      err=>{
        console.log(err);
      }
    )
  }

  registerChat() {
    this.platform.ready().then(() => {
      console.log("Hello the platform is ready");
      FCM.getToken().then(token => {
        // console.log(token);
      }, error => { console.log(error) });
      FCM.onNotification().subscribe(data => {
        // console.log(data);
        if (!data.wasTapped) {
          if(data.title==='chat-message'){
            var message=JSON.parse(data.body)
            message["chat_id"]="0",
            message["if_sender"]="0",
            message["read"]="0",
            message["sender_id"]="0",
            message["id"]="0"
            // console.log(message);
            this.messages.push(message);
          }
        } 
      });      
      // // refresh the FCM token
      // this.fcm.onTokenRefresh().subscribe(token => {
      //   console.log(token);
      // });
      // unsubscribe from a topic
      // this.fcm.unsubscribeFromTopic('offers');
      // ff1b71aed29386430169d9b663433c8d munim
      // 48ae454d622ed4ef9f54dd5016059a1b james
    });
  }
  // pushNotif(){

  //   this.firebase.getToken()
  //   .then(token => console.log(`The token is ${token}`)) // save the token server-side and use it to push notifications to this device
  //   .catch(error => console.error('Error getting token', error));

  //   this.firebase.onNotificationOpen()
  //  .subscribe(data => console.log(`User opened a notification ${data}`));

  //  this.firebase.onTokenRefresh()
  // .subscribe((token: string) => console.log(`Got a new token ${token}`));
  // }

  scrollToBottom(mode: String): void{
    // this.scrollToBottom();
    try {
      // console.log(this.chatScroll.nativeElement.scrollTop);
      // console.log(this.chatScroll.nativeElement.scrollHeight);
      // this.chatScroll.nativeElement.scrollTop=200;
      // console.log("scrolltop"+ this.chatScroll.nativeElement.scrollTop);
      this.myScroll.nativeElement.scrollIntoView({ behavior: mode, block: "start" });

    } catch (err){
      console.log(err);
    }
  }

  goBack(){
    this.router.navigate(["/chatroom"]);
  }

}
