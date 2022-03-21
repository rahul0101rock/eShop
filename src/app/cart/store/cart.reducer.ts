import { createReducer, on } from '@ngrx/store';
import { Cart } from './../cart.model';
import {
    AddToCart,
    ClearCart,
    ChangeCount,
    RemoveFormCart,
} from './cart.actions';

export interface State {
    cartItems: Cart[];
    totalAmount: number;
}

const initialState: State = {
    cartItems: [],
    totalAmount: 0,
};

export const cartReducer = createReducer(
    initialState,
    on(AddToCart, (state, props) => ({
        ...state,
        cartItems: [...state.cartItems, props],
    })),
    on(ClearCart, (state) => ({
        ...state,
        cartItems: [],
    })),
    on(ChangeCount, (state, props) => {
        const cartItem = state.cartItems[props.index];
        const updatedCartItem = {
            ...cartItem,
            ...new Cart(cartItem.product, props.count, cartItem.productIndex),
        };
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[props.index] = updatedCartItem;
        return {
            ...state,
            cartItems: updatedCartItems,
        };
    }),
    on(RemoveFormCart, (state, props) => ({
        ...state,
        cartItems: state.cartItems.filter((cart, cartIndex) => {
            return cartIndex != props.index;
        }),
    }))
);
