import { CartService } from './../../cart.service';
import { Cart } from './../../cart.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem! : Cart;
  @Input() index! : number; 

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  onIncreaseCount(){
    const c = this.cartItem.count + 1;
    this.cartService.changeCount(this.index,c);
  }

  onDecreaseCount(){
    const c = this.cartItem.count - 1;
    this.cartService.changeCount(this.index,c);
  }

  onRemoveItem(){
    this.cartService.removeCartItem(this.index);
  }
}
