import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandmarksListComponent } from './components/landmarks/landmarks-list/landmarks-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LandmarkDetailsComponent } from './components/landmarks/landmark-details/landmark-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ImageUploadComponent } from './components/admin/image-upload/image-upload.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/admin/login/login.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { DashboardDetailsComponent } from './components/admin/dashboard-details/dashboard-details.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { GoogleMapComponent } from './components/google-map/google-map.component';

@NgModule({
  declarations: [
    AppComponent,
    LandmarksListComponent,
    HeaderComponent,
    LandmarkDetailsComponent,
    PageNotFoundComponent,
    ImageUploadComponent,
    HomepageComponent,
    LoginComponent,
    DashboardComponent,
    DashboardDetailsComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
