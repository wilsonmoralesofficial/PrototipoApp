import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent {

  constructor(private router: Router){

  }
  ngOnInit(){

  }

  navegarAlumnos(){
    this.router.navigate(['educacion/direccion/alumnos']);
  }

  navegarAGradosYCarreras()
  {
    this.router.navigate(['educacion/grados-carreras']);
  }

  navegarACatedraticos(){
    this.router.navigate(['educacion/catedraticos']);
  }
}
