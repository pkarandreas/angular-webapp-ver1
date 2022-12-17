import { Component, OnInit } from '@angular/core';
import { CourseClass } from '../Models/CoursesClass';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CoursesSrvService } from '../Services/courses-srv.service';
import { Router } from '@angular/router';
import { DateValidator } from '../CustomValidators/DateValidator.validator'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public course: CourseClass ;
  public courseForm : FormGroup;
  public StartMinDate :string = new Date().toISOString().slice(0,10);
  public tmp :Date;
  public CourseMaxDate : string='';
  public formTitle:string="Create Course Form";
  public message :string ='';
  public isHidden : boolean = false;

  constructor(private fb:FormBuilder,private srv:CoursesSrvService,private route: Router) {
    this.tmp = new Date();
    this.tmp.setFullYear(this.tmp.getFullYear()+1);
    this.CourseMaxDate = this.tmp.toISOString().slice(0,10);
    this.courseForm = this.fb.group({
      CourseTitle :  [null, Validators.compose([Validators.required,Validators.minLength(3), Validators.maxLength(30)])],
      CourseStartDate : [null,Validators.compose([Validators.required,DateValidator.between(this.StartMinDate,this.CourseMaxDate)])],
      CourseDuration : [null, Validators.compose([Validators.required,Validators.min(2),Validators.max(20)])]
    });

  }

  ngOnInit(): void {
  }
  onFormSubmit(){
   if (this.courseForm.valid){
    this.course = new CourseClass();
    this.course.courseTitle = this.courseForm.get('CourseTitle').value;
    this.course.startDate = new Date(this.courseForm.get('CourseStartDate').value);
    this.course.duration = this.courseForm.get('CourseDuration').value;
    if (this.srv.postCourse(this.course))
    {
      this.isHidden=true;
      this.message = `The Course record with Title : ${this.course.courseTitle} saved successfully`;
      this.hideDiv();
    }
   }

  }
  hideDiv(){
    setTimeout(()=>{this.isHidden = false;this.route.navigate(['courses']); },5000);
   }

}
