import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatedraticosComponent } from './catedraticos.component';


const routes: Routes = [
  {path : '', component : CatedraticosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatedraticosRoutingModule { }
