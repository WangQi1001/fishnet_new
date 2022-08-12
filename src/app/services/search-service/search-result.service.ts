import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter} from '@angular/core';
import { AppSettings } from 'src/appSettings';
// import { EventEmitter } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class SearchResultService {
  private api_endpoint = AppSettings.API_ENDPOINT;

  searchResult = [];

  

  constructor(
    private http: HttpClient,
  ) {}

  setSearchResult(searchInput){
    var result=[];
    let searchPromise=new Promise((res, rej)=>{
      this.http.get(this.api_endpoint+"product-info/search-product/"+searchInput)
    // console.log(result);
      .subscribe(
        data => {
          console.log(data);
          for (var i of data["data"]){
            // Documentation: JSON object from API call -> media: "['url']"
            // To parse into an array format must be -> media: "["url"]"
            let media = JSON.parse(i.media.replace(/'/g, '"'));
            // Pushing the new media value into the JSON object
            i.media = media;
            result.push(i);
            // return true;
          }
          this.searchResult=result;
          // console.log(this.searchResult);
          res(true);
          // return true;
        }, 
        error=> {
          console.log(error);
          // return false;
          rej(false);
        }
      )
    })

    return searchPromise;
  }
    // console.log(this.searchResult)

  getSearchResult(){
    // console.log(this.searchResult);
    return this.searchResult;
  }
}

