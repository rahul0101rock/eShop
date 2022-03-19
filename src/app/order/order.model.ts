import { Cart } from './../cart/cart.model';
export class Order {
    public orderItems: Cart[];
    public dateTime: Date;
    public address: string;
    public orderAmount: number;
    public orderStatus: string;

    constructor(orderItems: Cart[], dateTime: Date, address: string, orderAmount: number, orderStatus: string) {
        this.orderItems = orderItems;
        this.dateTime = dateTime;
        this.address = address;
        this.orderAmount = orderAmount;
        this.orderStatus = orderStatus;
    }
}
