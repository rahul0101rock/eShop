import { OrderStore } from './../../order/store/order.store';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Order } from './../../order/order.model';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-my-orders-detail',
    templateUrl: './my-orders-detail.component.html',
    styleUrls: ['./my-orders-detail.component.css']
})
export class MyOrdersDetailComponent implements OnInit {

    order!: Order;
    id!: number;
    storeSub!: Subscription;

    constructor(private route: ActivatedRoute, private orderStore: OrderStore) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.orderStore.orders$.subscribe(
                    orderState => {
                        this.order = orderState[this.id];;
                    }
                );
            }
        );
    }

}
