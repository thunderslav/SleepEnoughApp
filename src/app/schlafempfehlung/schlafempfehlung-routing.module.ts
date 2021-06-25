import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchlafempfehlungPage } from './schlafempfehlung.page';

const routes: Routes = [
  {
    path: '',
    component: SchlafempfehlungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchlafempfehlungPageRoutingModule {}
