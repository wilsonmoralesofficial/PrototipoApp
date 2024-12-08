import { Pipe, PipeTransform } from '@angular/core';
import { Utils } from 'src/app/core/services/utils/utils.service';

@Pipe({
  name: 'filtroGradosCarreras'
})
export class FiltroGradosCarrerasPipe implements PipeTransform {

  constructor(
    private utils: Utils
  ) { }

  transform(listadoAlumnos: any[], filtroTexto: string = ''): any[] {
    if (!listadoAlumnos || listadoAlumnos.length === 0) {
      return [];
    }

    filtroTexto = filtroTexto.trim().toUpperCase();

    return listadoAlumnos.filter((alumno: any) => {
      let descripcion = alumno.DESCRIPCION ? alumno.DESCRIPCION.toUpperCase() : '';

      // Reemplazar tildes y comparar
      const descripcionNormalizada = this.utils.reemplazarTilde(descripcion);
      const filtroNormalizado = this.utils.reemplazarTilde(filtroTexto);

      // Si el filtro está vacío, devolvemos todos los alumnos
      if (filtroTexto === '') {
        return true;
      }

      // Filtrar por coincidencia
      return descripcionNormalizada.includes(filtroNormalizado) || descripcion.includes(filtroTexto);
    });
  }
}
