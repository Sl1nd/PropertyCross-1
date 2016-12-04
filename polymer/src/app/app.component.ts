import { Component } from '@angular/core';
import { CacheService } from './shared/services/cache.service';
import { PropertyService } from './shared/services/property.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 	constructor(private cacheService: CacheService, private propertyService: PropertyService) {
 		this.cacheService.initDataBase().subscribe( x => {
 			this.cacheService.getSearchResults().subscribe(cachedItems => {
 				if(cachedItems.lenght !== 0) {
 					this.propertyService.searchResultList = cachedItems;
 					this.propertyService._searchResults.next(this.propertyService.searchResultList);
 				}
 			})

 			this.cacheService.getFavProperties().subscribe(cachedItems => {
 				if(cachedItems.lenght !== 0) {
 					this.propertyService.favPropertyList = cachedItems;
 					this.propertyService._favProperty.next(cachedItems);
 				}
 			})
 		});
 	}
}
