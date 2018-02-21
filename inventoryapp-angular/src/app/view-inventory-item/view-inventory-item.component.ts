import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-inventory-item',
  templateUrl: './view-inventory-item.component.html',
  styleUrls: ['./view-inventory-item.component.scss']
})
export class ViewInventoryItemComponent implements OnInit, OnDestroy {

  id: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }



  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // gets and casts id

      // retrieve item from server
      console.log("id: ", this.id);

    });
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
