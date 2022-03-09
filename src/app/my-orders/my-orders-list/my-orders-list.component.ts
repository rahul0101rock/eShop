import { OrderService } from './../../order/order.service';
import { Order } from './../../order/order.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders-list',
  templateUrl: './my-orders-list.component.html',
  styleUrls: ['./my-orders-list.component.css']
})
export class MyOrdersListComponent implements OnInit {

  orders!: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders();
  }

}
