import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursComponent } from './cours.component';
import { CoursesComponent } from '../courses.component';

const routes: Routes = [
  { path: '', component: CoursComponent },
  {path: 'course/:id', component: CoursesComponent},
  { path: ':id', component: CoursComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursRoutingModule {}
