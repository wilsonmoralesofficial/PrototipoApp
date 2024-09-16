import { Injectable } from '@angular/core';

// import Swal from 'sweetalert2/dist/sweetalert2.js'; // Verifica si esta ruta usa ES modules
import Swal from 'sweetalert2';



@Injectable({
  providedIn: 'root'
})
export class SweetalertServiceService {

  constructor() { }

  alertResponseRequest(titulo: string, mensaje : string , tipo : any ){
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: tipo
    })
  }

}
