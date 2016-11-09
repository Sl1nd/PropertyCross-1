import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule }   from '@angular/router';
import { SearchpageComponent } from './searchpage/searchpage.component'
import { ResultspageComponent } from './resultspage/resultspage.component'

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
     { path: 'searchResults', component: ResultspageComponent }
          ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
