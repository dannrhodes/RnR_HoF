import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Band }         from './band';
import { BandService }  from './band.service';
@Component({
  selector: 'band-detail',
  templateUrl: './band_detail.component.html',

})
export class BandDetailComponent implements OnInit {
  band: Band;

  constructor(
    private bandService: BandService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bandService.getBand(+params['id']))
      .subscribe(band => this.band = band);
  }

  goBack(): void {
    this.location.back();
  }
}
