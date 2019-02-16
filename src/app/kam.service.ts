import { Injectable } from '@angular/core';
import { Raj } from './raj';
@Injectable({
  providedIn: 'root'
})
export class KamService {

getData(): Raj[] {
  return  [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' }]
}

  constructor() { }
}
