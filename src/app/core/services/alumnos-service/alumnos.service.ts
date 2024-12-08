import { Injectable } from '@angular/core';
import { GeneralService } from '../general-service/general.service';
import { ConfigurationService } from '../configuration-service/configuration.service';
import { error } from 'jquery';
import { Alumno } from '../../models/educacion/alumnos';
import { Respuesta } from '../../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(
    private generalService: GeneralService,
    private configurationService: ConfigurationService
  ) { }

  public obtenerAlumnos(): Promise<Alumno[]> {
    return this.generalService.execute(this.configurationService.getObtenerListadoAlumnos())
      .then(
        gen => {
          if (gen) {
            return (gen as Alumno[])
          }
          return []
        }
      )
      .catch(
        except => {
          console.warn("Ocurrio un error en el servicio AlumnosService en la función => obtenerAlumnos() ", except)
          throw new Error(except)
        });
  }


  public obtenerAlumnoPorId(idAlumno: string) : Promise<Alumno> {
      return this.generalService.execute(this.configurationService.getObtenerAlumnoPorId(), idAlumno)
      .then(
        gen => {
            return (gen[0] as Alumno)
        }
      )
      .catch(
        except => {
          console.warn("Ocurrio un error en el servicio AlumnosService en la función => obtenerAlumnos() ", except)
          throw new Error(except)
        });
  }

  public obtenerCatalogosAlumnos(): Promise<any> {
    return new Promise(
      resolve => {
        this.generalService.execute(this.configurationService.getObtenerCatalogos())
          .then(
            response => {
              resolve(response)
            },
            error => {
              resolve(false);
              console.log(error)
            }
          )
          .catch(
            excect => {
              console.warn("Ocurrio un error en el servicio AlumnosService en la función => obtenerCatalogosAlumnos() ", excect);
            }
          )
      });
  }

  public crearActualizarRegistroAlumno(alumno: Alumno, accion: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.generalService.execute(
        this.configurationService.crearActualizarAlumno(),
        accion,
        alumno.ID_ALUMNO.toString(),
        alumno.NOMBRE_ALUMNO,
        alumno.EMAIL,
        alumno.TELEFONO_ALUMNO,
        alumno.DIRECCION,
        alumno.FECHA_NACIMIENTO_ALUMNO,
        alumno.PADRE_DE_FAMILIA_O_ENCARGADO,
        alumno.TELEFONO_ENCARGADO,
        alumno.DETALLE_REGISTRO
      )
        .then(
          response => {
            let resultado = this.procesarRespuesta(response);
            resolve(resultado); // Resolver la promesa con el resultado
          },
          error => {
            this.handleError(error);
            reject(error); // Rechazar la promesa si hay un error
          }
        )
        .catch(except => {
          this.handleError(except);
          console.warn(
            "Ocurrió un error en el servicio AlumnosService en la función => crearActualizarRegistroAlumno()",
            except
          );
          reject(except); // Rechazar la promesa en caso de una excepción
        });
    });
  }

  // public crearActualizarRegistroAlumno(alumno : Alumno, accion : string) : Promise<any> {
  //   return new Promise(
  //     resolve => {
  //       this.generalService.execute(this.configurationService.crearActualizarAlumno(),
  //        accion,
  //        alumno.ID_ALUMNO.toString(),
  //        alumno.NOMBRE_ALUMNO,
  //        alumno.APELLIDOS_ALUMNO,
  //        alumno.EDAD.toString(),
  //        alumno.EMAIL,
  //        alumno.TELEFONO_ALUMNO,
  //        alumno.DIRECCION,
  //        alumno.FECHA_NACIMIENTO_ALUMNO,
  //        alumno.ID_GRADO_CARRERA_A_CURSAR,
  //        alumno.ID_ULTIMO_GRADO_CARRERA_APROBADO,
  //        alumno.PADRE_DE_FAMILIA_O_ENCARGADO,
  //        alumno.TELEFONO_ENCARGADO,
  //        alumno.PADECE_ENFERMEDAD.toString(),
  //        alumno.DETALLE_ENFERMEDAD_ALUMNO,
  //        alumno.DETALLE_REGISTRO)
  //         .then(
  //           response => {
  //             this.procesarRespuesta(response);
  //           },
  //           error => {
  //             this.handleError(error);
  //           })
  //         .catch(
  //           except => {
  //             this.handleError(except);
  //             console.warn("Ocurrio un error en el servicio AlumnosService en la función => crearActualizarRegistroAlumno()", except);
  //           });
  //     });
  // }

  private procesarRespuesta(gen: any[] | string): Respuesta {
    console.log(gen);
    let respuesta = new Respuesta();
    respuesta.ID_GENERADO = 0;
    respuesta.RESULTADO = -1;
    respuesta.DESCRIPCION = "SIN RESPUESTA[Excepcion]";
    respuesta.FILAS_AFECTADAS = 0;
    //---- Tipo  = string, excepcion en resultado.
    if (typeof (gen) === "string") {
      respuesta.ERRORES = [gen];
      return respuesta;
    }

    //--- Longitud vacía => sin respuesta
    if (gen.length == 0) {
      respuesta.ERRORES = ["SIN RESPUESTA DEL SERVIDOR"];
      respuesta.DESCRIPCION = "SIN RESPUESTA DEL SERVIDOR";
      return respuesta;
    }

    //---- Evaluar por resultado de éxito | error
    let resultado = 0;
    if (Object.keys(gen[0]).indexOf("RESULTADO") >= 0) {
      //---- Evaluar el resultado
      resultado = gen[0]["RESULTADO"] == null ? -1 : Number(gen[0]["RESULTADO"]);
      let descripcion = gen[0]["DESCRIPCION"] == null ? "" : gen[0]["DESCRIPCION"];
      let idGenerado = gen[0]["ID_GENERADO"] == null ? 0 : Number(gen[0]["ID_GENERADO"]);
      respuesta.ID_GENERADO = idGenerado;
      respuesta.RESULTADO = Number(String(resultado).toString());
      respuesta.DESCRIPCION = descripcion;
      if (resultado >= 1) {
        //---- Resultado Exitoso. Evaluar.
        let filasAfectadas = 0;
        let llaves = Object.keys(gen[0]);
        let posicion = llaves.indexOf("FILAS_AFECTADAS");
        if (posicion > -1) {
          filasAfectadas = Number.parseInt(gen[0]["FILAS_AFECTADAS"]);
        }
        else {
          posicion = llaves.indexOf("Filas_Afectadas");
          if (posicion > -1)
            filasAfectadas = Number.parseInt(gen[0]["Filas_Afectadas"]);
        }

        respuesta.FILAS_AFECTADAS = filasAfectadas;
        respuesta.ERRORES = [];
        return respuesta;
        // return {ID:resultado, DESCRIPCION:descripcion, FILAS_AFECTADAS:filasAfectadas, ERRORES:[]};
      }
      //---- Resultado menor de 1, error en ejecución de procedimiento almacenado.
      respuesta.FILAS_AFECTADAS = 0;
      respuesta.ERRORES = [descripcion];
      return respuesta;
      // return {ID:resultado, DESCRIPCION:descripcion, FILAS_AFECTADAS:0, ERRORES:[descripcion]};

    }

    //---- A este punto, se evaluan los posibles errores.
    //---- Errores en SQL, generan un arreglo de varias posiciones, dependiendo de la cantidad de errores.
    //---- El error general, se genera en la última posicion (ID, DESCRIPCION, FILAS_AFECTADAS).
    let objResultado = gen.pop();
    let mensajes: string[] = [];
    gen.forEach(
      fila => {
        if (Array.isArray(fila)) {
          fila.forEach(
            F => {
              if (Object.keys(F).indexOf("Code") >= 0 && Object.keys(F).indexOf("Message") >= 0)
                mensajes.push(F["Code"] + " - " + F["Message"]);
            }
          );
        }
        else {
          if (Object.keys(fila).indexOf("Code") >= 0 && Object.keys(fila).indexOf("Message") >= 0)
            mensajes.push(fila["Code"] + "-" + fila["Message"]);
        }
      }
    );
    //let resultado:number = -2; // SQL Exception desde el Servidor, se toma como valor 2.
    let descripcion: string = "OCURRIO UN ERROR";
    if (objResultado != null) {
      if (objResultado["RESULTADO"] != null)
        resultado = objResultado["RESULTADO"];
      if (objResultado["DESCRIPCION"] != null)
        descripcion = objResultado["DESCRIPCION"];
    }
    respuesta.RESULTADO = resultado;
    respuesta.DESCRIPCION = descripcion;
    respuesta.ERRORES = mensajes;
    respuesta.FILAS_AFECTADAS = 0;
    return respuesta;
    // return {ID:resultado, DESCRIPCION:descripcion, FILAS_AFECTADAS:0, ERRORES:mensajes};
  }

  private handleError(error: any): Promise<Respuesta> {
    console.error("Error", "Ocurrio un error", error);
    // let respuesta = new Respuesta();
    // respuesta.RESULTADO = -1;
    // respuesta.DESCRIPCION = error.message || error;
    // respuesta.ERRORES = [error.message || error];
    // respuesta.FILAS_AFECTADAS = 0;
    return Promise.reject(error.message || error);
  }
}
