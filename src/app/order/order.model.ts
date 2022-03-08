import { Cart } from './../cart/cart.model';
export class Order {
    public orderItems: Cart[];
    public dateTime: Date;
    public address: string;
    public orderAmount: number;
    public orderStatus: string;

    constructor(orderItems: Cart[], address: string, orderAmount: number) {
        this.orderItems = orderItems;
        this.dateTime = new Date();
        this.address = address;
        this.orderAmount = orderAmount;
        this.orderStatus = "Ordered";
    }
}