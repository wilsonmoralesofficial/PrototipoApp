import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// Libreria PapaParse, lee archivos CSV de forma masiva.
//const papa: any = require("papaparse");

// Libreria para comprimir en zlib
//const pako: any = require("pako");

// import uniqid from 'uniqid';


declare function escape(s: string): string;
declare function unescape(s: string): string;

@Injectable({
  providedIn: 'root'
})
export class Utils {

  private configuraciones : any;

  constructor(private sanitizer: DomSanitizer) { }


  toCapitalize(s: string): string {
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  getStringWithoutSpecialCharacters(name: string): string {
    let valor = name;
    let extension = '';

    this.EXTENSIONES.forEach(element => {
      if (valor.endsWith('.' + element.extension)) {
        extension = element.extension;
        valor = valor.replace('.' + element.extension, '');
      }
    });

    valor = valor.replace(/[^\w\s]/gi, '');

    valor = valor + '.' + extension;
    valor = valor.replace(/\s/g, '_');

    return valor;
  }

  EXTENSIONES: Array<any> = [
    { extension: 'ai', descripcion: 'Documento Adobe Ilustrator' },
    { extension: 'aif', descripcion: 'Archivo de intercambio de audio' },
    { extension: 'avi', descripcion: 'Audio Video Interleave' },
    { extension: 'bat', descripcion: 'Archivos por lotes' },
    { extension: 'bin', descripcion: 'Archivo binario' },
    { extension: 'bmp', descripcion: 'Mapa de bits de Windows' },
    { extension: 'bup', descripcion: 'Archivo de copia de seguridad' },
    { extension: 'cab', descripcion: 'Microsoft Windows archivo comprimido' },
    { extension: 'cda', descripcion: 'Atajo CD Audio Track' },
    { extension: 'cdr', descripcion: 'Corel Draw Vector o CD de audio sin procesar' },
    { extension: 'chm', descripcion: 'Microsoft HTML Help comprimido' },
    { extension: 'dat', descripcion: 'Datos' },
    { extension: 'divx', descripcion: 'Vídeo DivX' },
    { extension: 'dll', descripcion: 'Biblioteca de vínculos dinámicos' },
    { extension: 'dmg', descripcion: 'Imagen de disco' },
    { extension: 'doc', descripcion: 'Documento Microsoft Word' },
    { extension: 'docx', descripcion: 'Documento Microsoft Word' },
    { extension: 'dwg', descripcion: 'AutoCAD DWG' },
    { extension: 'eml', descripcion: 'Mensaje de correo electrónico' },
    { extension: 'eps', descripcion: 'PostScript encapsulado' },
    { extension: 'exe', descripcion: 'Archivo ejecutable' },
    { extension: 'fla', descripcion: 'Adobe Flash' },
    { extension: 'flv', descripcion: 'Flash Video' },
    { extension: 'gif', descripcion: 'Imagen GIF (Graphics Interchange Format)' },
    { extension: 'gz', descripcion: 'Gzip archivo empaquetado' },
    { extension: 'hqx', descripcion: 'BinHex' },
    { extension: 'htm', descripcion: 'Web – Hypertext Markup Language (HTML)' },
    { extension: 'html', descripcion: 'Web – Hypertext Markup Language (HTML)' },
    { extension: 'ifo', descripcion: 'DVD Información del archivo' },
    { extension: 'indd', descripcion: 'Documento de InDesign' },
    { extension: 'iso', descripcion: 'Imagen de disco óptico' },
    { extension: 'jar', descripcion: 'Archivo Java' },
    { extension: 'jpeg', descripcion: 'De imagen JPEG' },
    { extension: 'jpg', descripcion: 'Imagen JPEG' },
    { extension: 'lnk', descripcion: 'Acceso directo – Atajo' },
    { extension: 'log', descripcion: 'Archivo de registro' },
    { extension: 'm4a', descripcion: 'MPEG-4 Parte 14' },
    { extension: 'm4b', descripcion: 'MPEG-4 Parte 14' },
    { extension: 'm4p', descripcion: 'AAC protegido Archivo' },
    { extension: 'm4v', descripcion: 'MPEG-4 Parte 14' },
    { extension: 'mdb', descripcion: 'Microsoft Access' },
    { extension: 'mid', descripcion: 'Audio midi – Musical Instrument Digital Interface' },
    { extension: 'mov', descripcion: 'QuickTime' },
    { extension: 'mp2', descripcion: 'MPEG-1 Audio Layer II' },
    { extension: 'mp3', descripcion: 'Archivo de Audio MP3' },
    { extension: 'mp4', descripcion: 'MPEG-4 Parte 14' },
    { extension: 'mpeg', descripcion: 'MPEG 1 Sistema Stream' },
    { extension: 'mpg', descripcion: 'MPEG-1 Video' },
    { extension: 'msi', descripcion: 'Windows Installer' },
    { extension: 'mswmm', descripcion: 'Windows Movie Maker Archivo de Proyecto' },
    { extension: 'pdf', descripcion: 'Documento PDF' },
    { extension: 'png', descripcion: 'Graficos – Portable Network Graphics' },
    { extension: 'pps', descripcion: 'Mostrar PowerPoint' },
    { extension: 'ppt', descripcion: 'Microsoft PowerPoint Presentation' },
    { extension: 'pptx', descripcion: 'Microspft PowerPoint 2007+' },
    { extension: 'ps', descripcion: 'PostScript' },
    { extension: 'psd', descripcion: 'Photoshop documento' },
    { extension: 'pst', descripcion: 'Microsoft Outlook emails – Personal Storage' },
    { extension: 'pub', descripcion: 'Microsoft Publisher' },
    { extension: 'qbb', descripcion: 'QuickBooks archivo de copia de seguridad' },
    { extension: 'qbw', descripcion: 'Hoja de cálculo; QuickBooks para Windows' },
    { extension: 'ram', descripcion: 'RealAudio' },
    { extension: 'rar', descripcion: 'RAR Archive' },
    { extension: 'rm', descripcion: 'RealMedia' },
    { extension: 'rmvb', descripcion: 'RealMedia Variable Bitrate' },
    { extension: 'rtf', descripcion: 'Formato de texto enriquecido' },
    { extension: 'sql', descripcion: 'Lenguaje de consulta estructurado' },
    { extension: 'ss', descripcion: 'Gráficos de mapas de bits; Splash' },
    { extension: 'swf', descripcion: 'SWF de gráficos vectoriales' },
    { extension: 'tgz', descripcion: 'Archivo; WinZipNT – TAR – GNUzip' },
    { extension: 'tif', descripcion: 'Tagged Image File Format' },
    { extension: 'torrent', descripcion: 'BitTorrent' },
    { extension: 'ttf', descripcion: 'Tipos de Fuente – Letra' },
    { extension: 'txt', descripcion: 'Archivo de texto plano' },
    { extension: 'vcd', descripcion: 'Virtual CD-ROM CD Archivo de imagen' },
    { extension: 'vob', descripcion: 'DVD-Video Object' },
    { extension: 'wav', descripcion: 'Waveform Audio Formato' },
    { extension: 'wma', descripcion: 'Windows Media Audio' },
    { extension: 'wmv', descripcion: 'Windows Media Video' },
    { extension: 'wpd', descripcion: 'WordPerfect Document' },
    { extension: 'wps', descripcion: 'Documento de texto, MS Works' },
    { extension: 'xls', descripcion: 'Microsoft Excel hoja de cálculo' },
    { extension: 'xlsx', descripcion: 'Microsoft Excel 2007+' },
    { extension: 'zip', descripcion: 'Archivo empaquetado' }
  ];

  LETRAS : any  = {
    'A': 10, 'B': 12, 'C': 13, 'D': 14, 'E': 15,
    'F': 16, 'G': 17, 'H': 18, 'I': 19, 'J': 20,
    'K': 21, 'L': 23, 'M': 24, 'N': 25, 'O': 26,
    'P': 27, 'Q': 28, 'R': 29, 'S': 30, 'T': 31,
    'U': 32, 'V': 34, 'W': 35, 'X': 36, 'Y': 37,
    'Z': 38
  };

  /**
   * EsNumeroContenedor
   *
   * Verifica si un texto cumple o bien, inicia con el algoritmo de para ser un numero de contenedor.
   *
   * Referencia OrangeScrum | 30-11-2017 | Aspcloud Task #7 - CE00004 – Validación de número de contenedor
   *
   * @param asNumeroContenedor Texto a validar
   *
   * @returns boolean
   */
  public EsNumeroContenedor(asNumeroContenedor: string = ""): boolean {
    let regExp: any;
    //et regExp = /^[a-zA-Z0-9_-]$/;
    //let regExp = /^[a-zA-Z][a-zA-Z][a-zA-Z][ujzUJZ][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/
    regExp = /^[a-zA-Z][a-zA-Z][a-zA-Z][ujzUJZ][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/
    let result: boolean = regExp.test(asNumeroContenedor);
    if (result === false) {
      // Verifico si por lo menos, los primeros 4 caracteres cumplen con la condición de ser un número de contenedor.
      regExp = /^[a-zA-Z][a-zA-Z][a-zA-Z][ujzUJZ][0-9]+$/
      result = regExp.test(asNumeroContenedor);
    }


    return result;
  }

  public verificadorContenedor(contenedor: string) {
    // Referencia OrangeScrum | 30-11-2017
    // Aspcloud Task # 7 -  CE00004 – Validación de número de contenedor
    let validaNumeroContenedor = this.EsNumeroContenedor(contenedor);
    if /*(validaNumeroContenedor)*/(contenedor.length == 11) {
      if (validaNumeroContenedor) {
        let numero_verificador = parseInt(contenedor.substr(contenedor.length - 1));
        //console.log('numero verificador: ' + numero_verificador)
        let valores = contenedor.split('');
        //console.log(valores);
        let suma = 0;
        for (let i = 0; i < (valores.length - 1); i++) {
          let valor = 0;
          if (i < 4) {
            valor = this.LETRAS[valores[i]];
          }
          else valor = parseInt(valores[i]);

          suma = suma + (valor * Math.pow(2, i));
        }

        let division = Math.trunc(suma / 11);
        let multiplicacion = division * 11;
        let resultado = suma - multiplicacion;

        if (resultado == numero_verificador)
          return true;
        else
          return false;
      }
      else
        return false;
    }
    else {
      return true;
    }
  }

  // TestComprimeDescomprimePakoZLIB() {
  //   let test = 'prueba';
  //   let binaryString = pako.deflate(test, { to: 'string' });
  //   let restored = pako.inflate(binaryString, { to: 'string' });
  // }

  // ComprimePakoZLIB(textoPlano: string = ""): string {
  //   let result = btoa((<string>this.pack('L', textoPlano.length)) + <string>pako.deflate(textoPlano, { to: 'string' }));
  //   return result; // Retorna en base64
  // }

  // DescomprimePakoZLIB(textoCompreso: string = ""): string {
  //   let result = pako.inflate(textoCompreso, { to: 'string' });
  //   return result;
  // }

  stringToBinary(str : any, spaceSeparatedOctets : any) {
    return str.replace(/[\s\S]/g, ((str : any) => {
      str = this.zeroPad(str.charCodeAt().toString(2));
      return !1 == spaceSeparatedOctets ? str : str + " "
    }));
  }
  zeroPad(num : any) {
    return "00000000".slice(String(num).length) + num;
  }

  pack(format : any, longitud : any) {
    //  discuss at: http://locutus.io/php/pack/
    // original by: Tim de Koning (http://www.kingsquare.nl)
    //    parts by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // bugfixed by: Tim de Koning (http://www.kingsquare.nl)
    //      note 1: Float encoding by: Jonas Raoni Soares Silva
    //      note 1: Home: http://www.kingsquare.nl/blog/12-12-2009/13507444
    //      note 1: Feedback: phpjs-pack@kingsquare.nl
    //      note 1: "machine dependent byte order and size" aren't
    //      note 1: applicable for JavaScript; pack works as on a 32bit,
    //      note 1: little endian machine.
    //   example 1: pack('nvc*', 0x1234, 0x5678, 65, 66)
    //   returns 1: '\u00124xVAB'
    //   example 2: pack('H4', '2345')
    //   returns 2: '#E'
    //   example 3: pack('H*', 'D5')
    //   returns 3: 'Õ'
    //   example 4: pack('d', -100.876)
    //   returns 4: "\u0000\u0000\u0000\u0000\u00008YÀ"
    //        test: skip-1
    let formatPointer = 0;
    let argumentPointer = 1;
    let result = '';
    let argument = '';
    let i = 0;
    let r = [];
    let instruction, quantifier : any, word, precisionBits, exponentBits, extraNullCount;
    // vars used by float encoding
    let bias;
    let minExp;
    let maxExp;
    let minUnnormExp;
    let status;
    let exp;
    let len;
    let bin;
    let signal;
    let n;
    let intPart;
    let floatPart;
    let lastBit;
    let rounded;
    let j;
    let k;
    let tmpResult : any;
    while (formatPointer < format.length) {
      instruction = format.charAt(formatPointer);
      quantifier = '';
      formatPointer++;
      while ((formatPointer < format.length) && (format.charAt(formatPointer)
        .match(/[\d*]/) !== null)) {
        quantifier += format.charAt(formatPointer);
        formatPointer++;
      }
      if (quantifier === '') {
        quantifier = '1';
      }
      // Now pack variables: 'quantifier' times 'instruction'
      switch (instruction) {
        case 'a':
        case 'A':
          // NUL-padded string
          // SPACE-padded string
          if (typeof arguments[argumentPointer] === 'undefined') {
            throw new Error('Warning:  pack() Type ' + instruction + ': not enough arguments');
          }
          else {
            argument = String(arguments[argumentPointer]);
          }
          if (quantifier === '*') {
            quantifier = argument.length;
          }
          for (i = 0; i < quantifier; i++) {
            if (typeof argument[i] === 'undefined') {
              if (instruction === 'a') {
                result += String.fromCharCode(0);
              }
              else {
                result += ' ';
              }
            }
            else {
              result += argument[i];
            }
          }
          argumentPointer++;
          break
        case 'h':
        case 'H':
          // Hex string, low nibble first
          // Hex string, high nibble first
          if (typeof arguments[argumentPointer] === 'undefined') {
            throw new Error('Warning: pack() Type ' + instruction + ': not enough arguments');
          }
          else {
            argument = arguments[argumentPointer];
          }
          if (quantifier === '*') {
            quantifier = argument.length;
          }
          if (quantifier > argument.length) {
            let msg = 'Warning: pack() Type ' + instruction + ': not enough characters in string';
            throw new Error(msg);
          }
          for (i = 0; i < quantifier; i += 2) {
            // Always get per 2 bytes...
            word = argument[i];
            if (((i + 1) >= quantifier) || typeof argument[i + 1] === 'undefined') {
              word += '0';
            }
            else {
              word += argument[i + 1];
            }
            // The fastest way to reverse?
            if (instruction === 'h') {
              word = word[1] + word[0];
            }
            result += String.fromCharCode(parseInt(word, 16));
          }
          argumentPointer++;
          break;
        case 'c':
        case 'C':
          // signed char
          // unsigned char
          // c and C is the same in pack
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer]);
            argumentPointer++;
          }
          break;
        case 's':
        case 'S':
        case 'v':
          // signed short (always 16 bit, machine byte order)
          // unsigned short (always 16 bit, machine byte order)
          // s and S is the same in pack
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            argumentPointer++;
          }
          break;
        case 'n':
          // unsigned short (always 16 bit, big endian byte order)
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning: pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            argumentPointer++;
          }
          break;
        case 'i':
        case 'I':
        case 'l':
        case 'L':
        case 'V':
          // signed integer (machine dependent size and byte order)
          // unsigned integer (machine dependent size and byte order)
          // signed long (always 32 bit, machine byte order)
          // unsigned long (always 32 bit, machine byte order)
          // unsigned long (always 32 bit, little endian byte order)
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 16 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 24 & 0xFF);
            argumentPointer++;
          }
          break;
        case 'N':
          // unsigned long (always 32 bit, big endian byte order)
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(arguments[argumentPointer] >> 24 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 16 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] >> 8 & 0xFF);
            result += String.fromCharCode(arguments[argumentPointer] & 0xFF);
            argumentPointer++;
          }
          break;
        case 'f':
        case 'd':
          // float (machine dependent size and representation)
          // double (machine dependent size and representation)
          // version based on IEEE754
          precisionBits = 23;
          exponentBits = 8;
          if (instruction === 'd') {
            precisionBits = 52;
            exponentBits = 11;
          }
          if (quantifier === '*') {
            quantifier = arguments.length - argumentPointer;
          }
          if (quantifier > (arguments.length - argumentPointer)) {
            throw new Error('Warning:  pack() Type ' + instruction + ': too few arguments');
          }
          for (i = 0; i < quantifier; i++) {
            argument = arguments[argumentPointer];
            bias = Math.pow(2, exponentBits - 1) - 1;
            minExp = -bias + 1;
            maxExp = bias;
            minUnnormExp = minExp - precisionBits;
            status = isNaN(n = parseFloat(argument)) || n === -Infinity || n === +Infinity ? n : 0;
            exp = 0;
            len = 2 * bias + 1 + precisionBits + 3;
            bin = new Array(len);
            signal = (n = status !== 0 ? 0 : n) < 0;
            n = Math.abs(n);
            intPart = Math.floor(n);
            floatPart = n - intPart;
            for (k = len; k;) {
              bin[--k] = 0;
            }
            for (k = bias + 2; intPart && k;) {
              bin[--k] = intPart % 2;
              intPart = Math.floor(intPart / 2);
            }
            for (k = bias + 1; floatPart > 0 && k; --floatPart) {
              bin[++k] = ((<any>((floatPart *= 2) >= 1) - 0));
            }
            for (k = -1; ++k < len && !bin[k];) { }
            // @todo: Make this more readable:
            var key = (lastBit = precisionBits - 1 +
              (k =
                (exp = bias + 1 - k) >= minExp &&
                  exp <= maxExp ? k + 1 : bias + 1 - (exp = minExp - 1))) + 1;
            if (bin[key]) {
              if (!(rounded = bin[lastBit])) {
                for (j = lastBit + 2; !rounded && j < len; rounded = bin[j++]) { }
              }
              for (j = lastBit + 1; rounded && --j >= 0;
                (bin[j] = <any>!bin[j] - 0) && (rounded = 0)) { }
            }
            for (k = k - 2 < 0 ? -1 : k - 3; ++k < len && !bin[k];) { }
            if ((exp = bias + 1 - k) >= minExp && exp <= maxExp) {
              ++k;
            } else {
              if (exp < minExp) {
                if (exp !== bias + 1 - len && exp < minUnnormExp) {
                  // "encodeFloat::float underflow"
                }
                k = bias + 1 - (exp = minExp - 1);
              }
            }
            if (intPart || status !== 0) {
              exp = maxExp + 1;
              k = bias + 2;
              if (status === -Infinity) {
                signal = 1;
              } else if (isNaN(status)) {
                bin[k] = 1;
              }
            }
            n = Math.abs(exp + bias);
            tmpResult = '';
            for (j = exponentBits + 1; --j;) {
              tmpResult = (n % 2) + tmpResult;
              n = n >>= 1;
            }
            n = 0;
            j = 0;
            k = (tmpResult = (signal ? '1' : '0') + tmpResult + (bin
              .slice(k, k + precisionBits)
              .join(''))
            ).length;
            r = [];
            for (; k;) {
              n += (1 << j) * tmpResult.charAt(--k);
              if (j === 7) {
                r[r.length] = String.fromCharCode(n);
                n = 0;
              }
              j = (j + 1) % 8;
            }
            r[r.length] = n ? String.fromCharCode(n) : '';
            result += r.join('');
            argumentPointer++;
          }
          break;
        case 'x':
          // NUL byte
          if (quantifier === '*') {
            throw new Error('Warning: pack(): Type x: \'*\' ignored');
          }
          for (i = 0; i < quantifier; i++) {
            result += String.fromCharCode(0);
          }
          break;
        case 'X':
          // Back up one byte
          if (quantifier === '*') {
            throw new Error('Warning: pack(): Type X: \'*\' ignored');
          }
          for (i = 0; i < quantifier; i++) {
            if (result.length === 0) {
              throw new Error('Warning: pack(): Type X:' + ' outside of string');
            } else {
              result = result.substring(0, result.length - 1);
            }
          }
          break;
        case '@':
          // NUL-fill to absolute position
          if (quantifier === '*') {
            throw new Error('Warning: pack(): Type X: \'*\' ignored');
          }
          if (quantifier > result.length) {
            extraNullCount = quantifier - result.length;
            for (i = 0; i < extraNullCount; i++) {
              result += String.fromCharCode(0);
            }
          }
          if (quantifier < result.length) {
            result = result.substring(0, quantifier);
          }
          break
        default:
          throw new Error('Warning: pack() Type ' + instruction + ': unknown format code');
      }
    }
    if (argumentPointer < arguments.length) {
      var msg2 = 'Warning: pack(): ' + (arguments.length - argumentPointer) + ' arguments unused';
      throw new Error(msg2);
    }
    return result;
  }

  reemplazarTilde(str: string): string {
    str = str.replace(/[Á]/, "A");
    str = str.replace(/[É]/, "E");
    str = str.replace(/[Í]/, "I");
    str = str.replace(/[Ó]/, "O");
    str = str.replace(/[ÚÜ]/, "U");
    str = str.replace(/[Ñ]/, "N");

    str = str.replace(/[á]/, "a");
    str = str.replace(/[é]/, "e");
    str = str.replace(/[í]/, "i");
    str = str.replace(/[ó]/, "o");
    str = str.replace(/[ú]/, "u");
    str = str.replace(/[ñ]/, "n");

    return str;
  }

  reemplazarCaracteresInvalidos(data: string): string {
    let re = /[\t]/gi;
    re = /[\t]/gi;
    data = data.replace(re, " ");

    data = data.replace(/(\r\n|\n|\r)/gm, " ");
    return data.replace(new RegExp('[^\u0000-\u00FF]', 'g'), ((c) => ' '))
  }

  valNullUndefinedToEmpty(val : any): boolean {
    let isValEmpty: boolean = false;
    if (val == null || val == undefined) return isValEmpty = true;
    if ((<string>val).toString() == "") return isValEmpty = true;
    if ((<string>val).toString().length == 0) return isValEmpty = true;

    return isValEmpty;
  }

  validarPantalla(ancho : any): boolean {
    if (ancho <= 991) { // Ancho para movil
      return false;
    }
    else {
      return true;
    }
  }

  getFileTypeByExtension(fileName: string) {
    let extension : any = fileName.split('.').pop();
    extension = extension.toLowerCase();
    let fileTypeClass = 'fa-file-o';
    if (extension == 'pdf') {
      fileTypeClass = 'fa-file-pdf-o';
    }
    if (extension == 'doc' || extension == 'docx') {
      fileTypeClass = 'fa-file-word-o';
    }
    if (extension == 'xls' || extension == 'xlsx' || extension == 'csv') {
      fileTypeClass = 'fa-file-excel-o';
    }
    if (extension == 'ppt' || extension == 'pptx') {
      fileTypeClass = 'fa fa-file-powerpoint-o';
    }
    if (extension == 'ppt' || extension == 'pptx') {
      fileTypeClass = 'fa fa-file-powerpoint-o';
    }
    if (extension == 'txt') {
      fileTypeClass = 'fa-file-o';
    }
    if (extension == 'png' || extension == 'jpg' || extension == 'jpeg' || extension == 'gif' || extension == 'bmp' || extension == 'ico' ||
      extension == 'svg' || extension == 'svgz' || extension == 'tif' || extension == 'tiff' || extension == 'jpe' || extension == 'drw' ||
      extension == 'ai' || extension == 'pct' || extension == 'psp' || extension == 'xcf' || extension == 'psd') {
      fileTypeClass = 'fa-file-image-o';
    }
    return fileTypeClass;
  }

  encode_utf8(s: string): string {
    return unescape(encodeURIComponent(s));
  }

  decode_utf8(s: string): string {
    return decodeURIComponent(escape(s));
  }

  // public getUniqueID():string
  //  {
  //     let resultID = uniqid();
  //     return resultID
  //  }
}
