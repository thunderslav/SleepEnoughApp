import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchlafempfehlungPageRoutingModule } from './schlafempfehlung-routing.module';

import { SchlafempfehlungPage } from './schlafempfehlung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchlafempfehlungPageRoutingModule
  ],
  declarations: [SchlafempfehlungPage]
})
export class SchlafempfehlungPageModule {}
