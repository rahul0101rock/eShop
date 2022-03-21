import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { OrderStore } from './store/order.store';
import { Component, OnInit } from '@angular/core';
import * as auth from 'firebase/auth';

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.css'],
    providers: [OrderStore]

})
export class OrderComponent implements OnInit {

    constructor(private http: HttpClient, private orderStore: OrderStore) { }

    ngOnInit(): void {
        auth.onAuthStateChanged(auth.getAuth(),
            user => {
                if (user) {
                    this.http.get<Order[]>("https://eshop-rahul-default-rtdb.firebaseio.com/orders/" + user.uid + ".json").subscribe(
                        orders => {
                            if (orders) {
                                this.orderStore.ClearOrder();
                                for (let order of orders) {
                                    this.orderStore.AddToOrder(order);
                                }
                            }
                        }
                    );
                }
            }
        );
    }

}
