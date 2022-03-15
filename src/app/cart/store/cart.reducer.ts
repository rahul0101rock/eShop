import { Action } from '@ngrx/store';
import { Cart } from './../cart.model';
import * as cartActions from './cart.actions';

export interface State {
    cartItems: Cart[];
}

const initialState: State = {
    cartItems: []
}

export function cartReducer(state = initialState, action: Action) {
    switch (action.type) {
        case cartActions.ADD_TO_CART:
            const addTOCartAction = action as cartActions.AddToCart;
            return {
                ...state,
                cartItems: [...state.cartItems, addTOCartAction.payload]
            }
        case cartActions.CHANGE_COUNT:
            const changeCountAction = action as cartActions.ChangeCount;
            const cartItem = state.cartItems[changeCountAction.payload.index];
            const updatedCartItem = {
                ...cartItem, ...new Cart(cartItem.product,changeCountAction.payload.count,cartItem.productIndex)
            };
            const updatedCartItems = [...state.cartItems];
            updatedCartItems[changeCountAction.payload.index] = updatedCartItem;
            return {
                ...state,
                cartItems: updatedCartItems
            }
        default:
            return state;
    }
}
