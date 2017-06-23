import { Band } from './band';
import { Bands } from './mock-bands';
import { Injectable } from '@angular/core';

@Injectable()
export class BandService {
  getBands(): Promise<Band[]> {
    return Promise.resolve(Bands);
  }

  getBand(id: number): Promise<Band> {
    return this.getBands()
               .then(bands => bands.find(band => band.id === id));
  }
}
