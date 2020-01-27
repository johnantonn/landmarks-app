import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandmarksListComponent } from './landmarks-list/landmarks-list.component';
import { LandmarkDetailsComponent } from './landmark-details/landmark-details.component';

const landmarkRoutes: Routes = [
  { path: 'landmarks', component: LandmarksListComponent, data: { animation: 'landmarks' } },
  { path: 'landmarks/:id', component: LandmarkDetailsComponent, data: { animation: 'landmark' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(landmarkRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LandmarkRoutingModule { }
