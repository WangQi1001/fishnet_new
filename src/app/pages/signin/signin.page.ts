import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { AppSettings } from 'src/appSettings';
import { LoaderServiceService } from 'src/app/services/loader-service/loader-service.service';
import {Storage} from "@ionic/storage-angular"
import { StorageService } from 'src/app/services/storage-service/storage.service';
import { ErrorAlertService } from 'src/app/services/error-alert/error-alert.service';

import { FCM } from "cordova-plugin-fcm-with-dependecy-updated/ionic";
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public loaderService: LoaderServiceService,
    // private storage: Storage,
    private storageService: StorageService,
    private errorAlert: ErrorAlertService,
    private platform: Platform
    ) {}

  private formData: FormGroup;
  private api_url = AppSettings.API_ENDPOINT + "user-info/login";
  private api_endpoint=AppSettings.API_ENDPOINT;
  invalidLogin: boolean = false;
    
  ngOnInit() {
    this.formData = this.formBuilder.group({
      account_name : ['', Validators.required],
      password : ['', Validators.required]
    }, {updateOn: 'submit'})
  }

  loginFacebook(){
    //TODO: Facebook Login
  }

  forgotPassword(){
    //TODO: Forgot Password Action
  }

  faceIdVerification(){
    //TODO: Face ID Verification
  }

  registerPage(){
    this.router.navigate(['/registration']);
  }

  onSubmit(){
    // Save data to DB
    // TODO: Account Check Validation
    // console.log(this.formData.value)
    
    let headers = new HttpHeaders();
    headers.append("Content Type", "application/json");
    headers.append("Accept", "application/json");
    let postData = {
      id: this.formData.value["account_name"],
      password: this.formData.value["password"]
    }

    if (this.formData.valid){
      this.loaderService.basicLoader().then(
        () => {
          this.http.post(this.api_url, JSON.stringify(postData), {headers: headers})
          .subscribe(data => {
            console.log(data);
            if (data["status"]==200){
              this.invalidLogin = false;
              this.loaderService.closeLoader();
              this.formData.reset();
              this.storageService.set("session_id", data["data"].session_id).then(
                ()=>{
                  this.router.navigate(['/homepage-new'])
                  console.log("Session id successfully set!");
                  this.registerClientFirebase(data["data"].session_id);
                }
              );
            }else{
              this.loaderService.closeLoader();
              this.invalidLogin = true;
            }
           },error => {
            console.log(error);
            this.loaderService.closeLoader();
            this.errorAlert.presentAlert()
          })    
        }
      )
    } else{
      this.invalidLogin = true;
    }
    console.log(JSON.stringify(postData));
  }

  registerClientFirebase(session_id){
    this.platform.ready().then(() => {
      console.log("Hello the platform is ready");

      FCM.getToken().then(token => {
        console.log(token);
        this.http.post(this.api_endpoint+"chat-info/store-client-token/", JSON.stringify({session_id: session_id, client_token: token})).subscribe(
          res=>{
            console.log(res);
          }, 
          err=>{
            console.log(err)
          }
        )
      }, error => { console.log(error) });

      // // refresh the FCM token
      FCM.onTokenRefresh().subscribe(token => {
        console.log(token);
        this.http.post(this.api_endpoint+"chat-info/store-client-token/", JSON.stringify({session_id: session_id, client_token: token})).subscribe(
          res=>{
            console.log(res);
          }, 
          err=>{
            console.log(err)
          }
        )
      },
      err=>{
        console.log(err);
      });
      // unsubscribe from a topic
      // this.fcm.unsubscribeFromTopic('offers');
    });
  }
}
