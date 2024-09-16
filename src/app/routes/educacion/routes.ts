import { Routes } from '@angular/router';
import { EducacionComponent } from './educacion.component';


export const educacionRoutes : Routes = [
  {path:'',component: EducacionComponent },
  {path:'catedraticos', loadChildren : () => import('./catedraticos/catedraticos.module').then(m => m.CatedraticosModule) },
  {path:'direccion', loadChildren : () => import('./direccion/direccion.module').then(m => m.DireccionModule)}
]
