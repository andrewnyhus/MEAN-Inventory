import InventoryItem from '../models/inventoryItem.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';

// RxJS operator for mapping observable
import 'rxjs/add/operator/map';

@Injectable()
export class InventoryItemService {

  api_url = 'http://localhost:3000';
  inventoryItemUrl = `${this.api_url}/api/inventoryItem`;

  constructor(
    private http: HttpClient
  ) { }


  // create inventory item request, returns server response
  // ===========================================================================
  createInventoryItem(inventoryItem: InventoryItem): Observable<any>{
    return this.http.post(`${this.inventoryItemUrl}`, inventoryItem);
  }
  // ===========================================================================


  // get inventory items request, returns server response
  // ===========================================================================
  getInventoryItems(): Observable<InventoryItem []>{
    return this.http.get(`${this.inventoryItemUrl}`).map(res => {
      // put each item in response together so they are all returned
      return res["data"].docs as InventoryItem[];
    })
  }
  // ===========================================================================


  // update inventory item request, returns server response
  // ===========================================================================
  updateInventoryItem(inventoryItem:InventoryItem){
    return this.http.put(`${this.inventoryItemUrl}`, inventoryItem);
  }
  // ===========================================================================


  // delete inventory item request, returns server response
  // ===========================================================================
  deleteInventoryItem(id:string):any{
    return this.http.delete(`${this.inventoryItemUrl}/${id}`).map(res => {
      return res;
    })
  }
  // ===========================================================================


  // Handle any errors by rejecting and returning error message
  // ===========================================================================
  private handleError(error: any): Promise<any>{
    console.error('An error occurred: ', error); // dev code
    return Promise.reject(error.message || error);
  }
  // ===========================================================================



}
