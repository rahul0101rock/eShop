import { Cart } from './../cart/cart.model';
import { Store } from '@ngrx/store';
import { CartService } from './../cart/cart.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducer';

@Injectable({
    providedIn: 'root'
})
export class OrderGuard implements CanActivate {

    constructor(private cartService: CartService, private router: Router, private store: Store<fromApp.AppState>) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        let cartItems : Cart[] = [];
        this.store.select('cart').subscribe(
            cartState => {
                cartItems = cartState.cartItems;
            }
        );
        if (cartItems.length >0) {
            return true;
        } else {
            this.router.navigate(['/cart']);
            return false;
        }
    }

}
