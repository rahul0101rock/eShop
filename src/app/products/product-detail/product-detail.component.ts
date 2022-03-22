import { AddToCart } from './../../cart/store/cart.actions';
import { ProductStore } from './../store/products.store';
import { HttpClient } from '@angular/common/http';
import { takeUntil, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { Cart } from './../../cart/cart.model';
import { Product } from './../product.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
    sub$ = new Subject<void>();

    constructor(private route: ActivatedRoute, private http: HttpClient, private store: Store<fromApp.AppState>, private productStore: ProductStore) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.productStore.products$.subscribe(
                    stateData => {
                        this.product = stateData[this.id];
                    }
                );
            }
        );
        this.store.select('cart').pipe(takeUntil(this.sub$))
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
        this.sub$.next();
        this.sub$.unsubscribe();
    }

    onAddToCart() {
        this.store.dispatch(AddToCart(new Cart(this.product, 1, this.id)));
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
        this.addedToCart = true;
    }
}
