import InventoryItem from '../models/inventoryItem.model';
import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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


  // get inventory item request, returns server response
  // ===========================================================================
  getInventoryItem(id:string): Observable<InventoryItem>{
    var url = `${this.inventoryItemUrl}/${id}`;
    return this.http.get(url).map(res => {
      return res["data"] as InventoryItem;//["data"] as InventoryItem[];
    });

  }
  // ===========================================================================


  // update inventory item request, returns server response
  // ===========================================================================
  updateInventoryItem(inventoryItem:InventoryItem){
    return this.http.put(`${this.inventoryItemUrl}`, inventoryItem);
  }
  // ===========================================================================


  // upload inventory item image request, returns server response
  // ===========================================================================
  uploadInventoryItemImage(id:string, image:any){
    return this.http.post(`${this.inventoryItemUrl}/upload-inventory-item-image/${id}`,
      image);
  }
  // ===========================================================================


  // delete inventory item image request, returns server response
  // ===========================================================================
  deleteInventoryItemImage(id:string, image:any){
    return this.http.post(`${this.inventoryItemUrl}/delete-inventory-item-image/${id}`,
      image);
  }
  // ===========================================================================


  // replace inventory item image request, returns server response
  // ===========================================================================
  replaceInventoryItemImage(id:string, image:any){
    return this.http.post(`${this.inventoryItemUrl}/replace-inventory-item-image/${id}`,
      image);
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
