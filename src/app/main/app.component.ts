import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { AddStudentComponent } from '../add-student/add-student.component';
import {SchoolService} from '../service-school/school.service';
import {Student} from '../service-school/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SchoolService]
})
export class AppComponent implements OnInit {
  title = 'MY SCHOOL';
  students:Student[];

  constructor(public dialog:MdDialog, private schoolService:SchoolService) {
  }

  addStudentDialog() {
    let dialogRef = this.dialog.open(AddStudentComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.schoolService.addStudent(result).then(d => this.students = d);
      }
      console.log("result", result);

    });
  }

  removeStudent(index) {
    console.log("index", index);
    this.schoolService.removeStudent(index).then(data => this.students = data);
    ;
  }

  updateStudentDialog(id:any) {
    let dialogRef = this.dialog.open(AddStudentComponent, {
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("i am in")
        let INDEX = result.Index
        delete result.Index;
        this.schoolService.updateStudent(INDEX, result).then(d => this.students = d)

      }
      console.log("result", result);

    });
  }

  ngOnInit() {
    this.schoolService.getStudents().then(data => this.students = data);
  }

}
