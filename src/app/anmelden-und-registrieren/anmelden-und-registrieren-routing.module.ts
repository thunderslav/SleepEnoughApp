import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnmeldenUndRegistrierenPage } from './anmelden-und-registrieren.page';

const routes: Routes = [
  {
    path: '',
    component: AnmeldenUndRegistrierenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnmeldenUndRegistrierenPageRoutingModule {}
