import { ActivatedRoute, Params } from '@angular/router';
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
  searchProducts!: {product: Product, index: number}[];
  searchText!: string;

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.route.queryParamMap.subscribe(
      params =>{
        this.searchText = <string> params.get('search');
        if (this.searchText) {
          this.searchProducts = [];
          for (let product of this.productService.getProducts()) {
            let catcheck = false;
            for (let categoryItem of product.category) {
              if (categoryItem.toLowerCase().includes(this.searchText.toLowerCase())) {
                catcheck = true;
                break;
              }
            }
            if (product.name.toLowerCase().includes(this.searchText.toLowerCase()) || catcheck){
              this.searchProducts.push({product: product,index: this.products.indexOf(product)});
            }
          }
        }else{
          this.products = this.productService.getProducts();
        }
      }
    );
  }


}
