import { Order } from './../order/order.model';
import { HttpClient } from '@angular/common/http';
import { OrderStore } from './../order/store/order.store';
import { Component, OnInit } from '@angular/core';
import * as auth from 'firebase/auth';

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.component.html',
    styleUrls: ['./my-orders.component.css'],
    providers: [OrderStore]
})
export class MyOrdersComponent implements OnInit {

    isLoading = false;

    constructor(private http: HttpClient, private orderStore: OrderStore) { }

    ngOnInit(): void {
        this.isLoading = true;
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
                                this.isLoading = false;
                            }else{
                                this.isLoading = false;
                            }
                        }
                    );
                }else{
                    this.isLoading = false;
                }
            }
        );
    }

}
