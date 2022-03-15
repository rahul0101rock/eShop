import { Cart } from './../cart.model';
import { Action } from '@ngrx/store';

export const ADD_TO_CART = 'ADD_TO_CART';

export class AddToCart implements Action{
    readonly type = ADD_TO_CART;

    constructor(public payload: Cart) { }
}

export type cartActions = AddToCart;
