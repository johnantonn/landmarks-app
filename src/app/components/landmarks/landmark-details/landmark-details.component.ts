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

  editActive: boolean;

  constructor(
    private landmarkService: LandmarkService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    this.editActive = false;
    this.getLandmark();
  }

  getLandmark(): void {
    const id = this.route.snapshot.params.id;
    this.landmarkService.getLandmarkById(id).subscribe(landmark => {
      this.landmark = landmark;
    })
  }

  goBack(): void {
    this.location.back();
  }

  onDelete(landmark: Landmark) {
    this.deleteLandmark.emit(landmark);
  }

  onEdit() {
    // Make text fields editable
    document.getElementById("editableTitle").contentEditable = "true";
    document.getElementById("editableInfo").contentEditable = "true";
    document.getElementById("editableDescription").contentEditable = "true";
    this.editActive = true;
  }

  onCancel() {
    // Deactivate editability
    document.getElementById("editableTitle").contentEditable = "false";
    document.getElementById("editableInfo").contentEditable = "false";
    document.getElementById("editableDescription").contentEditable = "false";
    // Recover text fields of Landmark object
    document.getElementById("editableTitle").textContent = this.landmark.title;
    document.getElementById("editableInfo").textContent = this.landmark.short_info;
    document.getElementById("editableDescription").textContent = this.landmark.description;
    this.editActive = false;
  }

  onSave() {
    // Deactivate editability
    document.getElementById("editableTitle").contentEditable = "false";
    document.getElementById("editableInfo").contentEditable = "false";
    document.getElementById("editableDescription").contentEditable = "false";
    // Update text fields of Landmark object
    this.landmark.title = document.getElementById("editableTitle").textContent;
    this.landmark.short_info = document.getElementById("editableInfo").textContent;
    this.landmark.description = document.getElementById("editableDescription").textContent;
    this.editActive = false;
    // Call the service to update Landmark object
    this.landmarkService.updateLandmark(this.landmark).subscribe(res => {
      console.log(`Successfully updated: ${this.landmark.title}`)
    })
  }
}
