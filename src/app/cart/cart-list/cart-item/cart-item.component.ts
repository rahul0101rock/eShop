import { Store } from '@ngrx/store';
import { CartService } from './../../cart.service';
import { Cart } from './../../cart.model';
import { Component, Input, OnInit } from '@angular/core';
import * as fromApp from '../../../store/app.reducer';
import * as cartActions from '../../store/cart.actions';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem!: Cart;
  @Input() index!: number;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

  onIncreaseCount() {
    const c = this.cartItem.count + 1;
    this.store.dispatch(new cartActions.ChangeCount({index: this.index, count: c}));
  }

  onDecreaseCount() {
    const c = this.cartItem.count - 1;
    this.store.dispatch(new cartActions.ChangeCount({index: this.index, count: c}));
  }

  onRemoveItem() {
    this.store.dispatch(new cartActions.RemoveFormCart(this.index));
  }
}
