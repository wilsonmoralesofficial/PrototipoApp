import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosListRoutingModule } from './alumnos-list-routing.module';
import { AlumnosListComponent } from './alumnos-list.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlumnosPipe } from '../alumnos.pipe';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    AlumnosListComponent,
    AlumnosPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    AlumnosListRoutingModule,
    NgxPaginationModule
  ]
})
export class AlumnosListModule { }
