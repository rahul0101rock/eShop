import { CartService } from './../cart.service';
import { Cart } from './../cart.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart-amount',
  templateUrl: './cart-amount.component.html',
  styleUrls: ['./cart-amount.component.css']
})
export class CartAmountComponent implements OnInit, DoCheck {

  totalAmount: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.cartService.totalAmount();
    this.totalAmount = this.cartService.totalAmnt;
  }

}
