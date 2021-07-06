import { Component, OnInit, Input } from '@angular/core';

import { CoursesService } from 'src/app/core/services/courses.service';
import { Course } from '../course.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'bk-course-card',
  templateUrl: './cours-card.component.html',
  styleUrls: ['./cours-card.component.css'],
})
export class CoursCardComponent implements OnInit {
  @Input() course: Course;
  @Input() index: number;
  constructor(
    private courseService: CoursesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  toCourse() {
    this.router.navigate([`course/${this.index}`], {relativeTo: this.route});
  }
}
