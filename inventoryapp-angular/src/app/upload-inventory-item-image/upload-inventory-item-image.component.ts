import { Component, Input, Output, EventEmitter, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-upload-inventory-item-image',
  templateUrl: './upload-inventory-item-image.component.html',
  styleUrls: ['./upload-inventory-item-image.component.scss']
})
export class UploadInventoryItemImageComponent implements OnInit {

  @Input() itemImage: any;
  @Output() imageSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor(
  ) { }

  @ViewChild("imageContainer") imageContainer;
  @ViewChild("imageElement") imageElement;


  ngOnInit() {

  }

  // process selected image
  selectImage(event): void {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageSelected.emit({
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        });

      };
    }
  }

}
