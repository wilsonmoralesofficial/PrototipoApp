import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GradosCarrerasListRoutingModule } from './grados-carreras-list-routing.module';
import { GradosCarrerasListComponent } from './grados-carreras-list.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FiltroGradosCarrerasPipe } from '../filtro-grados-carreras.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    GradosCarrerasListComponent,
    FiltroGradosCarrerasPipe
  ],
  imports: [
    CommonModule,
    SharedModule,
    GradosCarrerasListRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class GradosCarrerasListModule { }
