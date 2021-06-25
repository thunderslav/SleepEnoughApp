import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltereingebenPage } from './altereingeben.page';

const routes: Routes = [
  {
    path: '',
    component: AltereingebenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltereingebenPageRoutingModule {}
