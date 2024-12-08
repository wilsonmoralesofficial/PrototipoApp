import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from 'src/app/core/services/utils/utils.service';

@Pipe({
  name: 'alumnosFiltro'
})
export class AlumnosPipe implements PipeTransform {

  constructor(
    private utils: Utils
  ) { }

  transform(listadoAlumnos: any[], filtroTexto: string = ''): any[] {
    if (!listadoAlumnos || listadoAlumnos.length === 0) {
      return [];
    }

    filtroTexto = filtroTexto.trim().toUpperCase();

    return listadoAlumnos.filter((alumno: any) => {
      const nombre = alumno.NOMBRE_ALUMNO ? alumno.NOMBRE_ALUMNO.toUpperCase() : '';

      // Reemplazar tildes y comparar
      const nombreNormalizado = this.utils.reemplazarTilde(nombre);
      const filtroNormalizado = this.utils.reemplazarTilde(filtroTexto);

      // Si el filtro está vacío, devolvemos todos los alumnos
      if (filtroTexto === '') {
        return true;
      }

      // Filtrar por coincidencia
      return nombreNormalizado.includes(filtroNormalizado) || nombre.includes(filtroTexto);
    });
  }

}
