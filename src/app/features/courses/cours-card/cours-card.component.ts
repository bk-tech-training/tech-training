import { Component, OnInit, Input } from '@angular/core';

import { CoursesService } from 'src/app/core/services/courses.service';
import { Course } from '../course.model';

@Component({
  selector: 'bk-course-card',
  templateUrl: './cours-card.component.html',
  styleUrls: ['./cours-card.component.css'],
})
export class CoursCardComponent implements OnInit {
  @Input() course: Course;
  @Input() index: number;
  constructor(private courseService: CoursesService) {}

  ngOnInit(): void {}
}
