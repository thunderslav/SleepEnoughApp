import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AufstehzeitPageRoutingModule } from './aufstehzeit-routing.module';

import { AufstehzeitPage } from './aufstehzeit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AufstehzeitPageRoutingModule
  ],
  declarations: [AufstehzeitPage]
})
export class AufstehzeitPageModule {}
