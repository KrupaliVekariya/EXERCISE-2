import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit {
  information = [];
  UserDetail='User Details'
  constructor() { }

  ngOnInit() {
  }
  onInformationAdded(information:any)
  {
    this.information.push(information);
  }

}
