import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchResultService } from 'src/app/services/search-service/search-result.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  private searchInput: String

  @Output()
  searchClicked: EventEmitter<String> = new EventEmitter<String>();

  constructor(
    private router: Router,
    private searchResultService: SearchResultService,
    // private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.searchClicked.emit(this.searchInput);
  }

  showSearchResult(){
    this.searchResultService.setSearchResult(this.searchInput).then(
      res=>{
        // console.log(res);
        // ()=>window.location.reload()
          this.router.navigate(["/search-page"], {state:{searchInput: this.searchInput}}).then(()=>{this.searchClicked.emit(this.searchInput);});
        // this.router.navigate(['/homepage-new']).then(()=>);
      },
      err => {
        console.log(err);
      }
    );
    // console.log(res);
  }

}
