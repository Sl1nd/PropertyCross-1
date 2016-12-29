import {Injectable} from '@angular/core';
import {Response, Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs'

@Injectable()
export class GeoLocationService {
	constructor(private http: Http){
	}

getGeoLocation() {
	let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let apiKey = "AIzaSyDaJ5VSowwVNjPt5503jnM9WwMlxpsO_0I"
    console.log("Losgehts");
    return this.http.post("https://www.googleapis.com/geolocation/v1/geolocate?key="+apiKey, {}, options)
        .map(this.extractData)
        .catch(this.handleError);
}

  

private extractData(res: Response) {
    let body = res.json();
	return body.location;
}

private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
}


}	