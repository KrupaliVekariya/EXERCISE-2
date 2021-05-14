import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableInputComponent } from './table-input/table-input.component';
import { TableDisplayComponent } from './table-display/table-display.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
const routes:Routes=[
  {path : 'Form' ,component:TableInputComponent},
  {path : 'Userinformation' , component:TableDisplayComponent}
]
@NgModule({
  declarations: [TableInputComponent, TableDisplayComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ]
})
export class DataOperationModule { }
