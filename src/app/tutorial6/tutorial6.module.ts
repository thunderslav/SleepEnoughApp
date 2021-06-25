import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tutorial6PageRoutingModule } from './tutorial6-routing.module';

import { Tutorial6Page } from './tutorial6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tutorial6PageRoutingModule
  ],
  declarations: [Tutorial6Page]
})
export class Tutorial6PageModule {}
