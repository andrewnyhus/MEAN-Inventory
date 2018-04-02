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
  public showModal: boolean = false;


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
    this.images.push({path: "https://vignette.wikia.nocookie.net/mrmen/images/d/d2/Mrtallimage.png/revision/latest?cb=20130222100629"});
    this.images.push({path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRom67yfyFubT7NLjoLnSqGLZqEiCZ5jub2iyCf8kVgjT9W9XVe"});


    // indicate we have inserted the placeholder
    this.noImagesPlaceholderIsPresent = true;

    // select placeholder
    this.selectImageAtIndex(0);
  }



  /*
    Selects image at index, displays it.
  */
  selectImageAtIndex(index: number){

    // wrap around
    if(index + 1 > this.images.length){
      index = 0;
    }else if(index < 0){
      index = this.images.length - 1;
    }

    this.selectedImageIndex = index;
  }


  /*
    Toggle Modal
  */
  toggleModal(){
    this.showModal = !this.showModal;
  }


}
