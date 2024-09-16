import { Component, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-modal-espera-loader',
  templateUrl: './modal-espera-loader.component.html',
  styleUrls: ['./modal-espera-loader.component.css']
})
export class ModalEsperaLoaderComponent {
  @Input() titulo: string = 'Por favor espera un momento....';
  @Input() eliminarDOM: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    try {
      let element = document.getElementById('modal-espera-loader');
      if (element != null) {
        //console.log("$('#modal-alert-loader')",$('#modal-alert-loader'));
        this.cerrarModal();
      }
    }
    catch (error) {
    }
  }

  abrirModal() {
    // Previene que se de clic fuera del dialogo y se oculte el mismo
    $('#modal-espera-loader').modal({ backdrop: 'static', keyboard: false });
    // Mueve el dialogo al final de la etiqueta body, de lo contrario, el dialogo queda dentro del backdrop
    $('#modal-espera-loader').appendTo("body").modal('show');
    // Cambia el foco al dialogo.
    $('#modal-espera-loader').focus();
    $('#modal-espera-loader').on('hidden.bs.modal', ((e : any) => {
      if (this.eliminarDOM) {
        setTimeout(() => {
          try {
            $('#modal-espera-loader').remove();
          } catch (error) {
          }
        }, 100);
      }
    }));
  }

  cerrarModal() {
    let element = document.getElementById('modal-espera-loader');
    if (element != null) {
      if ($('#modal-espera-loader') != null)
        console.log('Cerrando Modal')
        $('#modal-espera-loader').modal('hide');
    }
  }
}
