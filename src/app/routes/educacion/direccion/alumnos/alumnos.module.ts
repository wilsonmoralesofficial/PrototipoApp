import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosComponent } from './alumnos.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    AlumnosComponent
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
  ],exports:[
  ]
})
export class AlumnosModule { }
