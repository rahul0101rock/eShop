import { TotalAmount } from './../../cart/store/cart.selectors';
import { OrderStore } from './../store/order.store';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { AddressService } from './../order-address/address.service';
import { Cart } from './../../cart/cart.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Order } from '../order.model';
import * as fromApp from '../../store/app.reducer';
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
    sub$ = new Subject<void>();

    constructor(
        private addressService: AddressService,
        private router: Router,
        private store: Store<fromApp.AppState>,
        private http: HttpClient,
        private orderStore: OrderStore
    ) { }

    ngOnInit(): void {
        this.store.select('cart').pipe(select(TotalAmount),takeUntil(this.sub$))
        .subscribe((cartState) => {
            this.cartItems = cartState.cartItems;
            this.totalAmount = cartState.totalAmount;
        });
    }

    ngOnDestroy(): void {
        this.sub$.next();
        this.sub$.unsubscribe();
    }

    onOrderPlaced() {
        const newOrder = new Order(
            this.cartItems,
            new Date(),
            this.addressService.getAddress(),
            this.totalAmount,
            'Ordered'
        );
        this.orderStore.AddToOrder(newOrder);
        let orders: Order[];
        this.orderStore.orders$.subscribe((orderState) => {
            orders = orderState;
        });

        auth.onAuthStateChanged(auth.getAuth(), (user) => {
            if (user) {
                this.http
                    .put(
                        'https://eshop-rahul-default-rtdb.firebaseio.com/orders/' +
                        user.uid +
                        '/' +
                        (orders.length - 1) +
                        '.json',
                        newOrder
                    )
                    .subscribe();
            }
        });

        this.message = 'Your order has been placed';
    }

    onClose() {
        this.message = null;
        this.store.dispatch(cartActions.ClearCart());
        auth.onAuthStateChanged(auth.getAuth(), (user) => {
            if (user) {
                this.http
                    .delete(
                        'https://eshop-rahul-default-rtdb.firebaseio.com/cart/' +
                        user.uid +
                        '.json'
                    )
                    .subscribe();
            }
        });
        this.router.navigate(['/myorders']);
    }
}
