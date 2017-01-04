import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../shared/services/property.service';
import { GeoLocationService } from '../shared/services/geo-location.service';

import { CacheService } from '../shared/services/cache.service';

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {
  private recentSearches;
  private showRecentSearch;
  constructor(private propertyService: PropertyService, private geoLocationService: GeoLocationService, private router: Router, private cacheService: CacheService) { 
        this.recentSearches = this.propertyService.getSearchResults();
        this.recentSearches.subscribe(obj => obj.length === 0 ? this.showRecentSearch = false : this.showRecentSearch = true);   
  }
  
  ngOnInit() {
  }

  searchForProperties(searchText: string){
    this.router.navigate(['/searchresults']);
    this.propertyService.getProperties(searchText);
  }

  toggleLoadingSpinner(el){
    el.active = true;
  }

  searchCurrentLocation(){
    
    this.geoLocationService.getGeoLocation().subscribe(location => {
      let centre_point=location.lat+ ',' +location.lng;
      this.router.navigate(['/searchresults']);
      this.propertyService.getLocationBasedProperties(centre_point);
    });
  }

  _keyPressed(event){
    if(event.keyCode===13){
      this.router.navigate(['/searchresults']);
      this.propertyService.getProperties(event.target.value);  
    }
  }
 } 	
