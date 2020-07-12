import { Component, OnInit } from '@angular/core';
import { Course } from './course.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bk-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courses: Course[];
  // subscription: Subscription;

  constructor(private coursesService: CoursesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
    console.log(this.courses);

  }

}
