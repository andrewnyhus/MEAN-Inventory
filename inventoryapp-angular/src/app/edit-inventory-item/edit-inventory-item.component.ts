import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InventoryItemService } from '../services/inventoryItem.service';
import InventoryItem from '../models/inventoryItem.model';

@Component({
  selector: 'app-edit-inventory-item',
  templateUrl: './edit-inventory-item.component.html',
  styleUrls: ['./edit-inventory-item.component.scss']
})
export class EditInventoryItemComponent implements OnInit {


    id: string;
    public inventoryItem: InventoryItem;
    isDataAvailable: boolean = false;
    private sub: any;


    constructor(
      private route: ActivatedRoute,
      // inject inventory item service
      private inventoryItemService: InventoryItemService
    ) { }


    ngOnInit() {

      this.sub = this.route.params.subscribe(params => {
        // gets and casts id
        this.id = params.id;

        // retrieve corresponding item from server
        this.inventoryItemService.getInventoryItem(this.id).subscribe(loadedInventoryItem => {
          this.inventoryItem = loadedInventoryItem;
          this.isDataAvailable = true;
        })


      });
    }



    ngOnDestroy(){
      console.log("ngOnDestroy");
      this.sub.unsubscribe();
    }

}
