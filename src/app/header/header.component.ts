import { CartService } from './../cart/cart.service';
import { Cart } from './../cart/cart.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as auth from 'firebase/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchText = "";
  cartItems!: Cart[];
  loggedIn: boolean = false;
  user: auth.User | null = null;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();

    if (this.user) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

    auth.onAuthStateChanged(auth.getAuth(),
      user => {
        this.user = user;
        if (user) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }
    );
    
  }

  onSearch() {
    if (this.searchText.trim().length > 0) {
      this.router.navigate(['/products'], { queryParams: { search: this.searchText.trim() } });
      this.searchText = "";
    }
  }

  onLogout(){
    auth.signOut(auth.getAuth());
  }
}
