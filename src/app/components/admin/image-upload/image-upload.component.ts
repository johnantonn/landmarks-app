import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent implements OnInit {

  selectedImage;
  isSelected: boolean;

  constructor(
    private uploadService: UploadService,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.isSelected = false;
  }

  selectImage(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedImage = file;
      this.isSelected = true;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('landmarkImage', this.selectedImage);
    const id = this.route.snapshot.params.id;
    this.isSelected = false;
    this.uploadService.uploadImage(id, formData).subscribe(
      (res) => {
        this.toastr.success('Image was uploaded successfully!', 'Success!');
        window.location.reload();
      },
      (err) => {
        this.toastr.error(err.error.message, 'Could not upload image!');
      }
    );
  }

  onCancel() {
    this.isSelected = false;
    this.selectedImage = null;
  }

}
