import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { LandmarksListComponent } from './components/landmarks/landmarks-list/landmarks-list.component';
import { LandmarkDetailsComponent } from './components/landmarks/landmark-details/landmark-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/landmarks', redirectTo: 'landmarks' },
  { path: 'admin/landmarks/:id', redirectTo: 'landmarks/:id' },
  { path: 'landmarks/:id', component: LandmarkDetailsComponent },
  { path: 'landmarks', component: LandmarksListComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
