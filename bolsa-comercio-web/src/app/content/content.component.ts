import { Component, OnInit, OnDestroy } from '@angular/core';
import { DrinkService } from '../drink.service';
import { Drink } from '../drink';
import { DrinkToShow } from '../drinkToShow';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnDestroy {

//  drinks:Drink[];
  drinksToShow:DrinkToShow[]=[];
  interval: any;

  constructor(private _drinkService: DrinkService) { }

  ngOnInit() {
    var self = this;
    this.getDrinks();  
    this.updatePanel(); 
  }

  updatePanel():void{
    this.interval = setInterval(() => {
      this.getDrinks();
    }, 30000);
  }

  getDrinks(): void {

    this._drinkService.getActualDrinks().subscribe(drink => 
        {
/*       this.drinks = drink;
         var toShow:DrinkToShow[]=[];
         toShow = this.loadDrinkss(drink);
         this._drinkService.updatePrices(toShow).subscribe();
         this.drinksToShow = toShow;
 */
          var toShow:DrinkToShow[]=[];
          toShow = drink;
          this._drinkService.updatePrices(toShow).subscribe();
          this.drinksToShow = toShow;
        });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }


  /*
  Si la diferencia de litros es <10 entonces subo un 4%
  Si la diferencia de litros esta entre 10 y 20 subo 2 %
  Si la diferencia de litros esta entre 20 y 30 precio referencia
  Si la diferencia de litros esta entre 30 y 40 bajo 2 %
  Si la diferencia de litros es >40 entonces bajo un 4%
  El % de variación es contra el precio anterior
  */
  loadDrinkss(drinksService:Drink[]):DrinkToShow[]{

    var diff_lt:number[] = [];
    var diff_price:number[] = [];
    var drinkToShow;
    var drinksToShowTemp:DrinkToShow[]=[];

    for (var _i = 0; _i < drinksService.length; _i++) {
      drinkToShow = new DrinkToShow();
      var drink = drinksService[_i];
      diff_lt[_i] = drink.stockLiters -drink.soldLiters;
      diff_price[_i] = drink.actualPrice -drink.referencePrice;

      drinkToShow.id = drink.id;
      drinkToShow.name = drink.name;

      if (diff_lt[_i] < 10) {
        drinkToShow.newPrice = Math.round(drink.actualPrice*1.04);
        drinkToShow.variation = this.getPercent(drinkToShow.newPrice,drink.actualPrice);//"+0.4";
      }else if (diff_lt[_i] < 20) {
        drinkToShow.newPrice = Math.round(drink.actualPrice*1.02);
        drinkToShow.variation = this.getPercent(drinkToShow.newPrice,drink.actualPrice);//"+0.2";
      }else if (diff_lt[_i] < 30) {
        drinkToShow.newPrice = Math.round(drink.referencePrice);
        drinkToShow.variation = this.getPercent(drinkToShow.newPrice,drink.actualPrice);//"0";
      }else if (diff_lt[_i] < 40) {
        drinkToShow.newPrice = Math.round(drink.actualPrice*0.98);
        drinkToShow.variation = this.getPercent(drinkToShow.newPrice,drink.actualPrice);//"-0.2";
      }else {
        drinkToShow.newPrice = Math.round(drink.actualPrice*0.96);
        drinkToShow.variation = this.getPercent(drinkToShow.newPrice,drink.actualPrice);//"-0.4";
      } 

      drinksToShowTemp[_i] = drinkToShow;
      
    }

    var lessStock = 500;var lessStockId;
    var moreStock = 0;var moreStockId;

    //recorro devuelta para saber cual es la de menor stock y la de mayor stock
    for (var _i = 0; _i < drinksService.length; _i++) {
      var drink = drinksService[_i];

      if (diff_lt[_i]<lessStock){
        lessStock=diff_lt[_i];
        lessStockId = _i;
      }
      if (diff_lt[_i]>moreStock){
        moreStock=diff_lt[_i];
        moreStockId = _i;
      }


   //   drinkToShow.newPrice = 20;
   //   drinkToShow.variation = 20;

    }
    return drinksToShowTemp;

  }
/*
  getHeroes2(): void {
    this._drinkService.getDrinks2().subscribe(drinks => this.drinks = drinks);
  }
*/

  getPercent(nuevoPrecio:number,precioActual:number):number{
    return  ((nuevoPrecio*100)/precioActual);
  }

}
