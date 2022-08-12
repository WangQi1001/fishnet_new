import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.page.html',
  styleUrls: ['./chatroom.page.scss'],
})
export class ChatroomPage implements OnInit {

  searchInput: string;
  messages = [
    {
      "id":"Fishnet",
      "date": "1分鐘前",
      "messageList": [
        {
          "mine": false,
          "content": "請細讀會員注意事項"
        },
        {
          "mine": true,
          "content": "我已經閱讀並同意條款"
        }
      ],
      "numberOfUnreadMessages": 2,
      "iconURL": "../../../assets/icon/message-icon.svg"
    },
    {
      "id":"ShopID",
      "date": "1分鐘前",
      "messageList": [
        {
          "mine": false,
          "content": "This is message"
        },
        {
          "mine": true,
          "content": "This is message"
        }
      ],
      "numberOfUnreadMessages": 2,
      "iconURL": ""
    },
    {
      "id":"ShopID",
      "date": "1分鐘前",
      "messageList": [
        {
          "mine": false,
          "content": "This is message"
        },
        {
          "mine": true,
          "content": "This is message"
        }
      ],
      "numberOfUnreadMessages": 1,
      "iconURL": ""
    },
    {
      "id":"ShopID",
      "date": "1分鐘前",
      "messageList": [
        {
          "mine": false,
          "content": "This is message"
        },
        {
          "mine": true,
          "content": "This is message"
        }
      ],
      "numberOfUnreadMessages": 0,
      "iconURL": ""
    },
    {
      "id":"ShopID",
      "date": "1分鐘前",
      "messageList": [
        {
          "mine": false,
          "content": "This is message"
        },
        {
          "mine": true,
          "content": "This is message"
        }
      ],
      "numberOfUnreadMessages": 0,
      "iconURL": ""
    }
  ];
  messages2 = [
    {
      "id":"Fishnet",
      "date": "1分鐘前",
      "messageList": [
        {
          "mine": false,
          "content": "請細讀會員注意事項"
        },
        {
          "mine": true,
          "content": "我已經閱讀並同意條款"
        }
      ],
      "numberOfUnreadMessages": 2,
      "iconURL": "../../../assets/icon/message-icon.svg"
    },
    {
      "id":"ShopID",
      "date": "1分鐘前",
      "messageList": [
        {
          "mine": false,
          "content": "This is message"
        },
        {
          "mine": true,
          "content": "This is message"
        }
      ],
      "numberOfUnreadMessages": 2,
      "iconURL": ""
    },
    {
      "id":"ShopID",
      "date": "1分鐘前",
      "messageList": [
        {
          "mine": false,
          "content": "This is message"
        },
        {
          "mine": true,
          "content": "This is message"
        }
      ],
      "numberOfUnreadMessages": 1,
      "iconURL": ""
    },
    {
      "id":"ShopID",
      "date": "1分鐘前",
      "messageList": [
        {
          "mine": false,
          "content": "This is message"
        },
        {
          "mine": true,
          "content": "This is message"
        }
      ],
      "numberOfUnreadMessages": 0,
      "iconURL": ""
    },
    {
      "id":"ShopID",
      "date": "1分鐘前",
      "messageList": [
        {
          "mine": false,
          "content": "This is message"
        },
        {
          "mine": true,
          "content": "This is message"
        }
      ],
      "numberOfUnreadMessages": 0,
      "iconURL": ""
    }
  ];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  searchInputted(event){
    if(this.searchInput!==''){
      this.messages = this.messages2.filter(x=> x.id.toLowerCase().includes(this.searchInput.toLowerCase()))
    }else{
      this.messages = this.messages2;
    }
  }

}
