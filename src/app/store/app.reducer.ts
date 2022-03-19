import { ActionReducerMap } from '@ngrx/store';
import * as fromCart from '../cart/store/cart.reducer';
import * as formOrder from '../order/store/order.reducer';

export interface AppState {
    cart: fromCart.State;
    orders: formOrder.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    cart: fromCart.cartReducer,
    orders: formOrder.orderReducer
};
