import { Component, OnInit } from '@angular/core';
import { Landmark } from '../../../models/Landmark';
import { LandmarkService } from '../../../services/landmark.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks-list.component.html',
  styleUrls: ['./landmarks-list.component.css']
})
export class LandmarksListComponent implements OnInit {

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

  goBack(): void {
    this.location.back();
  }

}
