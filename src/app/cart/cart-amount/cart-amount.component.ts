import { select, Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import { TotalAmount } from '../store/cart.selectors';

@Component({
    selector: 'app-cart-amount',
    templateUrl: './cart-amount.component.html',
    styleUrls: ['./cart-amount.component.css'],
})
export class CartAmountComponent implements OnInit, OnDestroy {
    totalAmount: number = 0;
    storeSub!: Subscription;

    constructor(private store: Store<fromApp.AppState>) {}

    ngOnInit(): void {
        this.storeSub = this.store
            .select('cart')
            .pipe(select(TotalAmount))
            .subscribe((cartState) => {
                this.totalAmount = cartState.totalAmount;
            });
    }

    ngOnDestroy(): void {
        this.storeSub.unsubscribe();
    }
}
