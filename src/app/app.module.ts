import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { DashboardComponent }   from './band_card.component';
import { AppComponent }   from './app.component';
import { BandDetailComponent }  from './band_detail.component';
import { BandService }          from './band.service';

import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
  AppComponent,
    DashboardComponent,
    BandDetailComponent
  ],
  providers: [ BandService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
