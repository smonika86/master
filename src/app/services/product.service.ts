import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseurl = 'http://localhost:4200' ;
 product:any;
  constructor(private http:HttpClient) { }

  singleProductPage(data){
    // this.product.push(data);
    
    return this.http.post(`${this.baseurl}/product`,data)
  }

}


