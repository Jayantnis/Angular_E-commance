import { Component } from '@angular/core';
import {InMemoryDataService} from './in-memory-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ecommerce';

  // constructor(private user:InMemoryDataService){
  //   this.user.getData().subscribe(data=>{
  //     console.log(data);
  //   })
  // }

}
