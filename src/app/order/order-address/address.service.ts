import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  address: string = "Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016";

  constructor() { }

  setAddress(address: string) {
    this.address = address;
  }

  getAddress() {
    return this.address;
  }
}
