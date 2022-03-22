import { Cart } from './../cart.model';
import { State } from './cart.reducer';
import { createSelector } from '@ngrx/store';

export const selectCart = (state: State)  => state.cartItems;

export const TotalAmount = createSelector(
    selectCart,
    (cartItems: Cart[]) => {
        let totalAmnt = 0;
        for (let item of cartItems) {
            totalAmnt += item.product.price * item.count;
        }
        return {
            cartItems: cartItems,
            totalAmount: totalAmnt
        }
    }
);

export const TotalItems = createSelector(
    selectCart,
    (cartItems: Cart[]) => {
        let cartItemsLength = 0;
        for (let cartItem of cartItems) {
            cartItemsLength += cartItem.count;
        }
        return cartItemsLength
    }
);
