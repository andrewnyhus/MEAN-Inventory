import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-image',
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.scss']
})
export class EditImageComponent implements OnInit {

  @Input() images: any[];

  constructor() { }

  ngOnInit() {
  }

}
