import { Routes } from '@angular/router';


export const appRoutes : Routes = [
  {path:'', loadChildren : () => import('./principal/principal.module').then(m => m.PrincipalModule)},
  {path:'actividades', loadChildren : () => import('./actividades/actividades.module').then(m => m.ActividadesModule) },
  {path:'horarios', loadChildren : () => import('./horarios/horarios.module').then(m => m.HorariosModule)},
  // {path:'educacion', loadChildren : () => import('./educacion/educacion.module').then(m => m.EducacionModule)},
  {path:'contacto', loadChildren : () => import('./contacto/contacto.module').then(m => m.ContactoModule)},
  {path: '**',loadChildren: ()=> import('./not-found/not-found.module').then(m => m.NotFoundModule)}
]
