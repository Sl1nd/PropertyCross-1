import { Injectable  } from '@angular/core';
import { Jsonp, URLSearchParams, Response	 } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import { BehaviorSubject }    from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/publishReplay'; // add publishReplay function to observable

@Injectable()
export class PropertyService {
  private propertiesUrl:string ;  // URL to web API
  public properties: Observable<any>;
  public propertyList: Array<any>;

  public _searchResults: BehaviorSubject<any[]>; 
  private searchResultList: Array<any>;

  constructor(private jsonp: Jsonp) {
    this.propertiesUrl  = 'http://api.nestoria.co.uk/api';
    this.searchResultList =   [];
    this._searchResults = <BehaviorSubject<any[]>>new BehaviorSubject([]);
  }

  getProperties(searchText: string) {
  	let params = new URLSearchParams();
  	params.set('country', 'uk');
	  params.set('callback', 'JSONP_CALLBACK');
	  params.set('pretty','1');
	  params.set('action','search_listings');
	  params.set('encoding','json');
	  params.set('listing_type','buy');
	  params.set('place_name', searchText);

    this.properties = this.jsonp.get(this.propertiesUrl, {search: params}).publishReplay(1).refCount();
  }

  getProperty(id: string) {
    let selesctedProperty;
    this.propertyList.forEach(property => {
        if(property.thumb_url === id){
           selesctedProperty = property; 
        }
    });
    return selesctedProperty;
  }

  getSearchResults(){
    return this._searchResults.asObservable();
  }

  addSearchResult(searchResult: any){
    this.searchResultList.push(searchResult);
    this._searchResults.next(this.searchResultList);
  }
}
