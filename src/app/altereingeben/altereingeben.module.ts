import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltereingebenPageRoutingModule } from './altereingeben-routing.module';

import { AltereingebenPage } from './altereingeben.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltereingebenPageRoutingModule
  ],
  declarations: [AltereingebenPage]
})
export class AltereingebenPageModule {}
