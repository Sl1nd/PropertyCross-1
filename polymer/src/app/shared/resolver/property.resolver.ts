import {PropertyService} from '../services/property.service';
import { Injectable} from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PropertyResolver implements Resolve<any> {
  constructor(private propertyService: PropertyService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    return 	this.propertyService.getProperties(route.params['searchText']);	
  }
}
