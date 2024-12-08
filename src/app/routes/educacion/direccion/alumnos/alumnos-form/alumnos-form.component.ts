import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/app/core/models/educacion/alumnos';
import { AlumnosService } from 'src/app/core/services/alumnos-service/alumnos.service';
import { DateService } from 'src/app/core/services/date-service/date.service';
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
    private activedRoute: ActivatedRoute,
    private alumnosService: AlumnosService,
    private sweetalertServiceService: SweetalertServiceService,
    private dateService : DateService
  ) {


   }

  ngOnInit() {

    this.cargaInicialDatos();
  }


  async cargaInicialDatos() {

    try {

      await this.cargarCatalogos()
      let params = this.activedRoute.snapshot.params;

      if (params['id']) {
        this.modoActualizacionRegistro = true;
        this.alumno.ID_ALUMNO = params['id']

        console.log(params['id']);
        this.cargarAlumno(this.alumno.ID_ALUMNO.toString());
        return;
      }

      this.carga = false;
    } catch (error) {

      this.carga = false;
    }
  }

  async cargarCatalogos() {
    let resultado = null;

    try {
      resultado = await this.alumnosService.obtenerCatalogosAlumnos();
    } catch (error) {
      this.sweetalertServiceService.alertResponseRequest("Alumnos", "Ocurrió un error al cargar los catalogos de alumnos", "error");
    }

    this.catalogodeGradosYCarreras = resultado;

  }

  async cargarAlumno(idAlumno : string){

    let resultado = null;

    try {
      resultado = await this.alumnosService.obtenerAlumnoPorId(idAlumno);
    } catch (error) {
      this.sweetalertServiceService.alertResponseRequest("Alumnos","Ocurrio un error consultando alumno","error");
      this.carga = false;
      return
    }

    this.alumno = resultado


    console.log(this.alumno);
    let valorAlumno = this.dateService.getDateddMMyyyyyToyyyyMMdd(this.alumno.FECHA_NACIMIENTO_ALUMNO);
    this.alumno.FECHA_NACIMIENTO_ALUMNO = valorAlumno;
    this.carga = false;
  }

  onSelectedGradoCarreraACursar(data: string) {
    this.alumno.ID_GRADO_CARRERA_A_CURSAR = (data === '0' || data === '') ? '' : data;
  }

  onSelectedGradoCarreraACursado(data: string) {
    this.alumno.ID_ULTIMO_GRADO_CARRERA_APROBADO = (data !== '0' && data !== '') ? data : '';
  }

  volverListado() {
    this.router.navigate(['/educacion/direccion/alumnos']);
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
    return !(this.alumno.NOMBRE_ALUMNO &&
      this.alumno.TELEFONO_ALUMNO &&
      this.alumno.FECHA_NACIMIENTO_ALUMNO);
  }

  async iniciarProcesoGrabacion() {
    let resultado = null;
    let errorEnGrabar = false;
    const accion = this.modoActualizacionRegistro ? '2' : '1';

    try {
      resultado = await this.alumnosService.crearActualizarRegistroAlumno(this.alumno, accion);
    } catch (error) {
      console.log(error)
      errorEnGrabar = true;
    }

    if (resultado == null || errorEnGrabar) {
      this.cerrarModalLoader();
      this.sweetalertServiceService.alertResponseRequest("Alumnos", "Ocurrió un error inesperado al guardar los cambios", "error");
      this.buttonGuardarDisabled = false;
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
    setTimeout(() => {
      this.router.navigate(['educacion/direccion/alumnos']);
    }, 1000);

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
