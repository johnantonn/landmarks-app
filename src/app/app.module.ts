import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandmarksComponent } from './components/landmarks/landmarks.component';
import { LandmarkItemComponent } from './components/landmark-item/landmark-item.component';
import { HeaderComponent } from './components/layout/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LandmarksComponent,
    LandmarkItemComponent,
    HeaderComponent
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
