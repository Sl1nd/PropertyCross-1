import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../shared/services/property.service';
import { Router } from '@angular/router';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-resultspage',
  templateUrl: './resultspage.component.html',
  styleUrls: ['./resultspage.component.css']
})
export class ResultspageComponent implements OnInit {

  private propertyList: Array<any>;
  private totalResults: number;
  private numberOfResults: number;
  private searchText: string;
  constructor(private propertyService:PropertyService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
        this.route.data.subscribe((obj: any) => {
          let resp = obj.properties._body.response
          this.searchText = obj.properties._body.request.location
          this.propertyList = resp.listings;
          this.totalResults = resp.total_results;
          this.numberOfResults = this.propertyList.length;
          

          this.addSearchResult();
          this.propertyService.propertyList = this.propertyList;
      });
  }

  private selectProperty (property) {
   this.router.navigate(['/searchresults/detail', {'id': property.thumb_url}]); 
  }

  private addSearchResult(){
    let searchResultObj = {location: this.searchText, numberOfResults: this.totalResults};
    this.propertyService.addSearchResult(searchResultObj);
  }
}
