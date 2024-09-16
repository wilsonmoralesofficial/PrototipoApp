import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { ActividadesComponent } from './actividades/actividades.component';
import { PrincipalComponent } from './principal/principal.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HorariosComponent } from './horarios/horarios.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PrincipalComponent,
    ActividadesComponent,
    EducacionComponent,
    ContactoComponent,
    HorariosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
    SharedModule
  ]
})
export class RoutesModule { }
