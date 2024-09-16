import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosListRoutingModule } from './alumnos-list-routing.module';
import { AlumnosListComponent } from './alumnos-list.component';


@NgModule({
  declarations: [
  
    AlumnosListComponent
  ],
  imports: [
    CommonModule,
    AlumnosListRoutingModule
  ]
})
export class AlumnosListModule { }
