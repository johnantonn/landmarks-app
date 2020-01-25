import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Landmark } from 'src/app/models/Landmark';
import { LandmarkService } from '../../services/landmark.service';

@Component({
  selector: 'app-landmark-item',
  templateUrl: './landmark-item.component.html',
  styleUrls: ['./landmark-item.component.css']
})
export class LandmarkItemComponent implements OnInit {
  @Input() landmark: Landmark;
  @Output() deleteLandmark: EventEmitter<Landmark> = new EventEmitter();

  constructor(private landmarkService: LandmarkService) { }

  ngOnInit() {
  }

  onClick(landmark: Landmark) {
    this.landmarkService.getLandmarkById(landmark).subscribe(landmark => {
      console.log(landmark);
      this.landmark = landmark;
    })
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
