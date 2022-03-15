import { Cart } from './../cart.model';
import { Action } from '@ngrx/store';

export const ADD_TO_CART = '[CART] ADD_TO_CART';
export const CHANGE_COUNT = '[CART] CHANGE_COUNT';
export const REMOVE_FROM_CART = '[CART] REMOVE_FROM_CART';
export const TOTAL_AMOUNT = '[CART] TOTAL_AMOUNT';
export const CLEAR_CART = '[CART] CLEAR_CART';

export class AddToCart implements Action {
    readonly type = ADD_TO_CART;

    constructor(public payload: Cart) { }
}

export class ClearCart implements Action {
    readonly type = CLEAR_CART;
}

export class ChangeCount implements Action {
    readonly type = CHANGE_COUNT;

    constructor(public payload: { index: number, count: number }) { }
}

export class RemoveFormCart implements Action {
    readonly type = REMOVE_FROM_CART;

    constructor(public payload: number) { }
}

export class TotalAmount implements Action {
    readonly type = TOTAL_AMOUNT;
}
