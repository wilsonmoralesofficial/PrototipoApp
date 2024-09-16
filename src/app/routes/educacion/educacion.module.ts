import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { educacionRoutes } from './routes';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(educacionRoutes),
  ]
})
export class EducacionModule { }
