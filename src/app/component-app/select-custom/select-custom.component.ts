import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';

// Uso de JQuery
declare var $: any;

@Component({
  selector: 'app-select-custom',
  templateUrl: './select-custom.component.html',
  styleUrls: ['./select-custom.component.css']
})
export class SelectCustomComponent {


  @Input() data : Array<any> = [];
  @Input() valor : string = '';
  @Input() textoSelect = '';
  @Output() selectedData : EventEmitter<string> = new EventEmitter()
  selected : string = '';
  carga : boolean = true;

  ngOnInit(){
    this.cargandoSelect();
  }

  cargandoSelect(){

    let alreadyExists = this.data.find(item => item.id === '0');

    if (!alreadyExists) {
      // Solo añade la opción si no existe,esto evita que se duplique el elemento 0
      this.data.unshift({ id: '0', text: this.textoSelect });
    }

    this.carga = false;


    if(this.valor != '' && this.valor != null)
    {
        this.selected = this.valor.toString();
        console.log(this.selected)
    }

  }


  // 2. Función para manejar la selección
  onSelectChange(selectedValue: any): void {
    this.selected = selectedValue.target.value;
    this.selectedData.emit(this.selected);
  }


}
