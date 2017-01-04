import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PropertyService } from '../shared/services/property.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favspage',
  templateUrl: './favspage.component.html',
  styleUrls: ['./favspage.component.css']
})
export class FavspageComponent implements OnInit {
  private favPropertyList: Array<any>;	
  private isFavorite: boolean;

  constructor(private propertyService: PropertyService, private router: Router) { 
  	this.propertyService.getFavProperties().subscribe(list => {
      this.favPropertyList = list;

      this.isFavorite = list.length > 0 ? false : true
      this.propertyService.propertyList = this.favPropertyList;
    })
  };

  ngOnInit() {
  }

  private selectProperty (property) {
   this.router.navigate(['/searchresults/detail', {'id': property.thumb_url}]); 
  }
}
