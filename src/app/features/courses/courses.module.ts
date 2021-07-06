import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursCardComponent } from './cours-card/cours-card.component';

@NgModule({
  declarations: [CoursesComponent, CoursCardComponent],
  imports: [CommonModule, CoursesRoutingModule],
  exports: [CoursesComponent]
})
export class CoursesModule {}
