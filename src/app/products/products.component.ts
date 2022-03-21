import { ProductStore } from './store/products.store';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    providers: [ProductStore]
})
export class ProductsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

}
