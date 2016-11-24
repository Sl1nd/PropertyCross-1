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
  private showRecentSearch;
  constructor(private propertyService: PropertyService, private router: Router) { 
    this.recentSearches = this.propertyService.getSearchResults();
    this.recentSearches.subscribe(obj => obj.length === 0 ? this.showRecentSearch = false : this.showRecentSearch = true); 
  }
  
  ngOnInit() {
  }

  searchForProperties(searchText: string){
    this.propertyService.getProperties(searchText);
  }

  toggleLoadingSpinner(el){
    el.active = true;
  }
 } 	
