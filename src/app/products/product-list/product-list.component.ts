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

  products!: Product[];

  searchText!: string;

  constructor(private productService: ProductService, private searchService: SearchService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.searchService.search.subscribe(
      (searchText: string) => {
        searchText = searchText.trim();
        if (searchText != "") {
          this.searchText = searchText;
          this.products = [];
          for (let p of this.productService.getProducts()) {
            let catcheck = false;
            for (let c of p.category) {
              if (c.toLowerCase().includes(searchText.toLowerCase())) {
                catcheck = true;
                break;
              }
            }
            if (p.name.toLowerCase().includes(searchText.toLowerCase()) || catcheck) this.products.push(p);
          }
        } else this.products = this.productService.getProducts();
      }
    );
  }


}
