import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DireccionComponent } from './direccion.component';
import { NotFoundComponent } from '../../not-found/not-found.component';

const routes : Routes = [
  {
    path : '', component : DireccionComponent
  },
  {
    path : 'alumnos',
    loadChildren : () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule)
  }
  ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DireccionRoutingModule { }
