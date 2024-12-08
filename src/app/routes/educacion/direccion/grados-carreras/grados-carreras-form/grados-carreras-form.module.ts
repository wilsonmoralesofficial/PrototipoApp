import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradosCarrerasFormRoutingModule } from './grados-carreras-form-routing.module';
import { GradosCarrerasFormComponent } from './grados-carreras-form.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalesModule } from 'src/app/component-app/modales/modales.module';


@NgModule({
  declarations: [
    GradosCarrerasFormComponent
  ],
  imports: [
    CommonModule,
    GradosCarrerasFormRoutingModule,
    FormsModule,
    SharedModule,
    ModalesModule
  ]
})
export class GradosCarrerasFormModule { }
