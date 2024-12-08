import { Injectable } from '@angular/core';
import { environment} from '../../../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private BASE_URL = environment.INSTANCE_URL + environment.API_BASE;

  // private BASE_URL_ARCHIVOS = environment.INSTANCE_URL + environment.SERVICIO_S3;


 //CATALOGOS COLEGIO

getObtenerCatalogos(){
  return this.BASE_URL + environment.CATALOGOS_COLEGIO_OBTENER_CATALOGOS;
}

// GRADOS Y CARRERAS

getObtenerListadoGradosYCarreras(){
  return this.BASE_URL + environment.GRADOS_CARRERAS_OBTENER_LISTADO;
}

 //ALUMNOS

getObtenerListadoAlumnos(){
  return this.BASE_URL + environment.ALUMNOS_OBTENER_LISTADO;
}

getObtenerAlumnoPorId(){
  return this.BASE_URL + environment.OBTENER_ALUMNO_POR_ID;
}

crearActualizarAlumno(){
  return this.BASE_URL + environment.ALUMNOS_CREAR_ACTUALIZAR_ALUMNO;
}


}
