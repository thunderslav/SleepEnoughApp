import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AufstehzeitPage } from './aufstehzeit.page';

const routes: Routes = [
  {
    path: '',
    component: AufstehzeitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AufstehzeitPageRoutingModule {}
