import { Injectable  } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
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
	params.set('page','1');
	params.set('place_name', 'scottland');

  	return this.jsonp
  		.get(this.propertiesUrl, {search: params})
		.map(response => <string[]> response.json()[1]).subscribe(
 			x => console.log('onNext: %s', x),
  			e => console.log('onError: %s', e),
  			() => console.log('onCompleted'));		
  }
}
