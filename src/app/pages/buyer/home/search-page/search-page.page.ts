import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {SearchResultService} from '../../../../services/search-service/search-result.service';
import { AppSettings } from 'src/appSettings';
// import {$} from 
// import * as $ from "jquery";
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.page.html',
  styleUrls: ['./search-page.page.scss'],
})
export class SearchPagePage implements OnInit {

  private api_url = AppSettings.API_ENDPOINT + "product-info/search-product/";
  private api_search_url;
  private search_result = [];
  private parent_url;
  private searchInput: string;

  // @ViewChild("search-bar") search_bar;

  constructor(
    private router: Router,
    private http: HttpClient,
    private searchResultService: SearchResultService,
    private route: ActivatedRoute
  ) {  
    
  }

  ngOnInit() {
  this.parent_url = this.router.url;
  this.searchInput=this.router.getCurrentNavigation().extras.state.searchInput;
  this.refreshResult(this.searchInput);

  console.log(this.searchInput);
  }
 
  isProductDisplay: boolean = true; 
  isStoreDisplay: boolean = false; 

  toggleProduct(){
    this.isProductDisplay = true;
    this.isStoreDisplay = false;
  }

  toggleStore(){
    this.isProductDisplay = false;
    this.isStoreDisplay =true;
  }

  enterStore(){
    this.router.navigate(['/seller/homepage'])
  }

  goBack(){
    this.router.navigate(['/homepage-new'])
    // Empty Search Page results when going back
  }

  refreshResult(valueEmitted){

    // document.getElementById("input").value=valueEmitted;
    // $("input").val=valueEmitted;
    document.querySelector("input").value=valueEmitted;
    this.search_result=this.searchResultService.getSearchResult();

    // this.searchInput=this.router.getCurrentNavigation().extras.state.searchInput;
    // console.log(this.searchInput);
    console.log(this.search_result);
  }

}
