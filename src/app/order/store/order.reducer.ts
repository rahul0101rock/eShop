import { Action } from '@ngrx/store';
import { Order } from './../order.model';
import * as orderActions from './order.actions';

export interface State {
    orders: Order[];
}

const initialState: State = {
    orders: []
}

export function orderReducer(state = initialState, action: Action) {
    const orderAction = action as orderActions.AddToOrders;
    switch (action.type) {
        case orderActions.ADD_TO_ORDERS:
            return {
                ...state,
                orders: [...state.orders, orderAction.payload]
            }
        case orderActions.CLEAR_ORDERS:
            return {
                ...state,
                orders: []
            }
        default:
            return state;
    }
}
