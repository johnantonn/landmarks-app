import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

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
    DashboardDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCte9nqTmccCZSGn8zU2Gl50dpsoN9uMng'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
