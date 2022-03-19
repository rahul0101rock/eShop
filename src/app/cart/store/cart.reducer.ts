import { createReducer, createSelector, on } from '@ngrx/store';
import { Cart } from './../cart.model';
import * as cartActions from './cart.actions';

export interface State {
    cartItems: Cart[];
    totalAmount: number;
}

const initialState: State = {
    cartItems: [],
    totalAmount: 0
}

export const cartReducer = createReducer(
    initialState,
    on(cartActions.AddToCart, (state, props) => (
        {
            ...state,
            cartItems: [...state.cartItems, props]
        }
    )),
    on(cartActions.ClearCart, (state) => (
        {
            ...state,
            cartItems: []
        }
    )),
    on(cartActions.ChangeCount, (state, props) => {
        const cartItem = state.cartItems[props.index];
        const updatedCartItem = {
            ...cartItem, ...new Cart(cartItem.product, props.count, cartItem.productIndex)
        };
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[props.index] = updatedCartItem;
        return {
            ...state,
            cartItems: updatedCartItems
        }
    }
    ),
    on(cartActions.RemoveFormCart, (state, props) => (
        {
            ...state,
            cartItems: state.cartItems.filter(
                (cart, cartIndex) => {
                    return cartIndex != props.index;
                }
            )
        }
    )
    ),
    on(cartActions.TotalAmount, (state) => {
        let totalAmnt = 0;
        for (let item of state.cartItems) {
            totalAmnt += item.product.price * item.count;
        }
        return {
            ...state,
            totalAmount: totalAmnt
        }
    }
    ),
);
