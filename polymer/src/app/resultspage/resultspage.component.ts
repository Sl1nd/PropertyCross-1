import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../shared/property.service'

@Component({
  selector: 'app-resultspage',
  templateUrl: './resultspage.component.html',
  styleUrls: ['./resultspage.component.css']
})
export class ResultspageComponent implements OnInit {

  private propertyList: Array<any>;
  private totalResults: number;
  private numberOfResults: number;
  constructor(private propertyService:PropertyService) {
  		propertyService.propertyList$.subscribe(resp => {
        this.propertyList = resp.listings;
        this.totalResults = resp.total_results;
        this.numberOfResults = resp.listings.length;
      });
    }

  ngOnInit() {
  }

}
