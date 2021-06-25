import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErinnerungPageRoutingModule } from './erinnerung-routing.module';

import { ErinnerungPage } from './erinnerung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErinnerungPageRoutingModule
  ],
  declarations: [ErinnerungPage]
})
export class ErinnerungPageModule {}
