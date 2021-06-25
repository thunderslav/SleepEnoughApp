import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnmeldenUndRegistrierenPageRoutingModule } from './anmelden-und-registrieren-routing.module';

import { AnmeldenUndRegistrierenPage } from './anmelden-und-registrieren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnmeldenUndRegistrierenPageRoutingModule
  ],
  declarations: [AnmeldenUndRegistrierenPage]
})
export class AnmeldenUndRegistrierenPageModule {}
