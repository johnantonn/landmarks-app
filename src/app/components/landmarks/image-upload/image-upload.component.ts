import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  selectedImage;

  constructor(
    private uploadService: UploadService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedImage = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('landmarkImage', this.selectedImage);
    const id = this.route.snapshot.params.id;

    this.uploadService.uploadImage(id, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
