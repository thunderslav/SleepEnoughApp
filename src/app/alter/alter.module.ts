import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterPageRoutingModule } from './alter-routing.module';

import { AlterPage } from './alter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterPageRoutingModule
  ],
  declarations: [AlterPage]
})
export class AlterPageModule {}
