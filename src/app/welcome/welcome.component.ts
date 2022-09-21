import { Component, OnInit } from '@angular/core';
import { InMemoryDataService } from '../in-memory-data.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],

})
export class WelcomeComponent implements OnInit {



  ngOnInit(): void {
  }
  getdata:any;
  
  constructor(private user:InMemoryDataService){
    this.user.getData().subscribe(data=>{
     this.getdata=data;
      console.log(data);
    })
  }


}
