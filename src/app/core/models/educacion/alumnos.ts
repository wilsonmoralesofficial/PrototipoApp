export class Alumno {

  public ID_ALUMNO: number = 0;
  public CODIGO_UNICO_ALUMNO: string = '';
  public NOMBRE_ALUMNO: string = '';
  public TELEFONO_ALUMNO : string = '';
  public EMAIL: string = '';
  public DIRECCION: string = '';
  public EDAD: Number = 0;
  public ID_GRADO_CARRERA_A_CURSAR: string = '';
  public GRADO_CARRERA_A_CURSAR: string = '';
  public ID_ULTIMO_GRADO_CARRERA_APROBADO: string = '';
  public ULTIMO_GRADO_CARRERA_APROBADO: string = "";
  public FECHA_CREACION : string = '';
  public FECHA_ACTUALIZACION : string = '';
  public FECHA_NACIMIENTO_ALUMNO : string = '';
  public ATENDIDO_POR : string = ''; //DE MOMENTO SE QUEMARÁ EL NOMBRE EN DB, EN SU MOMENTO SE RELACIONARÁ CON SU TABLA CORRESPONDIENTE
  public PADRE_DE_FAMILIA_O_ENCARGADO : string = '';
  public TELEFONO_ENCARGADO : string = '';
  public PADECE_ENFERMEDAD : string = '0';
  public DETALLE_ENFERMEDAD_ALUMNO : string = '';
  public DETALLE_REGISTRO : string = '';
	constructor(
  ){
  }
}
