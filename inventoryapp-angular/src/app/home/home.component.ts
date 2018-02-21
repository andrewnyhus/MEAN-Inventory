import { Component, OnInit } from '@angular/core';
import { InventoryItemService } from '../services/inventoryItem.service';
import InventoryItem from '../models/inventoryItem.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    // inject inventory item service
    private inventoryItemService: InventoryItemService,
  ){
  }

  // create an empty inventory item list for inventory items to display
  inventoryItemsList: InventoryItem[];


  // on component initialization retrieve inventory items
  ngOnInit() {
    this.inventoryItemService.getInventoryItems().subscribe(inventoryItems => {
      this.inventoryItemsList = inventoryItems;
      console.log("Loaded Inventory Items");
    })
  }

}
