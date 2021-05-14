import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-input',
  templateUrl: './table-input.component.html',
  styleUrls: ['./table-input.component.css']
})
export class TableInputComponent implements OnInit {
  User='Add User Information'
  txtName = '';
  txtAge = '';
  getData:any = [];
  infoForm:FormGroup;
  @Output() informationAdded = new EventEmitter();
  constructor(private route: Router) { }

  ngOnInit() {
    /* get value from information form */
    this.infoForm=new FormGroup({
      'txtName':new FormControl('',Validators.required),
      'txtAge': new FormControl('',[Validators.required,Validators.min(0),Validators.max(150)])
    });
  }

  /* add information to array */
  onAddInfo() {
   this.getData={
     name:this.infoForm.get('txtName').value,
     age:this.infoForm.get('txtAge').value
   }
     /* emit array */
    this.informationAdded.emit(this.getData);
    /* reset form after sumitting information  */
    this.infoForm.reset();
  }

}
