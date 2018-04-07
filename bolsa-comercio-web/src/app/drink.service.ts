import { Injectable } from '@angular/core';
import { Drink } from './drink';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpErrorResponse } from '@angular/common/http'
import { DrinkToShow } from './drinkToShow';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class DrinkService {

  constructor(private _http:HttpClient){
  }
 
  getActualDrinks(): Observable<any>{

    return  this._http.get('http://localhost:8080/getDrinks');
     
  }

  updatePrices(toShow:DrinkToShow[]): Observable<any>{

    return this._http.get('http://localhost:8080/updatePrices');
     
  }

}
