import { Routes } from '@angular/router';
import { EducacionComponent } from './educacion.component';


export const educacionRoutes : Routes = [
  {path:'',component: EducacionComponent },
  {path:'catedraticos', loadChildren : () => import('./direccion/catedraticos/catedraticos.module').then(m => m.CatedraticosModule) },
  {path:'grados-carreras', loadChildren : () => import('./direccion/grados-carreras/grados-carreras.module').then(m => m.GradosCarrerasModule) },
  {path:'direccion', loadChildren : () => import('./direccion/direccion.module').then(m => m.DireccionModule)}
]
