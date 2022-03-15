import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import * as fromApp from '../store/app.reducer';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit,OnDestroy {

    cartItems!: Cart[];
    storeSub!: Subscription;

    constructor(private cartService: CartService, private store: Store<fromApp.AppState>) { }

    ngOnInit(): void {
        this.storeSub = this.store.select('cart')
            .pipe(map( cartState => cartState.cartItems ))
            .subscribe(
                (cart: Cart[]) => {
                    this.cartItems = cart;
                }
            );
    }

    ngOnDestroy(): void {
        this.storeSub.unsubscribe();
    }
}
