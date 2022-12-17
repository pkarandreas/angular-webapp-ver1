import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CourseDeleteComponent } from './course-delete/course-delete.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { RoutingModule } from './MyModules/routing/routing.module';
import { CoursesComponent } from './courses/courses.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CourseComponent } from './course/course.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CourseDeleteComponent,
    CourseEditComponent,
    NavComponent,
    FooterComponent,
    CoursesComponent,
    FormComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
