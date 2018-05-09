import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { BeersPage } from '../beers/beers';
import { FoodsPage } from '../foods/foods';
import { DrinksPage } from '../drinks/drinks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  goToBeerDetails(){
    console.log("beer");
    this.navCtrl.push(BeersPage);
  }

  goToFoodDetails(){
    console.log("food");
    this.navCtrl.push(FoodsPage);
  }

  goToDrinksDetails(){
    console.log("drink");
    this.navCtrl.push(DrinksPage);
  }

}
