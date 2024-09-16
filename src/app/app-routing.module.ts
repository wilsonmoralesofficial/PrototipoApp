import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './routes/not-found/not-found.component';

const routes : Routes = [
  {
    path : '',
    loadChildren : () => import('./layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path : 'login',
    loadChildren : () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '**', component : NotFoundComponent
  }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
