import { Injectable  } from '@angular/core';
import { Jsonp, URLSearchParams, Response	 } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'; // add map function to observable

@Injectable()
export class PropertyService {
  private propertiesUrl = 'http://api.nestoria.co.uk/api';  // URL to web API

  constructor(private jsonp: Jsonp) { }

  getProperties(searchText: string) {
  	let params = new URLSearchParams();
  	params.set('country', 'uk');
	params.set('callback', 'JSONP_CALLBACK');
	params.set('pretty','1');
	params.set('action','search_listings');
	params.set('encoding','json');
	params.set('listing_type','buy');
	params.set('place_name', 'scottland');

  	return this.jsonp
  		.get(this.propertiesUrl, {search: params})
		.map((res:Response) => res.json());		
  }
}
