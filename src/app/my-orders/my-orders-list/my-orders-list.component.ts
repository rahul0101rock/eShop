import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { OrderService } from './../../order/order.service';
import { Order } from './../../order/order.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as fromApp from '../../store/app.reducer';

@Component({
  selector: 'app-my-orders-list',
  templateUrl: './my-orders-list.component.html',
  styleUrls: ['./my-orders-list.component.css']
})
export class MyOrdersListComponent implements OnInit,OnDestroy {

  orders!: Order[];
  storeSub!: Subscription;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.storeSub = this.store.select('orders').subscribe(
        orderState => {
            this.orders = orderState.orders;
        }
    );
  }

  ngOnDestroy(): void {
      this.storeSub.unsubscribe()
  }

}
