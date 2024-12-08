import { Injectable } from '@angular/core';
import { GeneralService } from '../general-service/general.service';
import { ConfigurationService } from '../configuration-service/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class GradosCarrerasService {

  constructor(
    private generalService : GeneralService,
    private configurationService : ConfigurationService
  ) { }

  gradosyCarrerasObtenerListado(){
        return this.generalService.execute(this.configurationService.getObtenerListadoGradosYCarreras())
      .then(
        gen => {
          if (gen) {
            return (gen)
          }
          return null
        }
      )
      .catch(
        except => {
          console.warn("Ocurrio un error en el servicio GradosCarrerasService en la función => gradosyCarrerasObtenerListado() ", except)
          throw new Error(except)
        });
  }

  // public obtenerAlumnos(): Promise<Alumno[]> {
  //   return this.generalService.execute(this.configurationService.getObtenerListadoAlumnos())
  //     .then(
  //       gen => {
  //         if (gen) {
  //           return (gen as Alumno[])
  //         }
  //         return []
  //       }
  //     )
  //     .catch(
  //       except => {
  //         console.warn("Ocurrio un error en el servicio AlumnosService en la función => obtenerAlumnos() ", except)
  //         throw new Error(except)
  //       });
  // }
}
