import { Cart } from './../cart.model';
import { createAction, props } from '@ngrx/store';

export const AddToCart = createAction(
    '[CART] ADD_TO_CART',
    props<Cart>()
);
export const ClearCart = createAction(
    '[CART] CLEAR_CART'
);
export const ChangeCount = createAction(
    '[CART] CHANGE_COUNT',
    props<{ index: number, count: number }>()
);
export const RemoveFormCart = createAction(
    '[CART] REMOVE_FROM_CART',
    props<{ index: number }>()
);
