import { ProductsComponent } from './products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { StoreModule } from '@ngrx/store';
import { productsReducer } from './store/products.reducer';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    StoreModule.forRoot({products: productsReducer})
  ]
})
export class ProductsModule { }
