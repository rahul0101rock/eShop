import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'myorders', loadChildren: () => import('./my-orders/my-orders.module').then(m => m.MyOrdersModule) },
  { path: '**', redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes ,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
