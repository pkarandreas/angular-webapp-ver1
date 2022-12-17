import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from 'src/app/about/about.component';
import { CourseDeleteComponent } from 'src/app/course-delete/course-delete.component';
import { CourseEditComponent } from 'src/app/course-edit/course-edit.component';
import { CourseComponent } from 'src/app/course/course.component';
import { CoursesComponent } from 'src/app/courses/courses.component';
import { FormComponent } from 'src/app/form/form.component';
import { HomeComponent } from 'src/app/home/home.component';

const routes: Routes = [
  {
    path: '',
    component :HomeComponent
  },
  {
    path: "courses",
    component : CoursesComponent
  },
  {
   path : "courseEdit/:id" ,
   component : CourseEditComponent
  },
  {
    path : "courseDelete/:id" ,
    component : CourseDeleteComponent
   },
   {
    path : "addEditCourse" ,
    component :CourseComponent
   },
  {
    path: "form",
    component : FormComponent
  },
  {
    path: "about",
    component : AboutComponent
  }

];

@NgModule({
  declarations: [],
  imports: [
  RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class RoutingModule { }
