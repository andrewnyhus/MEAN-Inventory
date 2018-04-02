import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InventoryItemService } from './services/inventoryItem.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { PopoverModule } from 'ngx-popover';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';

import { CreateInventoryItemComponent } from './components/inventory-item/create-inventory-item/create-inventory-item.component';
import { EditInventoryItemComponent } from './components/inventory-item/edit-inventory-item/edit-inventory-item.component';
import { ViewInventoryItemComponent } from './components/inventory-item/view-inventory-item/view-inventory-item.component';

import { EditImageComponent } from './components/inventory-item/edit-inventory-item/edit-image/edit-image.component';
import { ViewImagesComponent } from './components/view-images/view-images.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateInventoryItemComponent,
    ViewInventoryItemComponent,
    EditImageComponent,
    ViewImagesComponent,
    EditInventoryItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    PopoverModule
  ],
  providers: [
    InventoryItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
