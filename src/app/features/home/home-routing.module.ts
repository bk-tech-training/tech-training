import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CoursesComponent } from '../courses/courses.component';
import { CoursComponent } from '../courses/cours/cours.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent

  },
  {
    path: 'courses',
    component: CoursesComponent
  },
  {
    path: 'course',
    loadChildren: () =>
      import('../courses/cours/cours.module').then((m) => m.CoursModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
