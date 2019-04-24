import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComunicatorService {
  private data = [
    { name: 'crop1', dexcripton: 'loremasdasdasdasd'},
    { name: 'crop2', dexcripton: 'loremasdasdasdasd'},
    { name: 'crop3', dexcripton: 'loremasdasdasdasd'},
    { name: 'crop4', dexcripton: 'loremasdasdasdasd'}
  ]
  public getData() {
    return this.data; 
  }
  constructor() { }
}
