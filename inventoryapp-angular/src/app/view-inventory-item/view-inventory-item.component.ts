import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryItemService } from '../services/inventoryItem.service';
import InventoryItem from '../models/inventoryItem.model';


@Component({
  selector: 'app-view-inventory-item',
  templateUrl: './view-inventory-item.component.html',
  styleUrls: ['./view-inventory-item.component.scss']
})
export class ViewInventoryItemComponent implements OnInit, OnDestroy {

  id: string;
  readableDateString: string;
  inventoryItem: InventoryItem;
  isDataAvailable: boolean = false;
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    // inject inventory item service
    private inventoryItemService: InventoryItemService
  ) { }


  getReadableDate(){
    var dateString = this.inventoryItem.date.toString();

    var YYYYMMDD = dateString.split("T")[0];
    var dateSplit = YYYYMMDD.split('-');
    var hhmmss = dateString.split("T")[1].split(".")[0];

    this.readableDateString = hhmmss +" "+ dateSplit[1] +"/"+ dateSplit[2] +"/"+ dateSplit[0];
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      // gets and casts id
      this.id = params['id'];

      // retrieve corresponding item from server
      this.inventoryItemService.getInventoryItem(this.id).subscribe(inventoryItem => {
        this.inventoryItem = inventoryItem;
        this.getReadableDate();
        this.isDataAvailable = true;
      })


    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
