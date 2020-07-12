import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CoursesService } from 'src/app/core/services/courses.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'bk-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {
  course: Course;
  id: number;

  constructor(private courseService: CoursesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.course = this.courseService.getCourse(this.id);
      }
    );
  }

  getCuorse() {
    return this.course;
  }
}
