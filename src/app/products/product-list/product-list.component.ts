import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products! : Product[];

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }


}
