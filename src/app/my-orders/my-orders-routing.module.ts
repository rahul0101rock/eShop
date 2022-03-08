import { MyOrdersListComponent } from './my-orders-list/my-orders-list.component';
import { MyOrdersComponent } from './my-orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: MyOrdersComponent, children: [
      { path: '', component: MyOrdersListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyOrdersRoutingModule { }
