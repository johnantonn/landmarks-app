import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandmarksComponent } from './components/landmarks/landmarks.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { LandmarkDetailsComponent } from './components/landmark-details/landmark-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandmarksComponent,
    HeaderComponent,
    LandmarkDetailsComponent
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
