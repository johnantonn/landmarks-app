import { Component, OnInit } from '@angular/core';
import { LandmarkService } from 'src/app/services/landmark.service';
import { ImageSnippet } from 'src/app/models/ImageSnippet';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  selectedFile: ImageSnippet;

  constructor(
    private landmarkService: LandmarkService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    const id = this.route.snapshot.params.id;
    console.log(this.route);

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.landmarkService.uploadImage(id, this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }

}
