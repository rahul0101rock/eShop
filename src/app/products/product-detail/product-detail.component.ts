import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Cart } from './../../cart/cart.model';
import { Product } from './../product.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as cartActions from '../../cart/store/cart.actions';
import * as fromApp from '../../store/app.reducer';
import * as auth from 'firebase/auth';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

    product!: Product;
    id!: number;
    addedToCart = false;
    storeSub!: Subscription;

    constructor(private route: ActivatedRoute, private http: HttpClient, private store: Store<fromApp.AppState>) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.storeSub = this.store.select('products').subscribe(
                    stateData => {
                        this.product = stateData.products[this.id];
                    }
                );
            }
        );
        this.storeSub = this.store.select('cart')
            .subscribe(
                cartState => {
                    for (let cartItem of cartState.cartItems) {
                        if (cartItem.product.name == this.product.name) {
                            this.addedToCart = true;
                        }
                    }
                }
            );

    }

    ngOnDestroy(): void {
        this.storeSub.unsubscribe();
    }

    onAddToCart() {
        this.store.dispatch(new cartActions.AddToCart(new Cart(this.product, 1, this.id)));
        let cartItems: Cart[];
        this.storeSub = this.store.select('cart').subscribe(
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
        this.addedToCart = true;
    }
}
