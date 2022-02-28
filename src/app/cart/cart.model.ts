import { Product } from './../products/product.model';
export class Cart{
    public product: Product;
    public count : number;
    public productIndex: number;

    constructor(product: Product, count: number, index: number){
        this.product=product;
        this.count=count;
        this.productIndex=index;
    }
}