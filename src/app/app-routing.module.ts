import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tutorial1',
    loadChildren: () => import('./tutorial1/tutorial1.module').then( m => m.Tutorial1PageModule)
  },
  {
    path: 'tutorial2',
    loadChildren: () => import('./tutorial2/tutorial2.module').then( m => m.Tutorial2PageModule)
  },
  {
    path: 'tutorial3',
    loadChildren: () => import('./tutorial3/tutorial3.module').then( m => m.Tutorial3PageModule)
  },
  {
    path: 'tutorial4',
    loadChildren: () => import('./tutorial4/tutorial4.module').then( m => m.Tutorial4PageModule)
  },
  {
    path: 'tutorial5',
    loadChildren: () => import('./tutorial5/tutorial5.module').then( m => m.Tutorial5PageModule)
  },
  {
    path: 'tutorial6',
    loadChildren: () => import('./tutorial6/tutorial6.module').then( m => m.Tutorial6PageModule)
  },
  {
    path: 'registrieren',
    loadChildren: () => import('./registrieren/registrieren.module').then( m => m.RegistrierenPageModule)
  },
  {
    path: 'anmelden',
    loadChildren: () => import('./anmelden/anmelden.module').then( m => m.AnmeldenPageModule)
  },
  {
    path: 'homescreen',
    loadChildren: () => import('./homescreen/homescreen.module').then( m => m.HomescreenPageModule)
  },
  {
    path: 'alter',
    loadChildren: () => import('./alter/alter.module').then( m => m.AlterPageModule)
  },
  {
    path: 'anmelden-und-registrieren',
    loadChildren: () => import('./anmelden-und-registrieren/anmelden-und-registrieren.module').then( m => m.AnmeldenUndRegistrierenPageModule)
  },
  {
    path: 'schlafempfehlung',
    loadChildren: () => import('./schlafempfehlung/schlafempfehlung.module').then( m => m.SchlafempfehlungPageModule)
  },
  {
    path: 'einschlafzeit',
    loadChildren: () => import('./einschlafzeit/einschlafzeit.module').then( m => m.EinschlafzeitPageModule)
  },
  {
    path: 'erinnerung',
    loadChildren: () => import('./erinnerung/erinnerung.module').then( m => m.ErinnerungPageModule)
  },
  {
    path: 'altereingeben',
    loadChildren: () => import('./altereingeben/altereingeben.module').then( m => m.AltereingebenPageModule)
  },
  {
    path: 'aufstehzeit',
    loadChildren: () => import('./aufstehzeit/aufstehzeit.module').then( m => m.AufstehzeitPageModule)
  },
  {
    path: 'statistik',
    loadChildren: () => import('./statistik/statistik.module').then( m => m.StatistikPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
