import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradosCarrerasListComponent } from '../grados-carreras-list/grados-carreras-list.component';
import { GradosCarrerasFormComponent } from './grados-carreras-form.component';

const routes: Routes = [
  {path : '', component : GradosCarrerasFormComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradosCarrerasFormRoutingModule { }
