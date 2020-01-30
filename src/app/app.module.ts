import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandmarksListComponent } from './components/landmarks/landmarks-list/landmarks-list.component';
import { HeaderComponent } from './components/header/header.component';
import { LandmarkDetailsComponent } from './components/landmarks/landmark-details/landmark-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ImageUploadComponent } from './components/landmarks/image-upload/image-upload.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

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
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
