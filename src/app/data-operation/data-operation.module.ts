import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableInputComponent } from './table-input/table-input.component';
import { TableDisplayComponent } from './table-display/table-display.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TableInputComponent, TableDisplayComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DataOperationModule { }
