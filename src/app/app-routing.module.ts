import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { LandmarksListComponent } from './components/landmarks/landmarks-list/landmarks-list.component';
import { LandmarkDetailsComponent } from './components/landmarks/landmark-details/landmark-details.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/admin/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { DashboardDetailsComponent } from './components/admin/dashboard-details/dashboard-details.component';
import { AuthGuard } from './services/auth.guard';
import { GuestGuard } from './services/guest.guard';

const routes: Routes = [
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/dashboard/:id', component: DashboardDetailsComponent, canActivate: [AuthGuard] },
  { path: 'admin/dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin', redirectTo: 'admin/login' },
  { path: 'landmarks/:id', component: LandmarkDetailsComponent, canActivate: [GuestGuard] },
  { path: 'landmarks', component: LandmarksListComponent, canActivate: [GuestGuard] },
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
