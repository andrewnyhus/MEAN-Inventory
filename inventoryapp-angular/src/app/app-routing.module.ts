import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

import { CreateInventoryItemComponent } from './components/inventory-item/create-inventory-item/create-inventory-item.component';
import { EditInventoryItemComponent } from './components/inventory-item/edit-inventory-item/edit-inventory-item.component';
import { ViewInventoryItemComponent } from './components/inventory-item/view-inventory-item/view-inventory-item.component';

import { EditImageComponent } from './components/inventory-item/edit-inventory-item/edit-image/edit-image.component';
import { ViewImagesComponent } from './components/view-images/view-images.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-inventory-item',
    component: CreateInventoryItemComponent
  },
  {
    path: 'view-inventory-item/:id',
    component: ViewInventoryItemComponent
  },
  {
    path: 'edit-inventory-item/:id',
    component: EditInventoryItemComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
