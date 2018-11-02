import { UploadImageService } from './../shared/upload-image.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  imageUrl: string = "/assets/img/default.png";
  fileToUpload: File = null;

  constructor(private _uploadImageService: UploadImageService) { }

  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    // Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  OnSubmit(Caption, Image) {
    this._uploadImageService.postFile(Caption.value, this.fileToUpload).subscribe(data => {
      console.log('Done');
      Caption.value = null;
      Image.value = null;
      this.imageUrl = "/assets/img/default.png";
    });
  }

}
