import { Component, OnInit } from '@angular/core';
import { Landmark } from '../../../models/Landmark';
import { LandmarkService } from '../../../services/landmark.service';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks-list.component.html',
  styleUrls: ['./landmarks-list.component.css']
})
export class LandmarksListComponent implements OnInit {

  landmarks: Landmark[];

  constructor(private landmarkService: LandmarkService) {
    console.log("Inside constructor of landmarks");
  }

  ngOnInit() {
    this.getLandmarks();
  }

  getLandmarks(): void {
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
