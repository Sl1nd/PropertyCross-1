import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { PropertyService } from '../shared/services/property.service';
@Component({
  selector: 'app-listingpage',
  templateUrl: './listingpage.component.html',
  styleUrls: ['./listingpage.component.css']

})
export class ListingpageComponent implements OnInit {
  private id: string;
  private property; 
  constructor(private propertyService: PropertyService, private route: ActivatedRoute) {}

  ngOnInit() {
  	this.route.params.subscribe(params => this.id = params["id"] );
  	this.property = this.propertyService.getProperty(this.id);
  }
}
