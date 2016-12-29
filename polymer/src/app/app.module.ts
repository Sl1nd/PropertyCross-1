import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { RouterModule }   from '@angular/router';
import { SearchpageComponent } from './searchpage/searchpage.component'
import { ResultspageComponent } from './resultspage/resultspage.component'
import { FavspageComponent } from './favspage/favspage.component'
import { ListingpageComponent } from './listingpage/listingpage.component'

import { PropertyService } from './shared/services/property.service'
import { CacheService } from './shared/services/cache.service'
import { PropertyResolver } from './shared/resolver/property.resolver'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchpageComponent,
    ResultspageComponent,
    ListingpageComponent,
    FavspageComponent
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
     { path: 'searchresults/detail', component: ListingpageComponent },
     { path: 'favourites', component: FavspageComponent }
          ])
  ],
  providers: [PropertyService, CacheService, PropertyResolver],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
