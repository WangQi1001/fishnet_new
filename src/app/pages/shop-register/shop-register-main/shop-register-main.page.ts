import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, FormControl, FormArray} from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppSettings } from 'src/appSettings';
import { LoaderServiceService } from 'src/app/services/loader-service/loader-service.service';
import { ErrorAlertService } from 'src/app/services/error-alert/error-alert.service';

@Component({
  selector: 'app-shop-register-main',
  templateUrl: './shop-register-main.page.html',
  styleUrls: ['./shop-register-main.page.scss'],
})
export class ShopRegisterMainPage implements OnInit {
  
  private formData: FormGroup;
  private pageNumber = 1;
  private api_url = AppSettings.API_ENDPOINT + "merchant-info/create-merchant" ;
  region: any;
  categories= [];

  days_off: Array<any> = [
    {name: "星期日", value: "星期日"},
    {name: "星期一", value: "星期一"},
    {name: "星期二", value: "星期二"},
    {name: "星期三", value: "星期三"},
    {name: "星期四", value: "星期四"},
    {name: "星期五", value: "星期五"},
    {name: "星期六", value: "星期六"},
  ]

  ngOnInit() {
    this.formData = this.formBuilder.group({
      formData_1 : this.formBuilder.group({
        shop_name: ['', Validators.required],
        last_name: ['', Validators.required],
        first_name: ['', Validators.required],
        email: ['', Validators.required],
        phone_no: ['', Validators.required],
        store_open_time: ['', Validators.required],
        store_open_time_2: ['AM'],
        store_close_time: ['', Validators.required],
        store_close_time_2: ['AM'],
        days_off: new FormArray([]),
      }),
      formData_2: this.formBuilder.group({
        address_room: ['', Validators.required],
        address_floor: ['', Validators.required],
        address_seat_no: [''],
        address_building_name: ['', Validators.required],
        address_street_name: [''],
        address_area: ['', Validators.required],
        bank: ['', Validators.required],
        bank_account_no: ['', Validators.required],
        check_payable_name: ['', Validators.required]
      })
    });
  }

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public loaderService: LoaderServiceService,
    private errorAlert: ErrorAlertService
  ) {}

  // convenience getter for easy access to form fields
  get f() { 
    return ((this.formData.get('formData_1') as FormGroup).controls); 
  }

  get form_2() { 
    return ((this.formData.get('formData_2') as FormGroup).controls); 
  }


  previousPage(){
    if (this.pageNumber === 1){
      this.router.navigate(['/profile']);
    } 
    else{
      this.pageNumber--;
    }
  }

  // Days off Checkbox
  onCheckboxChange(event: any) {
    const daysOff = ( (this.formData.get('formData_1') as FormGroup).controls.days_off as FormArray );
    if (event.target.checked) {
      daysOff.push(new FormControl(event.target.value));
    } else {
      const index = daysOff.controls.findIndex(x => x.value === event.target.value);
      daysOff.removeAt(index);
    }
  }

  selectRegion(r) {
    this.region = r;
  }

  // Helper Function: removes specific value from array
  removeItem(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  selectCategories(r){
    if (!this.categories.includes(r)){
      this.categories.push(r);
    }else{
      this.removeItem(this.categories, r);
    }
    // console.log(this.categories);
  }

  
  fileName: string;
  private file:File;
  
  loadImageFromDevice(event) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
      // console.log(this.file);
    }
  }

  isPageTwoClicked: boolean = false;
  isPageThreeClicked: boolean = false;
  isPageFourClicked: boolean = false;

  nextPage(){
    if (this.pageNumber !== 4 ){
      if (this.pageNumber == 1){
        this.isPageTwoClicked = true;
        if (this.formData.get('formData_1').valid){
          this.pageNumber=2
        }
      }
      else if (this.pageNumber == 2){
        this.isPageThreeClicked = true;
        if (this.formData.get('formData_2').valid){
          this.pageNumber=3;
        }
      }
      else if (this.pageNumber == 3){
        this.isPageFourClicked = true;
        if (this.file){
          this.pageNumber=4;
        }
      }
    }
  }

  onSubmit(){
    let headers = new HttpHeaders();
    headers.append("Content Type", 'multipart/form-data');
    headers.append("Accept", 'application/json');
    
    // Structuring form data
    let postData = {
      shop_name: this.formData.controls['formData_1'].value.shop_name,
      name: `${this.formData.controls['formData_1'].value.first_name} ${this.formData.controls['formData_1'].value.last_name}`,
      email: this.formData.controls['formData_1'].value.email,
      phone_no: this.formData.controls['formData_1'].value.phone_no,
      open_hours: `${this.formData.controls['formData_1'].value.store_open_time} ${this.formData.controls['formData_1'].value.store_open_time_2} - ${this.formData.controls['formData_1'].value.store_close_time} ${this.formData.controls['formData_1'].value.store_close_time_2}`,
      days_off: this.formData.controls['formData_1'].value.days_off,

      address: `Room: ${this.formData.controls['formData_2'].value.address_room}, Floor: ${this.formData.controls['formData_2'].value.address_floor}, Seat No: ${this.formData.controls['formData_2'].value.address_seat_no}, Building Name: ${this.formData.controls['formData_2'].value.address_building_name}, Street Name: ${this.formData.controls['formData_2'].value.address_street_name}, Area: ${this.formData.controls['formData_2'].value.address_area}, Region: ${this.region}`,
      bank: this.formData.controls['formData_2'].value.bank,
      bank_account_no: this.formData.controls['formData_2'].value.bank_account_no,
      check_payable: this.formData.controls['formData_2'].value.check_payable_name,
      business_certificate_file: this.file,
      categories: this.categories
    }
    console.log(postData);

    var formPostData:FormData = new FormData;

    // Preparing form data for API posting
    for (const key in postData) {
      formPostData.append(`${key}`, postData[key])
    }

    if (this.formData.valid){
      this.loaderService.basicLoader().then(
        () => {
          this.http.post(this.api_url, formPostData, {headers: headers})
          .subscribe(data => {
            console.log(data);
            if (data["status"] == 200){
              // Clear the form after successful registration
              this.loaderService.closeLoader();
              this.formData.reset();
              this.pageNumber = 1;
              // Navigate to success splash-screen after registration
              this.router.navigate(['/shop-register-splash-screen'])
            }else{
              this.loaderService.closeLoader();
              this.errorAlert.presentAlert()
            }
           }, error => {
            console.log(error);
            this.loaderService.closeLoader();
            this.errorAlert.presentAlert()
          })
        } 
      )
    } else{
      console.log("Form Data Invalid")
    }
 
  }
}
