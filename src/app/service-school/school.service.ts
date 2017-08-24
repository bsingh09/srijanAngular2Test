import { Injectable } from '@angular/core';
import { Student } from "./student";
import { STUDENTS } from "./dummydata";

@Injectable()
export class SchoolService {
  students:Student[];

  constructor() {
    console.log(typeof this.students)
    this.students = STUDENTS;
  }

  getStudents():Promise<Student[]> {
    return Promise.resolve(this.students);

  }

  getStudent(i:any):Promise<Student> {
    return Promise.resolve(this.students[i]);
  }

  removeStudent(i:any):Promise<Student[]> {
    this.students.splice(i, 1)
    return Promise.resolve(this.students);
  }

  updateStudent(i:any, data:Student):Promise<Student[]> {
    this.students[i] = data;
    return Promise.resolve(this.students);
  }

  addStudent(data:Student):Promise<Student[]> {
    this.students.push(data)
    return Promise.resolve(this.students);
  }


}
