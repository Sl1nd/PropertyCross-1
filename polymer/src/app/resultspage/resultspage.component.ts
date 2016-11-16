import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../shared/property.service'

@Component({
  selector: 'app-resultspage',
  templateUrl: './resultspage.component.html',
  styleUrls: ['./resultspage.component.css']
})
export class ResultspageComponent implements OnInit {

  private propertyList: Array<any>;
  constructor(private propertyService:PropertyService) {
  		propertyService.propertyList$.subscribe(list => this.propertyList = list);
    }

  ngOnInit() {
  }

}
