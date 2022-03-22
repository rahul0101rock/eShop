import { Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Cart } from './../../cart.model';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../../../store/app.reducer';
import * as cartActions from '../../store/cart.actions';
import * as auth from 'firebase/auth';


@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit,OnDestroy {

    @Input() cartItem!: Cart;
    @Input() index!: number;
    sub$ = new Subject<void>();

    constructor(private store: Store<fromApp.AppState>, private http: HttpClient) { }

    ngOnInit(): void {

    }

    ngOnDestroy(): void {
        this.sub$.next();
        this.sub$.unsubscribe();
    }

    onIncreaseCount() {
        const c = this.cartItem.count + 1;
        this.store.dispatch(cartActions.ChangeCount({ index: this.index, count: c }));
        auth.onAuthStateChanged(auth.getAuth(),
            user => {
                if (user) {
                    this.http.put("https://eshop-rahul-default-rtdb.firebaseio.com/cart/" + user.uid + "/" + this.index + "/count" + ".json", c).subscribe();
                }
            }
        );
    }

    onDecreaseCount() {
        const c = this.cartItem.count - 1;
        this.store.dispatch(cartActions.ChangeCount({ index: this.index, count: c }));
        auth.onAuthStateChanged(auth.getAuth(),
            user => {
                if (user) {
                    this.http.put("https://eshop-rahul-default-rtdb.firebaseio.com/cart/" + user.uid + "/" + this.index + "/count" + ".json", c).subscribe();
                }
            }
        );
    }

    onRemoveItem() {
        this.store.dispatch(cartActions.RemoveFormCart({ index: this.index }));
        let cartItems: Cart[];
        this.store.select('cart').pipe(takeUntil(this.sub$)).subscribe(
            cartState => {
                cartItems = cartState.cartItems;
            }
        );
        auth.onAuthStateChanged(auth.getAuth(),
            user => {
                if (user) {
                    this.http.put("https://eshop-rahul-default-rtdb.firebaseio.com/cart/" + user.uid + ".json", cartItems).subscribe();
                }
            }
        );
    }
}
