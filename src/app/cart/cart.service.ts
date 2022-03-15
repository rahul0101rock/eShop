import { Store } from '@ngrx/store';
import { HttpClient } from '@angular/common/http';
import { Cart } from './cart.model';
import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import * as fromApp from '../store/app.reducer';
import * as cartActions from './store/cart.actions';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private cartItems: Cart[] = [];

    public totalAmnt = 0;


    constructor(private http: HttpClient, private store: Store<fromApp.AppState>) {
        this.setCartItems();
    }

    setCartItems() {
        auth.onAuthStateChanged(auth.getAuth(),
            user => {
                if (user) {
                    this.http.get<Cart[]>("https://eshop-rahul-default-rtdb.firebaseio.com/cart/" + user.uid + ".json").subscribe(
                        cartItems => {
                            if (cartItems) {
                                this.store.dispatch(new cartActions.ClearCart());
                                for (let item  of cartItems){
                                    this.store.dispatch(new cartActions.AddToCart(item));
                                }
                            }
                        }
                    );
                }
            }
        );
    }

    getCartItems() {
        return this.cartItems;
      }

    updateCart() {
        auth.onAuthStateChanged(auth.getAuth(),
            user => {
                if (user) {
                    this.http.put("https://eshop-rahul-default-rtdb.firebaseio.com/cart/" + user.uid + ".json", this.cartItems).subscribe();
                }
            }
        );
    }

    clearCart(){
      }

}
