import { ActivatedRoute, Params } from '@angular/router';
import { OrderService } from './../../order/order.service';
import { Order } from './../../order/order.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders-detail',
  templateUrl: './my-orders-detail.component.html',
  styleUrls: ['./my-orders-detail.component.css']
})
export class MyOrdersDetailComponent implements OnInit {

  order!: Order;
  id!: number;
  isLoading = false;

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.isLoading = true;
        setTimeout(() => {
          this.order = this.orderService.getOrder(this.id);
          this.isLoading = false;
        }, 300);

      }
    );
  }

}
