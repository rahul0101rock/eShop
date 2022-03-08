import { Order } from './order.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as auth from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orders: Order[] = [];

  constructor(private http: HttpClient) {
    this.setOrders();
   }

  getOrders() {
    return this.orders;
  }
  getOrder(index: number) {
    return this.orders[index];
  }

  addToOrder(order: Order) {
    this.orders.push(order);
    this.updateOrders();
  }

  setOrders() {
    auth.onAuthStateChanged(auth.getAuth(),
      user => {
        if (user) {
          this.http.get<Order[]>("https://eshop-rahul-default-rtdb.firebaseio.com/orders/" + user.uid + ".json").subscribe(
            orders => {
              if(orders){
                this.orders.splice(0,this.orders.length);
                for(let order of orders){
                  this.orders.push(new Order(order.orderItems,order.dateTime,order.address,order.orderAmount,order.orderStatus));
                }
              }
            }
          );
        }
      }
    );
  }

  updateOrders() {
    auth.onAuthStateChanged(auth.getAuth(),
      user => {
        if (user) {
          this.http.put("https://eshop-rahul-default-rtdb.firebaseio.com/orders/" + user.uid + ".json", this.orders).subscribe();
        }
      }
    );
  }
}
