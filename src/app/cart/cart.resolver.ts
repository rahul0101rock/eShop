import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Cart } from './cart.model';
import { Injectable } from '@angular/core';
import * as fromApp from './../store/app.reducer';
import * as auth from 'firebase/auth';
import * as cartActions from './store/cart.actions';

import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CartResolver implements Resolve<boolean> {

    constructor(private store: Store<fromApp.AppState>, private http: HttpClient) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        auth.onAuthStateChanged(auth.getAuth(),
            user => {
                if (user) {
                    auth.onAuthStateChanged(auth.getAuth(),
                        user => {
                            if (user) {
                                this.http.get<Cart[]>("https://eshop-rahul-default-rtdb.firebaseio.com/cart/" + user.uid + ".json").subscribe(
                                    cartItems => {
                                        if (cartItems) {
                                            this.store.dispatch(new cartActions.ClearCart());
                                            for (let item of cartItems) {
                                                this.store.dispatch(new cartActions.AddToCart(item));
                                            }
                                        }
                                    }
                                );
                            }
                        }
                    );
                }
            }
        );
        return true;
    }
}
