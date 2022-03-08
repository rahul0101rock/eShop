import { Order } from './order.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [];

  constructor() { }

  getOrders() {
    return this.orders;
  }
  getOrder(index: number) {
    return this.orders[index];
  }

  addToOrder(order: Order) {
    this.orders.push(order);
  }
}
