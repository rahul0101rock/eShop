import { Order } from './../order.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';

export interface OrderState {
    orders: Order[];
}

@Injectable()
export class OrderStore extends ComponentStore<OrderState> {

    constructor() {
        super(
            {
                orders: []
            }
        );
    }

    readonly AddToOrder = this.updater(
        (state, order: Order) => ({
            orders: [...state.orders, order]
        })
    );
    readonly ClearOrder = this.updater(
        (state) => ({
            orders: []
        })
    );

    readonly orders$: Observable<Order[]> = this.select(state => state.orders);
}
