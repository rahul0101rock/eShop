import { OrderStore } from './order/store/order.store';
import { appReducer } from './store/app.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forRoot(appReducer),
        BrowserAnimationsModule,
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: environment.production,
            autoPause: true,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
