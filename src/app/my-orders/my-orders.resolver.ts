import { Order } from './../order/order.model';
import { OrderService } from './../order/order.service';
import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyOrdersResolver implements Resolve<Order[]> {

  constructor(private orderService: OrderService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> | Order[] {
    const orders = this.orderService.getOrders();
    if (orders.length == 0) {
      this.orderService.setOrders();
      return this.orderService.getOrders();
    } else {
      return orders;
    }
  }
}
