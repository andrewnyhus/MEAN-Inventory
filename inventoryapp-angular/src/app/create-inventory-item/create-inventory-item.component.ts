import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryItemService } from '../services/inventoryItem.service';
import InventoryItem from '../models/inventoryItem.model';

@Component({
  selector: 'app-create-inventory-item',
  templateUrl: './create-inventory-item.component.html',
  styleUrls: ['./create-inventory-item.component.scss']
})
export class CreateInventoryItemComponent implements OnInit {

  @ViewChild('imageUploader') imageUploader;

  constructor(
    // inject InventoryItemService
    private inventoryItemService: InventoryItemService,
    private router: Router
  ) { }

  // create blank item
  public newInventoryItem: InventoryItem = new InventoryItem();
  // create string for keywords input
  public newInventoryItemKeywords: string = "";
  // create buffer for image
  private itemImage: any = null;


  ngOnInit() {

  }


  // processes and saves keywords input string
  applyKeywords(): void {
    this.newInventoryItem.keywords = this.newInventoryItemKeywords.split(' ')
    .filter(keyword => keyword !== "");
  }


  // process selected image
  selectImage(event): void {
    let reader = new FileReader();
    if(event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.newInventoryItem.image = {
          filename: file.name,
          filetype: file.type,
          value: reader.result.split(',')[1]
        };
      };
    }
  }


  // submits new inventory item
  create() {
    // process and save keywords
    this.applyKeywords();

    // submit inventory item
    this.inventoryItemService.createInventoryItem(this.newInventoryItem).subscribe(
      (res) => {
        // get item, redirect to item detail view
        var createdItem = res.data;

        console.log("createdItem");
        console.log(createdItem)

        // navigate to newly created item detail
        this.router.navigate([`view-inventory-item/${createdItem._id}`]);
      })

  }

}
