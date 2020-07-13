import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  
import { HttpClient } from '@angular/common/http';  
import { ProductService } from 'src/app/services/product.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';

// import {CrudService} from "../../services/crud.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productID: number;
  productData: any;
  product_id:any;
  public error =null;
  uri = 'http://localhost:4200/products';  
  constructor(
    private actRoute: ActivatedRoute,
    private router: Router,
    private productService:ProductService,
    private eventEmitterService:EventEmitterService,

  
    // private crudService: CrudService,
    ) { }

  ngOnInit() {
    this.productID = this.actRoute.snapshot.params['id'];
  }

  loadProductDetails(productID){
   this.router.navigate(['/product',productID]); 
  }

  

}
