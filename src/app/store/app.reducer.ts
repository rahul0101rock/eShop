import { ActionReducerMap } from '@ngrx/store';
import * as fromCart from '../cart/store/cart.reducer';

export interface AppState {
    cart: fromCart.State
}

export const appReducer: ActionReducerMap<AppState> = {
    cart: fromCart.cartReducer
};
