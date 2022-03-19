import { LoggedInGuard } from './logged-in.guard';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate: [LoggedInGuard] },
    { path: 'signup', component: SignupComponent, canActivate: [LoggedInGuard] },
    { path: '**', redirectTo: "/" },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
