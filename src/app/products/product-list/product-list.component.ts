import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products!: Observable<{ products: Product[] }>;
    searchProducts!: { product: Product, index: number }[];
    searchText!: string;

    constructor(private productService: ProductService, private route: ActivatedRoute, private store: Store<{ products: { products: Product[] } }>) { }

    ngOnInit(): void {
        this.products = this.store.select('products');
        this.route.queryParamMap.subscribe(
            params => {
                this.searchText = <string>params.get('search');
                if (this.searchText) {
                    this.searchProducts = [];
                    this.store.select('products').subscribe(
                        stateData => {
                            stateData.products.forEach((product, index) => {
                                let catcheck = false;
                                for (let categoryItem of product.category) {
                                    if (categoryItem.toLowerCase().includes(this.searchText.toLowerCase())) {
                                        catcheck = true;
                                        break;
                                    }
                                }
                                if (product.name.toLowerCase().includes(this.searchText.toLowerCase()) || catcheck) {
                                    this.searchProducts.push({ product: product, index: index });
                                }
                            });
                        }
                    );
                } else {
                    this.products = this.store.select('products');
                }
            }
        );
    }


}
