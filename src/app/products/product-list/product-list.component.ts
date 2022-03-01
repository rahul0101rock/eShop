import { SearchService } from './../../header/search.service';
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

  constructor(private productService: ProductService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.searchService.search.subscribe(
      (searchText: string) => {
        if(searchText!=""){
        this.products = [];
        for (let p of this.productService.getProducts()){
          if(p.name.toLowerCase().includes(searchText.toLowerCase())) this.products.push(p);
        }
      }else this.products = this.productService.getProducts();
      }
    );
  }


}
