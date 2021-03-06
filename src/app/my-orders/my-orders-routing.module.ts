import { AuthGuard } from './../auth/auth.guard';
import { MyOrdersDetailComponent } from './my-orders-detail/my-orders-detail.component';
import { MyOrdersListComponent } from './my-orders-list/my-orders-list.component';
import { MyOrdersComponent } from './my-orders.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

const routes: Routes = [
    {
        path: '', component: MyOrdersComponent, canActivate: [AuthGuard], children: [
            { path: '', component: MyOrdersListComponent},
            { path: ':id', component: MyOrdersDetailComponent},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MyOrdersRoutingModule { }
