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
    const cartAction = action as cartActions.cartActions;
    switch (action.type) {
        case cartActions.ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, cartAction.payload]
            }
        default:
            return state;
    }
}
