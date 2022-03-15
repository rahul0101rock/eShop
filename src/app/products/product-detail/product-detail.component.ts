import { Store } from '@ngrx/store';
import { Cart } from './../../cart/cart.model';
import { CartService } from './../../cart/cart.service';
import { ProductService } from './../product.service';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import * as cartActions from '../../cart/store/cart.actions';
import * as fromApp from '../../store/app.reducer';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

    product!: Product;
    id!: number;
    addedToCart = false;
    constructor(private productService: ProductService, private route: ActivatedRoute, private cartService: CartService, private store: Store<fromApp.AppState>) { }

    ngOnInit(): void {
        this.route.params.subscribe(
            (params: Params) => {
                this.id = +params['id'];
                // this.product = this.productService.getProduct(this.id);
                this.store.select('products').subscribe(
                    stateData => {
                        this.product = stateData.products[this.id];
                    }
                );
            }
        );

        for (let cartItem of this.cartService.getCartItems()) {
            if (cartItem.product.name == this.product.name) {
                this.addedToCart = true;
            }
        }
    }

    onAddToCart() {
        // this.productService.producttoCart(this.product, this.id);
        this.store.dispatch(new cartActions.AddToCart(new Cart(this.product,1,this.id)));
        this.addedToCart = true;
    }
}
