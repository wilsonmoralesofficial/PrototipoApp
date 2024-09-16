import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/core/services/alumnos-service/alumnos.service';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.css']
})
export class AlumnosListComponent {

  cargandoDatos : boolean = true;
  alumnosListado: Array<any> = []

  constructor(private alumnosService : AlumnosService,
    private router : Router
  ){

  }

  ngOnInit(){
    this.cargaIncial();
  }

  async cargaIncial(){

    this.alumnosListado = await this.alumnosService.obtenerAlumnos();
    this.cargandoDatos = false;
  }

  irADireccion(){
    this.router.navigate(['educacion/direccion']);
  }

  crearAlumno(){
    this.router.navigate(['educacion/direccion/alumnos/nuevo']);
  }

}
