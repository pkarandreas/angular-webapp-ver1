import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseClass } from '../Models/CoursesClass';
import { CoursesSrvService } from '../Services/courses-srv.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  public courses : CourseClass[] = [];
  public isLoggedIn:boolean = false;
  public homeCourseId : string = "";
  public homeCourse : CourseClass = null;
  constructor(private srv:CoursesSrvService,private route:Router) {
    this.getCoursesAPI();
  }
  getCoursesAPI(){
    this.srv.getCourses().subscribe(data=>{
      this.courses=data;
    })
  }

  onDeleteCourse(id:number){
    //???????????????????????
    this.srv.getCourseByID(Number(id)).subscribe(data=>{this.homeCourse = data;});
  }
  onEditCourse(id:number){
    //?????????????????????????
    this.homeCourseId = id.toString();
    console.log(this.homeCourseId);
  }
  public onDeleted(msg:string)
  {
    alert(msg);
    this.getCoursesAPI();
  }

  ngOnInit(): void {
  }
  onCreateCourse(){
    this.route.navigate(['addEditCourse']);
  }

}
