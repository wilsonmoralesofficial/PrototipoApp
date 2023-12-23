import { Component, ViewChild ,AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent {

  irACarreras(tabGroup: any) {
    // Accede a tabGroup directamente y realiza operaciones si es necesario
    tabGroup.selectedIndex = 2; // Cambia al segundo mat-tab
    console.log(tabGroup);
  }

  irAPrimariaYBasicos(tabGroup: any){
        // Accede a tabGroup directamente y realiza operaciones si es necesario
        tabGroup.selectedIndex = 3; // Cambia al segundo mat-tab
        console.log(tabGroup);
  }

  irAPrincipal(tabGroup: any){
            // Accede a tabGroup directamente y realiza operaciones si es necesario
            tabGroup.selectedIndex = 1; // Cambia al segundo mat-tab
            console.log(tabGroup);
  }
}
