import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EinschlafzeitPage } from './einschlafzeit.page';

const routes: Routes = [
  {
    path: '',
    component: EinschlafzeitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EinschlafzeitPageRoutingModule {}
