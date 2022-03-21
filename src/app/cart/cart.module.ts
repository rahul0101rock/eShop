import { CartAmountComponent } from './cart-amount/cart-amount.component';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartComponent } from './cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';


@NgModule({
    declarations: [
        CartComponent,
        CartListComponent,
        CartItemComponent,
        CartAmountComponent,
    ],
    imports: [
        CommonModule,
        CartRoutingModule
    ]
})
export class CartModule { }
