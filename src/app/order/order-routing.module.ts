import { AuthGuard } from './../auth/auth.guard';
import { OrderComponent } from './order.component';
import { OrderGuard } from './order.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: OrderComponent, canActivate: [OrderGuard, AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRoutingModule { }
