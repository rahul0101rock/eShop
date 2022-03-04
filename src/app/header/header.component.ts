import { CartService } from './../cart/cart.service';
import { Cart } from './../cart/cart.model';
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

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  onSearch() {
    if(this.searchText.trim().length>0){
      this.router.navigate(['/products'], {queryParams: {search : this.searchText.trim() }});
      this.searchText="";
    }
  }

}
