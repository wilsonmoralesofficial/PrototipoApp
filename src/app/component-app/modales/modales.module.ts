import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalEsperaLoaderComponent } from './modal-espera-loader/modal-espera-loader.component';



@NgModule({
  declarations: [
    ModalEsperaLoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ModalEsperaLoaderComponent
  ]
})
export class ModalesModule { }
