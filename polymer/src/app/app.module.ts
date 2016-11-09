import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule }   from '@angular/router';
import { SearchpageComponent } from './searchpage/searchpage.component'
import { ResultspageComponent } from './resultspage/resultspage.component'
import { FavspageComponent } from './favspage/favspage.component'
import { ListingpageComponent } from './listingpage/listingpage.component'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     { path: '', component: SearchpageComponent },
     { path: 'searchresults', component: ResultspageComponent },
     { path: 'searchresults/:id', component: ListingpageComponent },
     { path: 'favourites', component: FavspageComponent }
          ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
