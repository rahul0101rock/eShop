import { TotalAmount } from './store/cart.selectors';
import { Store, select } from '@ngrx/store';
import { map, Subject, takeUntil } from 'rxjs';
import { Cart } from './cart.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as fromApp from '../store/app.reducer';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

    cartItems!: Cart[];
    totalAmount!: number;
    sub$ = new Subject<void>();

    constructor(private store: Store<fromApp.AppState>) { }

    ngOnInit(): void {
        this.store.select('cart').pipe(select(TotalAmount),takeUntil(this.sub$))
            .subscribe(
                cartState => {
                    this.cartItems = cartState.cartItems;
                    this.totalAmount = cartState.totalAmount;
                }
            );
    }

    ngOnDestroy(): void {
        this.sub$.next();
        this.sub$.unsubscribe();
    }
}
