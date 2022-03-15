import { Cart } from './../cart.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  @Input() cartItems!: Cart[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }
}
