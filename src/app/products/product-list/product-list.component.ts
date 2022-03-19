import { ProductStore } from './../store/products.store';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

    products$ = this.productStore.products$;;
    searchProducts!: { product: Product, index: number }[];
    searchText!: string;

    constructor(private route: ActivatedRoute, private readonly productStore: ProductStore) { }

    ngOnInit(): void {
        this.route.queryParamMap.subscribe(
            params => {
                this.searchText = <string>params.get('search');
                if (this.searchText) {
                    this.searchProducts = [];
                    this.products$.subscribe(
                        stateData => {
                            stateData.forEach((product, index) => {
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
                }
            }
        );
    }


}
