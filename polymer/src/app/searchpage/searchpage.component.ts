import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../shared/property.service'

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css'],
  providers: [PropertyService]
})
export class SearchpageComponent implements OnInit {

  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  	
  }

  searchForProperties(){
  	this.propertyService.getProperties('Scottland');
  }
}
