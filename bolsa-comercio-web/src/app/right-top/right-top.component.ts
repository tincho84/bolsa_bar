import { Component, OnInit, Input } from '@angular/core';
import { Drink } from '../drink';

@Component({
  selector: 'app-right-top',
  templateUrl: './right-top.component.html',
  styleUrls: ['./right-top.component.css']
})
export class RightTopComponent implements OnInit {

  @Input() drinks_to_detail: Drink[];
  drink_to_detail:Drink;

  interval: any;
  index:number;

  constructor() { }

  ngOnInit() {
    this.index=0;
    this.updatePanel();
  }

  updatePanel():void{
    this.interval = setInterval(() => {
      this.drink_to_detail = this.drinks_to_detail[this.index];
      if (this.drinks_to_detail.length==this.index){
        this.index=0;
      }else{
        this.index++;
      }

    }, 5000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
