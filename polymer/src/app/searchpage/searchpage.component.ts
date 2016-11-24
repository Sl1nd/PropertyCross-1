import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../shared/services/property.service'

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  private recentSearches;

  constructor(private propertyService: PropertyService, private router: Router) { 
    this.recentSearches = this.propertyService.getSearchResults();
    this.recentSearches.subscribe(obj => console.log("blabla",obj));
  }
  
  ngOnInit() {
  }

  searchForProperties(searchText: string){
    this.propertyService.getProperties(searchText);//, {'searchText': searchText}]); 
  }

  toggleLoadingSpinner(el){
    el.active = true;
  }

  isRecentSearch() {
    return this.recentSearches.length === 0 ? false : true;
  }
 } 	
