import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  products:any;

  constructor(private _matservice:InMemoryDataService) { 
    this._matservice.getData().subscribe(data=>{
      this.products=data;
    })  
  }

  ngOnInit(): void
  {
    
  }
  dataEnter(products:any){

  }

  setClasses(product:any){

  }

  buy(product:any){

  }
}

