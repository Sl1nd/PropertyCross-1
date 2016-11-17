import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../shared/property.service'
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
  constructor(private propertyService:PropertyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
      let resp = this.route.snapshot.data['properties']._body.response;
       this.propertyList = resp.listings;
       this.totalResults = resp.total_results;
       this.numberOfResults = this.propertyList.length;
  }

}
