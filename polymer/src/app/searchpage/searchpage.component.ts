import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyService } from '../shared/property.service'

@Component({
  selector: 'app-searchpage',
  templateUrl: './searchpage.component.html',
  styleUrls: ['./searchpage.component.css']
})
export class SearchpageComponent implements OnInit {

  constructor(private propertyService: PropertyService, private router: Router) { 
  }
  
  ngOnInit() {
  }

  searchForProperties(searchText: string){
    this.router.navigate(['/searchresults']); 
  }
 } 	
