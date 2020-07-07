import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CoursesService } from 'src/app/core/services/courses.service';

@Component({
  selector: 'bk-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
    console.log(this.courses);

  }

}
