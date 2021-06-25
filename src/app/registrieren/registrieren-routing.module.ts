import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrierenPage } from './registrieren.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrierenPage
  },
  {
    path: 'registrieren',
    loadChildren: () => import('./registrieren.module').then( m => m.RegistrierenPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrierenPageRoutingModule {}
