import { CartService } from './../cart/cart.service';
import { CartComponent } from './../cart/cart.component';
import { Cart } from './../cart/cart.model';
import { SearchService } from './search.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText = "";
  cartItems!: Cart[];

  constructor(private searchService: SearchService, private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  onSearch() {
    this.searchService.search.next(this.searchText);
  }

}
