import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grados-carreras-form',
  templateUrl: './grados-carreras-form.component.html',
  styleUrls: ['./grados-carreras-form.component.css']
})
export class GradosCarrerasFormComponent {

  modoEdicionGradoCarrera : boolean = false;
  descripcionGradoCarrera: string = "";
  carga: boolean = true;

  constructor(private router : Router) {
  }

  ngOnInit()
  {
    this.cargarDatos()
  }

  cargarDatos(){

    this.carga = false;
  }

  // MODAL ESPERA
  @ViewChild('modalEsperaLoader') modalEsperaLoader: any;
  public abrirModalEspera: boolean = true;


  abrirModalEsperaLoader() {
    if (this.abrirModalEspera) {
      this.modalEsperaLoader.abrirModal();
    }
  }

  cerrarModalLoader() {
    setTimeout(() => {
      this.modalEsperaLoader.cerrarModal();
      this.abrirModalEspera = false;
    }, 500);
  }

  volverListado(){
    this.router.navigate(["educacion/grados-carreras"])
  }

  grabar()
  {}

}
