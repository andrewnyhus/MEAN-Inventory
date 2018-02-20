import { Response } from '@angular/http';
import { InventoryItemService } from './services/inventoryItem.service';
import InventoryItem from './models/inventoryItem.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    // injecting InventoryItemService into the app component
    private inventoryItemService: InventoryItemService
  ){ }

  /*
  // create an inventory item
  public newInventoryItem: InventoryItem = new InventoryItem();

  // create string for keywords input
  public newInventoryItemKeywords: string = "";


  // create an empty inventory item list for visible inventory items
  inventoryItemsList: InventoryItem[];

  // create an empty list for tracking editable inventory items
  public updateInventoryItems: InventoryItem[] = [];


  // on the initialization of the app component
  ngOnInit(): void {
    // get and store list of inventory items
    this.inventoryItemService.getInventoryItems().subscribe(inventoryItems => {
      this.inventoryItemsList = inventoryItems;
      console.log(inventoryItems);
    })
  }


  // process new inventory item keywords input string
  applyKeywords(): void {
    this.newInventoryItem.keywords = this.newInventoryItemKeywords.split(' ')
    .filter(keyword => keyword !== "");
  }


  // submits updated inventory item
  updateInventoryItem(inventoryItem: InventoryItem): void {
    this.inventoryItemService.updateInventoryItem(inventoryItem).subscribe(
      res => {
        console.log("Update Successful");
      }, err => {
        console.log("Update Unsuccessful");
      })
  }


  // submits delete inventory item request
  deleteInventoryItem(inventoryItem: InventoryItem): void {

  }


  // submits new inventory item
  create() {
    // save keywords
    this.applyKeywords();

    // submit inventory item
    this.inventoryItemService.createInventoryItem(this.newInventoryItem).subscribe(
    (res) => {
      // add new item to visible items
      this.inventoryItemsList.push(res.data);
      // reset newInventoryItem
      this.newInventoryItem = new InventoryItem();
    })
  }


  // catches keypress enter event
  submitInventoryItem(event, inventoryItem:InventoryItem){

  }*/


}
