import { AddressService } from './address.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-order-address',
    templateUrl: './order-address.component.html',
    styleUrls: ['./order-address.component.css']
})
export class OrderAddressComponent implements OnInit {

    address!: string;
    inEditMode = false;
    @ViewChild('addressField', { static: false }) addressField!: ElementRef;

    constructor(private addressService: AddressService) { }

    ngOnInit(): void {
        this.address = this.addressService.getAddress();
    }

    onSwitch(): void {
        this.inEditMode = !this.inEditMode;
    }

    onSave() {
        this.address = this.addressField.nativeElement.value;
        this.addressService.setAddress(this.address);
        this.inEditMode = !this.inEditMode;
    }

}
