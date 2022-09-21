import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getLocaleDateFormat } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor(private _http:HttpClient){}

  getData(){
    let url_db="http://localhost:3000/myDatabase";
    return this._http.get(url_db);
  }
}
