import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradosCarrerasComponent } from './grados-carreras.component';

const routes: Routes = [
  {
    path : '',
    loadChildren : () => import('./grados-carreras-list/grados-carreras-list.module').then(m => m.GradosCarrerasListModule)
  },
  {
    path : 'crear',
    loadChildren : () => import('./grados-carreras-form/grados-carreras-form.module').then(m => m.GradosCarrerasFormModule)
  },
  {
    path : ':id/actualizar',
    loadChildren : () => import('./grados-carreras-form/grados-carreras-form.module').then(m => m.GradosCarrerasFormModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradosCarrerasRoutingModule { }
