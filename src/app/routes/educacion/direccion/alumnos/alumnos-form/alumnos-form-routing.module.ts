import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosFormComponent } from './alumnos-form.component';

const routes: Routes = [
  {path : '', component : AlumnosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosFormRoutingModule { }
