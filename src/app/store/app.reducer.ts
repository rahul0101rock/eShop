import { ActionReducerMap } from '@ngrx/store';
import * as fromCart from '../cart/store/cart.reducer';
import * as fromProducts from '../products/store/products.reducer';
import * as formOrder from '../order/store/order.reducer';

export interface AppState {
    products: fromProducts.State;
    cart: fromCart.State;
    orders: formOrder.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    products: fromProducts.productsReducer,
    cart: fromCart.cartReducer,
    orders: formOrder.orderReducer
};
