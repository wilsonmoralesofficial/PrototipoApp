import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
	constructor() { }

	public filterValue: string = '';
	public sWidthValue: string = '';
	@Output() filterChange = new EventEmitter();

	@Input()
	public get filter() {
		return this.filterValue;
	}

	public set filter(value) {
		this.filterValue = value;
		this.filterChange.emit(this.filterValue);
	}

	@Input()
	public get sWidth() {
		return this.sWidthValue;
	}

	public set sWidth(value) {
		this.sWidthValue = value;
	}

	limpiar() {
		this.filter = '';
	}
}
