import { Component,Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from 'src/appSettings';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public http: HttpClient
  ){

  }

  private formData: FormGroup;
  private api_url = AppSettings.API_ENDPOINT + "user-info/create-user";
  region: any;

  ngOnInit() {
    this.formData = this.formBuilder.group({
      account_name: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      display_name: ['', Validators.required],
      phone_no: ['', Validators.required],
      email: ['', Validators.required],
      date_of_birth: ['', Validators.required],
      address_room: [''],
      address_floor: [''],
      address_seat_no: [''],
      address_building_name: [''],
      address_street_name: [''],
      address_area: [''],
    }, {updateOn: 'submit'})
  }

  loginFacebook(){
    
  }

  selectRegion(r) {
      this.region = r;
    }
    
  goBack(){
    this.router.navigate(['/signin'])
  }
    
  onSubmit(){
    let headers = new HttpHeaders();
    headers.append("Content Type", "application/json");
    headers.append("Accept", 'application/json');
    let postData = {
      account_name: this.formData.value["account_name"],
      password: this.formData.value["password"],
      display_name: this.formData.value["display_name"],
      phone_no: this.formData.value["phone_no"],
      email: this.formData.value["email"],
      date_of_birth: this.formData.value["date_of_birth"],
      address: `Room: ${this.formData.value["address_room"]}, Floor: ${this.formData.value["address_floor"]}, Seat No: ${this.formData.value["address_seat_no"]}, Building Name: ${this.formData.value["address_building_name"]}, Street Name: ${this.formData.value["address_street_name"]}, Area: ${this.formData.value["address_area"]}, Region: ${this.region}`
    }

    console.log(this.formData.value);
    if (this.formData.valid){
      this.http.post(this.api_url, JSON.stringify(postData), {headers: headers})
      .subscribe(data => {
        console.log(data);
        if (data["status"]==200){
          // Navigate to Homepage after successful registration
          this.router.navigate(['/signin'])
          // Clear the form after successful registration
          this.formData.reset();
        }
       }, error => {
        console.log(error);
      })
    }
  }
}
