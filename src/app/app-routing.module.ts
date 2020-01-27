import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { LandmarksListComponent } from './components/landmarks/landmarks-list/landmarks-list.component';
import { LandmarkDetailsComponent } from './components/landmarks/landmark-details/landmark-details.component';

const routes: Routes = [
  { path: 'landmarks/:id', component: LandmarkDetailsComponent, data: { animation: 'landmark' } },
  { path: 'landmarks', component: LandmarksListComponent, data: { animation: 'landmarks' } },
  { path: '', redirectTo: '/landmarks', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
