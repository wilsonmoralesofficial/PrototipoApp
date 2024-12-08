import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

	sdd: string = '';
	smm: string = '';
	yyyy: string = '';
	sDate: string = '';

	getToday(): string {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth() + 1; //January is 0!
		this.yyyy = today.getFullYear().toString();

		if (dd < 10) {
			this.sdd = '0' + dd.toString();
		}
		else {
			this.sdd = dd.toString();
		}

		if (mm < 10) {
			this.smm = '0' + mm.toString();
		}
		else {
			this.smm = mm.toString();
		}

		this.sDate = this.yyyy + '-' + this.smm + '-' + this.sdd;
		return this.sDate;
	}

	getTodayHour(separador : boolean = true, horas : boolean = true, formatoMySQL : boolean = true) : string
	{
		var today 	= new Date();
		var dd 		= today.getDate();
		var mm 		= today.getMonth()+1; //January is 0!
		this.yyyy 	= today.getFullYear().toString();

		if(dd < 10){
			this.sdd='0'+dd.toString();
		}
		else{
			this.sdd=dd.toString();
		}

		if(mm<10){
			this.smm='0'+mm.toString();
		}
		else{
			this.smm=mm.toString();
		}

		if (separador)
		{
			if (formatoMySQL)
				this.sDate = this.yyyy + '-' + this.smm + '-' + this.sdd;
			else
				this.sDate =  this.sdd + '-' + this.smm + '-' +this.yyyy;
		}
		else
		{
			if (formatoMySQL) {
				this.sDate = this.yyyy + '' + this.smm + '' + this.sdd;
			}
			else
				this.sDate = this.sdd + '' + this.smm + '' + this.yyyy;

		}

		if (horas)
		{
			if (separador)
			{
				this.sDate = 	this.sDate + " "+ (today.getHours().toString().length == 1 ? '0' + today.getHours().toString() : today.getHours().toString()) +
					":"+ (today.getMinutes().toString().length == 1 ? '0'+today.getMinutes().toString() : today.getMinutes().toString())  +
					":"+ ( today.getSeconds().toString().length == 1 ? '0'+today.getSeconds().toString() : today.getSeconds().toString() ) ;
			}
			else
			{
				this.sDate = 	this.sDate + ""+ (today.getHours().toString().length == 1 ? '0' + today.getHours().toString() : today.getHours().toString()) +
				""+ (today.getMinutes().toString().length == 1 ? '0'+today.getMinutes().toString() : today.getMinutes().toString())  +
				""+ ( today.getSeconds().toString().length == 1 ? '0'+today.getSeconds().toString() : today.getSeconds().toString() ) ;
			}
		}

		return this.sDate;
	}

	getDate(date: Date): string {
		var dd = date.getDate();
		var mm = date.getMonth() + 1; //January is 0!
		this.yyyy = date.getFullYear().toString();

		if (dd < 10) {
			this.sdd = '0' + dd.toString();
		}
		else {
			this.sdd = dd.toString();
		}

		if (mm < 10) {
			this.smm = '0' + mm.toString();
		}
		else {
			this.smm = mm.toString();
		}

		this.sDate = this.yyyy + '-' + this.smm + '-' + this.sdd;

		return this.sDate;
	}

	/**
	 *
	 * @param fecha fecha con formado { year: '1999', month: '09', day: '09' }
	 * @returns fecha en formato yyyy-mm-dd
	 */
	getObjectDateToStringDate(fecha : any): string {
		let day = (fecha.date.day < 10) ? '0' + fecha.date.day.toString() : fecha.date.day.toString();
		let month = (fecha.date.month < 10) ? '0' + fecha.date.month.toString() : fecha.date.month.toString();

		return fecha.date.year + '-' + month + '-' + day;
	}

	/**
	 *
	 * @returns Devuelve la fecha en formato { date: { year: '1999', month: '09', day: '09' } };
	 */
	getObjectTodayDate() {
		let date = new Date();
		let frec = { date: { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() } };
		return frec;
	}

	/**
	 * Fecha en formato dd-mm-yyyy para convertirlo en objeto del tipo { date: { year: yyyy, month: mm, day: dd } };
	 *
	 * @param dd_MM_yyyy Fecha en formato dd-mm-yyyy
	 * @returns Devuelve la fecha en formato { date: { year: '1999', month: '09', day: '09' } };
	 */
	getStringDateToObjectDate(dd_MM_yyyy: string) {
		let dato = dd_MM_yyyy.split('/');
		let frec = { date: { year: Number(dato[2]), month: Number(dato[1]), day: Number(dato[0]) } };

		return frec;
	}

	getDateddMMyyyyyToyyyyMMdd(dd_MM_yyyy: string, abIncluyeHoras:boolean= false)
	{
		if (dd_MM_yyyy == null || dd_MM_yyyy == 'undefined')
			return '1900-01-01';
		if (dd_MM_yyyy.length == 0)
			return '1900-01-01';
		let dato = dd_MM_yyyy.split('/');

      if(dato[0] == null || dato[1] == null || dato[2] == null)
         return "";

      if (abIncluyeHoras == true)
      {
         let dia = dato[0].toString();
         let mes = dato[1].toString();
         let anio = dato[2].split(" ")[0].toString();
         let hora = dato[2].split(" ")[1].toString();
         return anio+"-"+mes+"-"+dia+ " "+hora;
      }

		return dato[2] + '-' + dato[1] + '-' + dato[0];
	}

	getDateyyyyMMddTOddMMyyyyy(yyyy_MM_dd: string) {
		if (yyyy_MM_dd == null || yyyy_MM_dd == 'undefined')
			return '01/01/1900';
		if (yyyy_MM_dd.length == 0)
			return '01/01/1900';
		let dato = yyyy_MM_dd.split('-');
		return dato[2] + '/' + dato[1] + '/' + dato[0];
	}

	/**
	 * ObtenerDiaDelAnio
	 *
	 * Funcion que obtiene el día del año (1 - 365) según la fecha actual de la máquina.
	 */
	 ObtenerDiaDelAnioActual() : string
	 {
		 //---- Obtenemos el primer día del año, generando una fecha basada en el año actual.
		 //---- new Date().getFullYear nos devuelve el año en curso en formato de cuatro digitos.,
		 //---- Creamos una nueva fecha basada en el año en curso, y asignamos el mes 0 = Enero, y el día 1
		 //---- Esta función devuelve un entero, es decir, el número de milisegundos dentro del rango
		 //---- 1 Enero 1970 00:00:00 UTC y a la fecha actualizada con el valor del año.
		 let estampaDeTiempo = new Date().setFullYear(new Date().getFullYear(),0,1)	// Asigna en milisegundos la diferencia hasta el dia (01/01/año actual)

		 //---- Calculamos, segun el valor de estampaDeTiempo (milisegundos) dentro de los milisegundos de 1 día
		 //---- para calcular cuantos días hay dentro del periodo de tiempo desde 1 Enero 1970 00:00:00 UTC al día 1 de enero del año actual
		 //---- Mediante regla de 3
		 //---- x dias = estampaDeTiempo  milisegundos
		 //---- 1 dia  = 86400000 milisegundos (1 hora = 3600 segundos |  (3600 * 24 hora) = xx segundos * 1000 = xx milisegundos )
		 let diasTranscurridos = (estampaDeTiempo / 86400000);

		 //---- Se obtiene el valor entero
		 //---- Devuelve el máximo entero menor o igual a un número
		 diasTranscurridos = Math.floor(diasTranscurridos); //---- valor entero

		 //---- Se obtiene el numero de dias transcurridos desde la media noche del día 1 Enero 1970 00:00:00 UTC hasta la fecha actual, es decir, hoy
		 //---- y de divide dentro del número de milisegundos en 1 día. (1 día = 86400000 milisegundos )
		 let hoy = Math.ceil((new Date().getTime()) / 86400000);

		 //--- Se hace una resta desde los días transcurridos desde la estampa de tiempo a la fecha actual.
		 //---- es decir, se restan del día transcurrido en la variable hoy menos el día transcurrido al 1 de enero del año actual (variable dias transcurridos)
		 let dayOfYear = hoy - diasTranscurridos;

		 // valor devuelto
		 return dayOfYear.toString();
	 }


	 // Devuevle el indice del mes, según los valores
	 obtenerIndiceMes(mes:string) : any
	 {
		 mes = mes.toUpperCase();
		 let indice:number;
		 if (mes == "JAN" || mes == "JANUARY" || mes == "ENERO" || mes == "ENE")
			 return 1;

		 if (mes == "FEB" || mes == "FEBRUARY" || mes == "FEBRERO" )
			 return 2;

		 if (mes == "MAR" || mes == "MARCH" || mes == "MARZO" )
			 return 3;

		 if (mes == "APR" || mes == "APRIL" || mes == "ABRIL" || mes == "ABR" )
			 return 4;

		 if (mes == "MAY" || mes == "MAYO"  )
			 return 5;

		 if (mes == "JUN" || mes == "JUNE" || mes == "JUNIO"  )
			 return 6;

		 if (mes == "JUL" || mes == "JULY" || mes == "JULIO"  )
			 return 7;

		 if (mes == "AUG" || mes == "AUGUST" || mes == "AGOSTO" || mes == "AGO"  )
			 return 8;

		 if (mes == "SEP" || mes == "SEPTEMBER" || mes == "SEPTIEMBRE" )
			 return 9;

		 if (mes == "OCT" || mes == "OCTOBER" || mes == "OCTUBRE" )
			 return 10;

		 if (mes == "NOV" || mes == "NOVEMBER" || mes == "NOVIEMBRE" )
			 return 11;

		 if (mes == "DEC" || mes == "DECEMBER" || mes == "DICIEMBRE" || mes == "DIC" )
			 return 12;
	 }

	 /**
	  * @description
	  * Devuelve el anio en curso.
	  * @author Jose Gonzalez
	  * @date 2022-08-30
	  * @returns
	  * @memberof DateService
	  */
	 obtenerAnioActual():number
	 {
		 return (new Date()).getFullYear();
	 }

	 /**
	  * @description
	  * Funcion que devuelve el indice del mes actual.  El indice inicia desde 0 = Enero, 1= Febrero ... 11 = Diciembre
	  * @author Jose Gonzalez
	  * @date 2022-08-30
	  * @returns
	  * @memberof DateService
	  */
	 obtenerIndiceMesActual(): number
	 {
		 return (new Date().getMonth());
	 }

	 /**
	  * @description
	  * Devuelve el ultimo dia del mes.
	  * @author Jose Gonzalez
	  * @date 2022-08-30
	  * @param {*} anio
	  * @param {*} mes /El indice del mes a evaluar. El indice inicial asi: 0 = Enero / 1 = Febrero ... 11 = Diciembre
	  * @memberof DateService
	  */
	 obtenerUltimoDiaMes(anio : any, mes : any)
	 {
		 return new Date(anio, mes + 1, 0)//.getDate();
	 }

	 obtenerPrimerDiaMes(anio : any, mes : any)
	 {
		 return new Date(anio, mes , 1)//.getDate();
	 }

	 getLast30DaysFromToday():string
	 {
		 let fInicio : Date = new Date();
		 fInicio.setDate((new Date()).getDate() - 30);
		 return this.getDate(fInicio);
	 }

	 /**
	  * getLast90DaysFromToday
	  *
	  * @description Obtiene la fecha correspondiente a 90 días atras a partir del día de hoy (dia actual)
	  * devuelve el formato en yyyy-mm-dd
	  * @author Jose Gonzalez
	  * @date 2021-12-14
	  * @memberof DateService
	  *
	  */
	 getLast90DaysFromToday():string
	 {
		 let fInicio : Date = new Date();
		 fInicio.setDate((new Date()).getDate() - 90);
		 return this.getDate(fInicio);
	 }

	 getLast180DaysFromToday():string
	 {
		 let fInicio : Date = new Date();
		 fInicio.setDate((new Date()).getDate() - 180);
		 return this.getDate(fInicio);
	 }

	 getLastYearFromToday():string
	 {
		 let dia = new Date().getDate();
		 let mes = this.obtenerIndiceMesActual();
		 let anio = this.obtenerAnioActual() -1;
		 let fInicio = new Date(anio, mes, dia);
		 return this.getDate(fInicio);
	 }


	 /**
	  * VerificarAnioValido
	  * @description Verifica que el año sea válido (no mayor a 9999)
	  * Devuelve verdadero si es un año válido, y falso si es un año invalido
	  *
	  * @author Jose Gonzalez
	  * @date 2022-04-08
	  * @param {string} fecha
	  * @returns {boolean}
	  * @memberof DateService
	  */
	 verificarAnioValido(fecha:string):boolean
	 {
		 let Dfecha:Date = new Date(fecha);
		 if (Dfecha.getFullYear() >= 2000 && Dfecha.getFullYear() <=9999)
			 return true;

		 return false;
	 }

	 /**
	  * corregirFormatoFecha
	  *
	  * @description
	  * Devuelve la fecha evaluada en un formato DD/MM/YYYY siempre y cuando esta sea parceable.
	  * @author Jose Gonzalez
	  * @date 2022-06-29
	  * @param {string} fecha
	  * @returns {string}
	  * @memberof DateService
	  */
	 public corregirFormatoFecha(fecha: string): string
	 {
		 let fechaCorregida: string = "";

		 if (fecha == null)
			 return "";

		 if (fecha == "")
			 return "";

		 //---- Evaluar Si existen solamente dígitos
		 let re = /^[0-9]*$/;
		 if (re.test(fecha) == false)
			 return fecha;

		 //---- Hasta este punto, la fecha contiene solamente dígitos entre 0 y 9
		 let dia: string = "";
		 let mes: string = "";
		 let anio: string = "";

		 if (fecha.length >= 4)
		 {
			 if (fecha.length == 4)
			 {
				 dia = fecha.substring(0, 1);
				 mes = fecha.substring(1, 2);
				 anio = fecha.substring(2, fecha.length);
			 }
			 else if (fecha.length == 5)
			 {
				 if (fecha.substring(0, 1) == "0" && fecha.substring(2, 3) == "0")
				 {
					 dia = fecha.substring(0, 2);
					 mes = fecha.substring(2, 4);
					 anio = fecha.substring(4, fecha.length);
				 }
				 else
				 {
					 dia = fecha.substring(0, 1);
					 mes = fecha.substring(1, 3);
					 anio = fecha.substring(3, fecha.length);
				 }
			 }
			 else
			 {
				 dia = fecha.substring(0, 2);
				 mes = fecha.substring(2, 4);
				 anio = fecha.substring(4, fecha.length);
			 }

			 //---- Primero, se asume que día y mes, se estan ingresando de la forma de 2 dígitos...
			 if (Number.parseInt(mes) > 12)
			 {
				 //---- tomar el mes,
				 dia = fecha.substring(0, 2);
				 mes = fecha.substring(2, 3);
			 }

			 //---- Evaluar sí el día es mayor a 30/31 días, o es una fecha válida
			 //if(Number.parseInt(dia) >= 30)
			 //{
			 //---- Obtener el último día del mes ingresado...
			 if ((Number.parseInt(dia) > (new Date(Number.parseInt(anio), Number.parseInt(mes), 0).getDate())))
			 {
				 dia = fecha.substring(0, 1);
			 }
			 //}


			 //---- Verificar si el año es de 4 dígitos, sino, agregar el Siglo..
			 if (anio.length < 4)
			 {
				 let xYear = new Date().getFullYear().toString();

				 xYear = xYear.substring(0, 4 - anio.length);
				 // console.log("YEAR=>",xYear);
				 anio = xYear.toString() + anio.toString();
			 }

			 //---- Evaluar si es una fecha válida, sino devolver la entrada.
			 dia = (dia.length == 1 ? "0" : "") + dia;
			 mes = (mes.length == 1 ? "0" : "") + mes;
			 let fechaFormateada = dia + "/" + mes + "/" + anio;

			 let fechaTesteada = new Date(Number.parseInt(anio), Number.parseInt(mes)-1, Number.parseInt(dia));

			 if (fechaTesteada.toString() == "Invalid Date")
				 return fecha;

			 if (!(this.verificarAnioValido(fechaFormateada)))
			 {
				 fechaFormateada = dia + "/" + mes + "/" + new Date().getFullYear().toString();
			 }
			 return fechaFormateada;
		 }

		 //---- Evaluar el año, para detectar un año válido...
		 return fecha;
	 }

	 /**
	  * @description
	  * Función para evaluar si una fecha es válida.
	  * @author Jose Gonzalez
	  * @date 2023-06-02
	  * @param {*} fecha Fecha en formato dd/mm/yyyy
	  * @returns
	  * @memberof DateService
	  */
	 public esFechaValida_ddmmyyyy(fecha:string)
	 {
		 const regexFecha = /^\d{1,2}\/\d{1,2}\/\d{4}( \d{1,2}:\d{2}(:\d{2})?)?$/;
		 if (!regexFecha.test(fecha)) {
			 return false;
		 }
		 const partes = fecha.split(/[ /:]/);
		 const dia = parseInt(partes[0], 10);
		 const mes = parseInt(partes[1], 10);
		 const anio = parseInt(partes[2], 10);
		 const hora = partes.length > 3 ? parseInt(partes[3], 10) : 0;
		 const minutos = partes.length > 4 ? parseInt(partes[4], 10) : 0;
		 const segundos = partes.length > 5 ? parseInt(partes[5], 10) : 0;
		 const ultDiaMes = new Date(anio, mes, 0).getDate();
		 return (
			 anio >= 1900 &&
			 anio <= 9999 &&
			 mes > 0 &&
			 mes <= 12 &&
			 dia > 0 &&
			 dia <= ultDiaMes &&
			 hora >= 0 &&
			 hora <= 23 &&
			 minutos >= 0 &&
			 minutos <= 59 &&
			 segundos >= 0 &&
			 segundos <= 59
		 );
	 }


 }
