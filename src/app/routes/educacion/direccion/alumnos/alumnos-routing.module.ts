import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/routes/not-found/not-found.component';

const routes: Routes = [
  {
    path : '',
    loadChildren : () => import('./alumnos-list/alumnos-list.module').then(m => m.AlumnosListModule)
  },
  {
    path : 'nuevo',
    loadChildren : () => import('./alumnos-form/alumnos-form.module').then(m => m.AlumnosFormModule)
  },
  {
    path : ':id/actualizar',
    loadChildren : () => import('./alumnos-form/alumnos-form.module').then(m => m.AlumnosFormModule)
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
