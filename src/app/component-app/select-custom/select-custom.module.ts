import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectCustomComponent } from './select-custom.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    SelectCustomComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[SelectCustomComponent]
})
export class SelectCustomModule { }
