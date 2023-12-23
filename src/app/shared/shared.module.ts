import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  exports:[
    MatIconModule,
    MatTabsModule,
    FlexLayoutModule,
    MatButtonModule
  ]
})
export class SharedModule { }
