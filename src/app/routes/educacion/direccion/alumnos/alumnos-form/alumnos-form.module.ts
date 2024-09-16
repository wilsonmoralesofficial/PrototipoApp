import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosFormRoutingModule } from './alumnos-form-routing.module';
import { AlumnosFormComponent } from './alumnos-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalesModule } from 'src/app/component-app/modales/modales.module';


@NgModule({
  declarations: [
    AlumnosFormComponent
  ],
  imports: [
    CommonModule,
    AlumnosFormRoutingModule,
    SharedModule,
    ModalesModule
  ]
})
export class AlumnosFormModule { }
