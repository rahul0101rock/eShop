import { Action } from '@ngrx/store';
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
        case cartActions.REMOVE_FROM_CART:
            const removeFormCartAction = action as cartActions.RemoveFormCart;
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (cart,cartIndex) => {
                        return cartIndex != removeFormCartAction.payload;
                    }
                )
            }
        case cartActions.TOTAL_AMOUNT:
            let totalAmnt = 0;
            for(let item of state.cartItems){
                totalAmnt += item.product.price * item.count;
            }
            return {
                ...state,
                totalAmount: totalAmnt
            }
        default:
            return state;
    }
}
