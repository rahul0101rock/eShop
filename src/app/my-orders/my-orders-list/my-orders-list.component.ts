import { OrderStore } from './../../order/store/order.store';
import { Subscription } from 'rxjs';
import { Order } from './../../order/order.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-my-orders-list',
    templateUrl: './my-orders-list.component.html',
    styleUrls: ['./my-orders-list.component.css']
})
export class MyOrdersListComponent implements OnInit {

    orders!: Order[];
    storeSub!: Subscription;

    constructor(private orderStore: OrderStore) { }

    ngOnInit(): void {
        this.orderStore.orders$.subscribe(
            orderState => {
                this.orders = orderState;
            }
        );
    }

}
