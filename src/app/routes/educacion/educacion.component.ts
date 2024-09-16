import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent {

  constructor( private router :Router){}

  ngOnInit(){
    console.log(" ngOnInit() Works")
    this.router.navigate(['educacion/direccion'])
  }
}
