import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableInputComponent } from "./data-operation/table-input/table-input.component";
import { TableDisplayComponent } from "./data-operation/table-display/table-display.component";
const routes: Routes = [
  {path : 'Form' ,component:TableInputComponent},
  {path : 'DisplayData' , component:TableDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
