import { Store } from '@ngrx/store';
import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';
import * as fromApp from '../../store/app.reducer';
import * as cartActions from '../store/cart.actions';

@Component({
    selector: 'app-cart-amount',
    templateUrl: './cart-amount.component.html',
    styleUrls: ['./cart-amount.component.css']
})
export class CartAmountComponent implements OnInit, DoCheck, OnDestroy {

    totalAmount: number = 0;
    storeSub!: Subscription;

    constructor(private store: Store<fromApp.AppState>) { }

    ngOnInit(): void {
        this.storeSub = this.store.select('cart').subscribe(
            cartState => {
                this.totalAmount = cartState.totalAmount;
            }
        );
    }
    ngDoCheck(): void {
        this.store.dispatch(cartActions.TotalAmount());
    }

    ngOnDestroy(): void {
        this.storeSub.unsubscribe();
    }
}
