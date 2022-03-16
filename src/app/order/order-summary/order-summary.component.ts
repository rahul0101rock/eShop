import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AddressService } from './../order-address/address.service';
import { Cart } from './../../cart/cart.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../order.model';
import * as fromApp from '../../store/app.reducer';
import * as orderActions from '../store/order.actions';
import * as cartActions from '../../cart/store/cart.actions';
import * as auth from 'firebase/auth';

@Component({
    selector: 'app-order-summary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit, OnDestroy {

    cartItems!: Cart[];
    totalAmount!: number;
    message!: string | null;
    storeSub!: Subscription;

    constructor(private addressService: AddressService, private router: Router, private store: Store<fromApp.AppState>, private http: HttpClient) { }

    ngOnInit(): void {
        this.storeSub = this.store.select('cart').subscribe(
            cartState => {
                this.cartItems = cartState.cartItems;
                this.totalAmount = cartState.totalAmount;
            }
        );
    }

    ngOnDestroy(): void {
        this.storeSub.unsubscribe();
    }

    onOrderPlaced() {
        const newOrder = new Order(this.cartItems, new Date(), this.addressService.getAddress(), this.totalAmount, "Ordered");
        this.store.dispatch(new orderActions.AddToOrders(newOrder));
        let orders : Order[];
        this.store.select('orders').subscribe(
            orderState => {
                orders = orderState.orders;
            }
        );

        auth.onAuthStateChanged(auth.getAuth(),
            user => {
                if (user) {
                    this.http.put("https://eshop-rahul-default-rtdb.firebaseio.com/orders/" + user.uid + "/" + (orders.length - 1) + ".json", newOrder).subscribe();
                }
            }
        );

        this.message = "Your order has been placed";

    }

    onClose() {
        this.message = null;
        this.store.dispatch(new cartActions.ClearCart());
        auth.onAuthStateChanged(auth.getAuth(),
            user => {
                if (user) {
                    this.http.delete("https://eshop-rahul-default-rtdb.firebaseio.com/cart/" + user.uid + ".json").subscribe();
                }
            }
        );
        this.router.navigate(['/myorders']);
    }
}
