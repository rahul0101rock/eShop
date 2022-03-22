import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-cart-amount',
    templateUrl: './cart-amount.component.html',
    styleUrls: ['./cart-amount.component.css'],
})
export class CartAmountComponent implements OnInit {
    @Input() totalAmount!: number;

    constructor() {}

    ngOnInit(): void {
    }
}
