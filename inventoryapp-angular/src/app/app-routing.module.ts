import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateInventoryItemComponent } from './create-inventory-item/create-inventory-item.component';
import { ViewInventoryItemComponent } from './view-inventory-item/view-inventory-item.component';
import { HomeComponent } from './home/home.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
