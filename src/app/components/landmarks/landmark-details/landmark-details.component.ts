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
    private location: Location,
  ) { }

  ngOnInit() {
    this.getLandmark();
  }

  getLandmark(): void {
    const id = this.route.snapshot.params.id;
    this.landmarkService.getLandmarkById(id).subscribe(landmark => {
      this.landmark = landmark;
    });
  }

  goBack(): void {
    this.location.back();
  }

}
