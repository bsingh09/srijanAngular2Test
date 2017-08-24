import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms'

import {MdDialog, MdDialogRef} from '@angular/material';
import {MD_DIALOG_DATA} from '@angular/material';

import {SchoolService} from '../service-school/school.service';
import {Student} from '../service-school/student';


@Component({
  selector: 'app-add-school',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css'],
  providers: [SchoolService]
})
export class AddStudentComponent implements OnInit {
  public myForm:FormGroup;
  public submitted:boolean = false;
  public events:any[] = [];

  private student:any = new Student();
  private ID = null

  constructor(private _fb:FormBuilder, @Inject(MD_DIALOG_DATA)data:any, public dialogRef:MdDialogRef<AddStudentComponent>, private schoolService:SchoolService) {
    if (data != null) {
      this.ID = data;
    }
    console.log("data is", data)
  }

  closeDilog(student, isValid:boolean) {
    this.submitted = true;

    if (isValid) {
      if(this.ID != null) {

        student.Index = this.ID
      }
      console.log("data is", student)
      this.dialogRef.close(student);
    }

    // this.dialogRef.close(student);
    console.log(student, isValid);
  }

  ngOnInit() {
    if (this.ID != null) {
      this.schoolService.getStudent(this.ID).then(data => {
        this.student = data;
        (<FormGroup>this.myForm)
          .setValue(data, {onlySelf: true});

        this.student.Index = this.ID;
      });
    }
    this.myForm = this._fb.group({
      name: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      city: ['', [<any>Validators.required, <any>Validators.minLength(5)]],
      age: ['', <any>Validators.required],
      email: ['', [<any>Validators.required]]

    });

  }

}
