import { Order } from './../order.model';
import { Action } from '@ngrx/store';

export const ADD_TO_ORDERS = "[ORDER] ADD_TO_ORDERS";
export const CLEAR_ORDERS = "[ORDER] CLEAR_ORDERS";

export class AddToOrders implements Action{
    readonly type = ADD_TO_ORDERS;

    constructor(public payload: Order) { }
}

export class ClearOrders implements Action{
    readonly type = CLEAR_ORDERS;
}

