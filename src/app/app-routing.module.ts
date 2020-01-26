import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandmarksComponent } from './components/landmarks/landmarks.component';
import { LandmarkDetailsComponent } from './components/landmark-details/landmark-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/landmarks', pathMatch: 'full' },
  { path: 'landmarks', component: LandmarksComponent },
  { path: 'landmarks/:id', component: LandmarkDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true // <-- debugging purposes only
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
