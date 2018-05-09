import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeersPage } from './beers';

@NgModule({
  declarations: [
    BeersPage,
  ],
  imports: [
    IonicPageModule.forChild(BeersPage),
  ],
})
export class BeersPageModule {}
