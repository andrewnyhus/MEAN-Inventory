import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { InventoryItemService } from './services/inventoryItem.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateInventoryItemComponent } from './create-inventory-item/create-inventory-item.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewInventoryItemComponent } from './view-inventory-item/view-inventory-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateInventoryItemComponent,
    ViewInventoryItemComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [
    InventoryItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
