import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-view-images',
  templateUrl: './view-images.component.html',
  styleUrls: ['./view-images.component.scss']
})
export class ViewImagesComponent implements OnInit {

  @Input() images: any[];
  @Output() emitSelectedIndex: EventEmitter<number> = new EventEmitter

  public selectedImageIndex: number;
  public selectedImagePath: string;
  public noImagesPlaceholderIsPresent: boolean;


  constructor() { }


  ngOnInit() {

    if(this.images && this.images.length > 0){
      this.selectedImageIndex = 0;
      this.noImagesPlaceholderIsPresent = false;
    }else{
      this.selectedImageIndex = -1;
      this.noImages();
    }

  }


  /*
    Creates a "no images" placeholder, inserts and selects it
  */
  noImages(){
    // create placeholder
    let noImagesPlaceholder: any = {path: "http://localhost:3000/images/no-images.png", contentType: "image/png"};

    // add placeholder to images
    this.images.push(noImagesPlaceholder);

    // indicate we have inserted the placeholder
    this.noImagesPlaceholderIsPresent = true;

    // select placeholder
    this.selectImageAtIndex(0);
  }



  /*
    Selects image at index, displays it.
  */
  selectImageAtIndex(index: number){
    this.selectedImageIndex = index;
  }


}
