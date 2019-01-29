// MODULO DE RUTAS DE LAS PAGINAS

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { PrincipalComponent } from '../pages/principal/principal.component';
import { TindicadorComponent } from '../pages/tindicador/tindicador.component';





const app_routes: Routes = [
  { path: '' , component: PrincipalComponent },
  { path: 'tindicador' , component: TindicadorComponent },
  { path: '**' , pathMatch: 'full', redirectTo:'' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: []
})


export class AppRoutingModule {

}
