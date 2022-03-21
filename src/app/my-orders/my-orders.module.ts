import { LoadingModule } from './../loading/loading.module';
import { MyOrdersComponent } from './my-orders.component';
import { MyOrdersListComponent } from './my-orders-list/my-orders-list.component';
import { MyOrdersItemComponent } from './my-orders-list/my-orders-item/my-orders-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyOrdersRoutingModule } from './my-orders-routing.module';
import { MyOrdersDetailComponent } from './my-orders-detail/my-orders-detail.component';


@NgModule({
    declarations: [
        MyOrdersComponent,
        MyOrdersListComponent,
        MyOrdersItemComponent,
        MyOrdersDetailComponent,
    ],
    imports: [
        CommonModule,
        MyOrdersRoutingModule,
        LoadingModule
    ]
})
export class MyOrdersModule { }
