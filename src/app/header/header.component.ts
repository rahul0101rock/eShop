import { TotalItems } from './../cart/store/cart.selectors';
import { HttpClient } from '@angular/common/http';
import { Subject, takeUntil } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Cart } from './../cart/cart.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';
import * as fromApp from '../store/app.reducer';
import * as cartActions from '../cart/store/cart.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
    searchText = '';
    cartItemsLength!: number;
    loggedIn: boolean = false;
    user: auth.User | null = null;
    timer!: ReturnType<typeof setTimeout>;
    sub$ = new Subject<void>();

    constructor(
        private router: Router,
        private store: Store<fromApp.AppState>,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        auth.onAuthStateChanged(auth.getAuth(), (user) => {
            if (user) {
                this.http
                    .get<Cart[]>(
                        'https://eshop-rahul-default-rtdb.firebaseio.com/cart/' +
                            user.uid +
                            '.json'
                    )
                    .subscribe((cartItems) => {
                        if (cartItems) {
                            this.store.dispatch(cartActions.ClearCart());
                            for (let item of cartItems) {
                                this.store.dispatch(
                                    cartActions.AddToCart(item)
                                );
                            }
                        }
                    });
            }
        });

        this.store.select('cart').pipe(select(TotalItems),takeUntil(this.sub$))
            .subscribe(
                TotalItems => {
                    this.cartItemsLength = TotalItems;
                }
            );

        if (this.user) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
        }

        auth.onAuthStateChanged(auth.getAuth(), (user) => {
            this.user = user;
            if (user) {
                this.loggedIn = true;
            } else {
                this.loggedIn = false;
            }
        });
    }

    onSearch() {
        if (this.searchText.trim().length > 0) {
            this.router.navigate(['/products'], {
                queryParams: { search: this.searchText.trim() },
            });
        } else {
            this.router.navigate(['/products']);
        }
    }

    onKeyPressed() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.onSearch();
        }, 600);
    }

    onLogout() {
        auth.signOut(auth.getAuth());
    }

    ngOnDestroy(): void {
        this.sub$.next();
        this.sub$.unsubscribe();
    }
}
