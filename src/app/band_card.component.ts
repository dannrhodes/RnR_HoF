import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Band } from './band';
import { BandService } from './band.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './band_card.component.html'
})
export class DashboardComponent implements OnInit {

  bands: Band[];

  constructor(  private router: Router,
  private bandService: BandService) { }

  ngOnInit(): void {
    this.bandService.getBands()
      .then(bands => this.bands = bands);
      }

  gotoDetail(band: Band): void {
        this.router.navigate(['/detail', band.id]);
      }


  }
}
