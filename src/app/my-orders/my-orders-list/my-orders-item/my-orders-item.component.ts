import { Order } from './../../../order/order.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-orders-item',
  templateUrl: './my-orders-item.component.html',
  styleUrls: ['./my-orders-item.component.css']
})
export class MyOrdersItemComponent implements OnInit {

  @Input() order!: Order;
  @Input() index!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
