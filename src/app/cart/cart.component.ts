import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { Component, OnInit } from '@angular/core';
import * as fromApp from '../store/app.reducer';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    cartItems!: Observable<{ cartItems: Cart[] }>;

    constructor(private cartService: CartService, private store: Store<fromApp.AppState>) { }

    ngOnInit(): void {
        this.cartItems = this.store.select('cart');
    }
}
