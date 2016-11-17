import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { RouterModule }   from '@angular/router';
import { SearchpageComponent } from './searchpage/searchpage.component'
import { ResultspageComponent } from './resultspage/resultspage.component'
import { FavspageComponent } from './favspage/favspage.component'
import { ListingpageComponent } from './listingpage/listingpage.component'

import { PropertyService } from './shared/property.service'
import { PropertyResolver } from './shared/property.resolver'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
     { path: '', component: SearchpageComponent },
     { path: 'searchresults', component: ResultspageComponent,
      resolve: {properties: PropertyResolver} },
     { path: 'searchresults/:id', component: ListingpageComponent },
     { path: 'favourites', component: FavspageComponent }
          ])
  ],
  providers: [PropertyService, PropertyResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
