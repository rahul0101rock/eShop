import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params } from '@angular/router';
import { Order } from './../../order/order.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-my-orders-detail',
  templateUrl: './my-orders-detail.component.html',
  styleUrls: ['./my-orders-detail.component.css']
})
export class MyOrdersDetailComponent implements OnInit,OnDestroy {

  order!: Order;
  id!: number;
  storeSub! : Subscription;

  constructor(private route: ActivatedRoute,private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.storeSub = this.store.select('orders').subscribe(
            orderState => {
                this.order = orderState.orders[this.id];;
            }
        );
      }
    );
  }

  ngOnDestroy(): void {
      this.storeSub.unsubscribe();
  }
}
