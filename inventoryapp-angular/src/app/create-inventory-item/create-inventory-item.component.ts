import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InventoryItemService } from '../services/inventoryItem.service';
import InventoryItem from '../models/inventoryItem.model';

@Component({
  selector: 'app-create-inventory-item',
  templateUrl: './create-inventory-item.component.html',
  styleUrls: ['./create-inventory-item.component.scss']
})
export class CreateInventoryItemComponent implements OnInit {

  constructor(
    // inject InventoryItemService
    private inventoryItemService: InventoryItemService,
    private router: Router
  ) { }

  // create blank item
  public newInventoryItem: InventoryItem = new InventoryItem();

  // create string for keywords input
  public newInventoryItemKeywords: string = "";

  ngOnInit() {

  }

  // processes and saves keywords input string
  applyKeywords(): void {
    this.newInventoryItem.keywords = this.newInventoryItemKeywords.split(' ')
    .filter(keyword => keyword !== "");
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
        this.router.navigate([`view-inventory-item/${createdItem._id}`]);
      })

  }

}
