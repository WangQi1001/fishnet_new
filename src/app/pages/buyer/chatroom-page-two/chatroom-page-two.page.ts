import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatroom-page-two',
  templateUrl: './chatroom-page-two.page.html',
  styleUrls: ['./chatroom-page-two.page.scss'],
})
export class ChatroomPageTwoPage implements OnInit {

  addButtonActivated: boolean = false;
  messages = [
    {
      "id":"Fishnet",
      "time": "12:31",
      "message": "請細讀會員注意事項"
    },
    {
      "id":"Fishnet",
      "time": "12:31",
      "message": "會員注意事項\n．你是否已準備好照顧寵物的一生？\n -水生生物並非容易飼養，請購買飼養前應對該生物有一定認知\n．「魚網」無法對所有資訊作出驗證，或保證它們完整、正確，也無法對任何錯誤，服務中斷現象，不準確或帶誤導成分或不屬實的資訊或隱瞞資訊等行為負責。\n．「魚網」僅為買賣雙方之間的中間人，且「魚網」不是擔任買賣過程中任何一方的代理人。\n．在本平台購物與你到實體店購買近乎無異\n．本平台合作商戶都承諾不會出售任何有明顯損傷或疾病的生物\n．水生生物可能會無任何先兆的情況下死亡，原因可能包括運輸的不適應，壓力，酸鹼度，溫度，水質，新環境的轉變······等等\n．本平台備有討論區及聊天功能，任何發言請保持禮貌\n．價格會受到來源地，狀態，大小，顏色等等因素而影響。相同品種的價格亦可以有好大差別。消費者應自行衡量其價值。本平台可接受討論貨品性價"
    },
    {
      "id":"userID",
      "time": "12:31",
      "message": "我已經閱讀並同意條款"
    }
  ];

  files = [
    
  ];

  newMsg = "";

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  async goBack() {
    await this.router.navigate(['/chatroom'], {replaceUrl: true});
  }

  activateAddButton() {
    if (this.addButtonActivated === true) {
      this.addButtonActivated = false;
    } else {
      this.addButtonActivated = true;
    }
  }

  sendMessage() {
    this.messages.push({
      id: 'userID',
      time: '12:31',
      message: this.newMsg
    });
    this.newMsg = '';
  }

  fileName: string;
  private file:File;

  loadFileFromDevice(event) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
      // console.log(this.file);
  } 
  this.files.push({
    id: 'userID',
    time: '12:31',
    fileName: this.fileName,
    fileSize: (this.file.size/1024).toFixed(2) + ' kB'
  });
  this.fileName = '';
}
  private file2:File;
  loadFile2FromDevice(event) {
    this.file2 = event.target.files[0];
    if (this.file2) {
      this.fileName = this.file2.name;
      // console.log(this.file);
  }
  this.files.push({
    id: 'userID',
    time: '12:31',
    fileName: this.fileName,
    fileSize: (this.file2.size/1024).toFixed(2) + ' kB'
  });
  this.fileName = '';  
}
  private file3:File;
  loadFile3FromDevice(event) {
    this.file3 = event.target.files[0];
    if (this.file3) {
      this.fileName = this.file2.name;
      // console.log(this.file);
  } 
  this.files.push({
    id: 'userID',
    time: '12:31',
    fileName: this.fileName,
    fileSize: (this.file3.size/1024).toFixed(2) + ' kB'
  });
  this.fileName = ''; 
  }
}
