import { Component, OnInit } from '@angular/core';
import { Landmark } from 'src/app/models/Landmark';
import { LandmarkService } from 'src/app/services/landmark.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  landmarks: Landmark[];

  constructor(
    private landmarkService: LandmarkService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLandmarks();
  }

  getLandmarks(): void {
    this.landmarkService.getLandmarks().subscribe(landmarks => {
      this.landmarks = landmarks;
    });
  }

}
