import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import{CarouselModule} from 'ngx-owl-carousel-o'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// api calling 
import {HttpClientModule} from '@angular/common/http';
import { InMemoryDataService } from './in-memory-data.service';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductsComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,CarouselModule,NgbModule,HttpClientModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [InMemoryDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
