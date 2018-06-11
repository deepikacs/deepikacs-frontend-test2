import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {
values: any = [];

  constructor() { }

  savedata(values){
  	this.values = values;
  	console.log("hii");
  }
}
