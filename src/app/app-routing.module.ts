import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './band_card.component';
import { BandDetailComponent }  from './band_detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/bands', pathMatch: 'full' },
  { path: 'bands',  component: DashboardComponent },
  { path: 'detail/:id', component: BandDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
