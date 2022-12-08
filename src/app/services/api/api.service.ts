import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>(
      "http://localhost:3000/productList")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProducts(){
    return this.http.get<any>(
      "http://localhost:3000/bolostradcional")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getProductz(){
    return this.http.get<any>(
      "http://localhost:3000/boloCobertura")
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  getProdutz(){
    return this.http.get<any>(
      "http://localhost:3000/bolofestas")
    .pipe(map((res:any)=>{
      return res;
    }))
  }




}
