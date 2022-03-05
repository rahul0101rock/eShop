import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBilvV3l34Et0OMiN5UD3zR3ffRReuah34",
  authDomain: "eshop-rahul.firebaseapp.com",
  projectId: "eshop-rahul",
  storageBucket: "eshop-rahul.appspot.com",
  messagingSenderId: "350625237276",
  appId: "1:350625237276:web:4f66001d811f1199bf12d9",
  measurementId: "G-DF8QJF26TH"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
