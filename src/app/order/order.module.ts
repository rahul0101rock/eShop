import { FormsModule } from '@angular/forms';
import { AlertModule } from './../alert/alert.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderAddressComponent } from './order-address/order-address.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { OrderComponent } from './order.component';


@NgModule({
    declarations: [
        OrderComponent,
        OrderSummaryComponent,
        OrderAddressComponent
    ],
    imports: [
        CommonModule,
        OrderRoutingModule,
        AlertModule,
        FormsModule
    ]
})
export class OrderModule { }
