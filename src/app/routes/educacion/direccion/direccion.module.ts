import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DireccionRoutingModule } from './direccion-routing.module';
import { DireccionComponent } from './direccion.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    DireccionComponent
  ],
  imports: [
    CommonModule,
    DireccionRoutingModule,
    SharedModule
  ]
})
export class DireccionModule { }
