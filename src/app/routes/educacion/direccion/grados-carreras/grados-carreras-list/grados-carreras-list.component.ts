import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GradosCarrerasService } from 'src/app/core/services/grados-carreras-service/grados-carreras.service';

@Component({
  selector: 'app-grados-carreras-list',
  templateUrl: './grados-carreras-list.component.html',
  styleUrls: ['./grados-carreras-list.component.css']
})
export class GradosCarrerasListComponent {
  gradosYCarrerasListado : any = []
  cargandoDatos : boolean = true;
  filtro : string = "";
  p: number = 1; // Página actual

  constructor(
    private router : Router,
    private gradosCarrerasService : GradosCarrerasService
  ){}

  ngOnInit(){
    this.cargarDatos();
  }

  async cargarDatos(){

    try {
      this.gradosYCarrerasListado = await this.gradosCarrerasService.gradosyCarrerasObtenerListado();
    } catch (error) {

    }
    this.cargandoDatos = false;
  }
  irADireccion(){
    this.router.navigate(['educacion/direccion']);
  }

  crearGradoOCarrera()
  {
    this.router.navigate(['educacion/grados-carreras/crear']);
  }

  irAEditarGradoOCarrera(id : string){
    this.router.navigate(['educacion/grados-carreras/' + id + '/actualizar']);
  }

}
