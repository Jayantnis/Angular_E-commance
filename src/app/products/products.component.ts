import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 
alldata:any;
  
  constructor(private user:InMemoryDataService){
    this.user.getData().subscribe(data=>{
     this.alldata=data;
      console.log(data);
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
total_result:any;
  dataEnter(user:any)
  {
    
  }
}
