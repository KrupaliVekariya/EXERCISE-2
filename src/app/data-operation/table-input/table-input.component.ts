import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.css']
})
export class TableInputComponent implements OnInit {
  nameInput : string;
  ageInput : string;

  @Output() informationAdded= new EventEmitter<any>();
  constructor(private route:Router) { }

  ngOnInit() {
  }

  onAddInfo(){
    let reqData = {
      uName : this.nameInput,
      age : this.ageInput
    }
    this.informationAdded.emit(reqData);
  }

}
