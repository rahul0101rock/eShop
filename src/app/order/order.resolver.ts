import { Store } from '@ngrx/store';
import { Order } from './order.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as auth from 'firebase/auth';
import * as fromApp from '../store/app.reducer';
import * as orderActions from './store/order.actions';
import {
    Router, Resolve,
    RouterStateSnapshot,
    ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderResolver implements Resolve<boolean> {

    constructor(private http: HttpClient,private store: Store<fromApp.AppState>) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        auth.onAuthStateChanged(auth.getAuth(),
            user => {
                if (user) {
                    this.http.get<Order[]>("https://eshop-rahul-default-rtdb.firebaseio.com/orders/" + user.uid + ".json").subscribe(
                        orders => {
                            if (orders) {
                                this.store.dispatch(new orderActions.ClearOrders());
                                for(let order of orders){
                                    this.store.dispatch(new orderActions.AddToOrders(order));
                                }
                            }
                        }
                    );
                }
            }
        );
        return true;
    }
}
