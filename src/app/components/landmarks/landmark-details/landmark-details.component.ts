import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Landmark } from 'src/app/models/Landmark';
import { LandmarkService } from '../../../services/landmark.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-landmark-details',
  templateUrl: './landmark-details.component.html',
  styleUrls: ['./landmark-details.component.css']
})
export class LandmarkDetailsComponent implements OnInit {
  @Input() landmark: Landmark;
  @Output() deleteLandmark: EventEmitter<Landmark> = new EventEmitter();

  constructor(
    private landmarkService: LandmarkService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getLandmark();
  }

  getLandmark(): void {
    const id = +this.route.snapshot.paramMap.get('objectId');
    console.log(id);
    this.landmarkService.getLandmarkById('lT6Xf7xWPV').subscribe(landmark => {
      console.log(landmark);
      this.landmark = landmark;
    })
  }

  goBack(): void {
    this.location.back();
  }

  onSave(landmark: Landmark) {
    this.landmarkService.updateLandmark(landmark).subscribe(response => {
      console.log(response.message);
    })
  }

  onDelete(landmark: Landmark) {
    this.deleteLandmark.emit(landmark);
  }

}
