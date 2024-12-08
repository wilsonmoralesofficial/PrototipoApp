import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradosCarrerasRoutingModule } from './grados-carreras-routing.module';
import { GradosCarrerasComponent } from './grados-carreras.component';


@NgModule({
  declarations: [
    GradosCarrerasComponent
  ],
  imports: [
    CommonModule,
    GradosCarrerasRoutingModule
  ],

})
export class GradosCarrerasModule { }
