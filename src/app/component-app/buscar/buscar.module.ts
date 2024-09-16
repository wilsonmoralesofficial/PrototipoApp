import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscarComponent } from './buscar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    BuscarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports :[BuscarComponent]
})
export class BuscarModule { }
