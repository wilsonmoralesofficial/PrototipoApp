import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/core/models/educacion/alumnos';
import { AlumnosService } from 'src/app/core/services/alumnos-service/alumnos.service';
import { SweetalertServiceService } from 'src/app/core/services/sweetalert-service/sweetalert-service.service';

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.css']
})
export class AlumnosFormComponent {

  public carga: boolean = true;
  public alumno: Alumno = new Alumno();
  public modoActualizacionRegistro: boolean = false;
  public buttonGuardarDisabled: boolean = false;
  public catalogodeGradosYCarreras: Array<{ [key: string]: any }> = [];

  // MODAL ESPERA
  @ViewChild('modalEsperaLoader') modalEsperaLoader: any;
  public abrirModalEspera: boolean = true;

  constructor(
    private router: Router,
    private alumnosService: AlumnosService,
    private sweetalertServiceService: SweetalertServiceService
  ) {}

  ngOnInit() {
    this.cargaInicialDatos();
  }

  volverListado() {
    this.router.navigate(['/educacion/direccion/alumnos']);
  }

  onSelectedGradoCarreraACursar(data: string) {
    this.alumno.ID_GRADO_CARRERA_A_CURSAR = (data === '0' || data === '') ? '' : data;
  }

  onSelectedGradoCarreraACursado(data: string) {
    this.alumno.ID_ULTIMO_GRADO_CARRERA_APROBADO = (data !== '0' && data !== '') ? data : '';
  }

  async cargaInicialDatos() {
    const resultado = await this.alumnosService.obtenerCatalogosAlumnos();
    this.catalogodeGradosYCarreras = resultado;
    this.carga = false;
  }

  grabar() {
    if (this.buttonGuardarDisabled) {
      return;
    }
    this.buttonGuardarDisabled = true;
    this.guardarDatos();
  }

  async guardarDatos() {

    this.limpiarDatos();

    const camposObligatoriosVacios = this.validarCamposObligatoriosVacios();
    if (!camposObligatoriosVacios) {
      this.abrirModalEsperaLoader();
      this.iniciarProcesoGrabacion();
    } else {
      this.sweetalertServiceService.alertResponseRequest("Alumnos", "Hay campos obligatorios vacíos", "warning");
      this.buttonGuardarDisabled = false;
    }
  }

  // Limpieza de datos de alumno
  limpiarDatos(): void {
    // Implementar lógica de limpieza si es necesario
  }

  validarCamposObligatoriosVacios(): boolean {
    return !(this.alumno.NOMBRE_ALUMNO && this.alumno.APELLIDOS_ALUMNO &&
      this.alumno.TELEFONO_ALUMNO && this.alumno.EMAIL &&
      this.alumno.FECHA_NACIMIENTO_ALUMNO && this.alumno.EDAD &&
      this.alumno.ID_GRADO_CARRERA_A_CURSAR && this.alumno.ID_ULTIMO_GRADO_CARRERA_APROBADO &&
      this.alumno.PADRE_DE_FAMILIA_O_ENCARGADO && this.alumno.TELEFONO_ENCARGADO &&
      this.alumno.PADECE_ENFERMEDAD);
  }

  async iniciarProcesoGrabacion() {
    let resultado = null;
    let errorEnGrabar = false;
    const accion = this.modoActualizacionRegistro ? '2' : '1';

    try {
      resultado = await this.alumnosService.crearActualizarRegistroAlumno(this.alumno, accion);
    } catch (error) {
      errorEnGrabar = true;
    }

    if (resultado == null || errorEnGrabar) {
      this.cerrarModalLoader();
      this.sweetalertServiceService.alertResponseRequest("Alumnos", "Ocurrió un error inesperado al guardar los cambios", "error");
      this.buttonGuardarDisabled = false;
      this.router.navigate(['educacion/direccion/alumnos']);
      return;
    }

    if (resultado.RESULTADO !== 1) {
      this.buttonGuardarDisabled = false;
      this.cerrarModalLoader();
      this.sweetalertServiceService.alertResponseRequest("Alumnos", `Ocurrió un error al ${(this.modoActualizacionRegistro) ? 'actualizar' : 'crear'}`, "error");
      return;
    }

   this.cerrarModalLoader();
    const mensaje = this.modoActualizacionRegistro ? "Registro Actualizado con Éxito" : "Registro creado con Éxito";
    this.sweetalertServiceService.alertResponseRequest("Alumnos", mensaje, "success");
    this.router.navigate(['educacion/direccion/alumnos']);
    this.buttonGuardarDisabled = false;
  }

  abrirModalEsperaLoader() {
    if (this.abrirModalEspera) {
      this.modalEsperaLoader.abrirModal();
    }
  }

  cerrarModalLoader() {
    setTimeout(() => {
      this.modalEsperaLoader.cerrarModal();
      this.abrirModalEspera = false;
    }, 500);
  }
}
