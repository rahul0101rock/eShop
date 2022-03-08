import { Cart } from './../cart/cart.model';
export class Order {
    public orderItems: Cart[];
    public dateTime: Date;
    public address: string;
    public orderState: string;

    constructor(orderItems: Cart[], address: string) {
        this.orderItems = orderItems;
        this.dateTime = new Date();
        this.address = address;
        this.orderState = "Ordered";
    }
}