import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatGridListModule} from '@angular/material/grid-list';
import { SelectCustomModule } from '../component-app/select-custom/select-custom.module';
import { BuscarModule } from '../component-app/buscar/buscar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    NgbModule,
    MatTooltipModule,
    MatGridListModule,
    SelectCustomModule,
    BuscarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    MatIconModule,
    MatTabsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    NgbModule,
    MatTooltipModule,
    MatGridListModule,
    SelectCustomModule,
    BuscarModule,
    FormsModule,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
