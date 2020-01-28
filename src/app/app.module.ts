import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandmarksListComponent } from './components/landmarks/landmarks-list/landmarks-list.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LandmarkDetailsComponent } from './components/landmarks/landmark-details/landmark-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ImageUploadComponent } from './components/landmarks/image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    LandmarksListComponent,
    HeaderComponent,
    LandmarkDetailsComponent,
    PageNotFoundComponent,
    ImageUploadComponent
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
