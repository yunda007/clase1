import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [{
      path: 'notas',
      loadChildren: () => import('../entradas/entradas.module').then( m => m.EntradasPageModule)
    },
    {
      path: 'crearnotas',
      loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
    },
    {
      path: 'inicio',
      loadChildren: () => import('../userslist/userslist.module').then( m => m.UserslistPageModule),
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
