import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradosCarrerasListComponent } from './grados-carreras-list.component';

const routes: Routes = [
  {path : '', component : GradosCarrerasListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradosCarrerasListRoutingModule { }
