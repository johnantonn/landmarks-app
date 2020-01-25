import { Component, OnInit } from '@angular/core';
import { Landmark } from '../../models/Landmark';
import { LandmarkService } from '../../services/landmark.service';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.component.html',
  styleUrls: ['./landmarks.component.css']
})
export class LandmarksComponent implements OnInit {

  landmarks: Landmark[];

  constructor(private landmarkService: LandmarkService) { }

  ngOnInit() {
    this.landmarkService.getLandmarks().subscribe(landmarks => {
      console.log(landmarks);
      this.landmarks = landmarks;
    });
  }

  deleteLandmark(landmark: Landmark) {
    this.landmarks = this.landmarks.filter(t => t.objectId !== landmark.objectId);
    this.landmarkService.deleteLandmark(landmark).subscribe();
  }

}
