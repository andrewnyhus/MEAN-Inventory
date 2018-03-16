import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.scss']
})
export class EditImageComponent implements OnInit {

  @Input() images: any[];
  @ViewChild('imageUploader') imageUploader: ElementRef;
  @ViewChild('imageElement') imageElement: ElementRef;

  public imageToUpload:any;

  constructor() { }

  ngOnInit() {
  }


  imageSelected(event){
    //console.log("image selected imageToUpload: ");
    if(event.target.files && event.target.files.length > 0){

      var reader = new FileReader();

      // set onLoad handler
      reader.onload = (evt:any) => {
        this.imageElement.nativeElement.src = evt.target.result;
      }

      // tell the reader to read the selected image
      reader.readAsDataURL(event.target.files[0]);

    }else{
      console.log("no file selected");
    }

  }

  uploadImage(){

  }

}
