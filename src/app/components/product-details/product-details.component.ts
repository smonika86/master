import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productID:any;
  productData:any;
  loading: boolean = true;
  status: boolean = false;
  extraShot =0;
  constructor(
    private actroute:ActivatedRoute,
  ) {
   
   }

  ngOnInit() {
    
    this.productID = this.actroute.snapshot.paramMap.get('id')
    if(this.productID==1){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/59579505-c016-4678-8205-cfe2528a0bff/640x422',name:'Espresso',desc:'Espresso shot',price: 'KWD 1.100'};
    }else if(this.productID==2){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/f7adb0dd-2502-4ff0-a9b4-c1049d7c665b/640x422',name:'Espresso Macchiato',desc:'Espresso shot with foamed milk.',price: 'KWD 1.350'};
    }else if(this.productID==3){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/13bc46ae-0d4b-436f-8a9c-44e90de17e83/640x422',name:'Hot Americano',desc:'Espresso shot with water. Freshly brewed coffee',price: 'KWD 1.250'};
    }else if(this.productID==4){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/df27d922-4dae-45b3-a0a3-1ce47ced443f/640x422',name:'Iced Americano',desc:'Espresso shot with water. Freshly brewed coffee',price: 'KWD 1.350'};
    }else if(this.productID==5){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/df27d922-4dae-45b3-a0a3-1ce47ced443f/640x422',name:'Cold Press',desc:'Brewed coffee bottle steeped in cold water for a minimum of 12 hours extraction. 270 ml',price: 'KWD 1.850'};
    }else if(this.productID==6){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/e579fd95-0cdf-48c9-9d37-71b57e5e56b9/640x422',name:'Iced Cafe Latte',desc:'Espresso shot with fresh milk',price: 'KWD 1.850'};
    }else if(this.productID==7){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/52d25abb-4345-46f1-86f0-7161b4035005/640x422',name:'Chemex - 1 Cup',desc:'Manual method for brew coffee cup for 1',price: 'KWD 2.000'};
    }else if(this.productID==8){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/52d25abb-4345-46f1-86f0-7161b4035005/640x422',name:'Chemex - 2 Cup',desc:'Manual method for brew coffee cup for 2',price: 'KWD 3.250'};
    }else if(this.productID==9){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/d05360a6-7d72-47b1-826e-eff02b092140/640x422',name:'Cold Brew Bottle',desc:'Brewed coffee steeped in a cold water for a minimum 12 hours extraction.Freshly brewed coffee. All the bottles are readily',price: 'KWD 1.850'};
    }else if(this.productID==10){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/a1fc757f-223b-43de-93da-4750b47fe47b/640x422',name:'Caffe Latte Bottle',desc:'% Arabica blend espresso shot with fresh milk. All the bottles are readily prepared and sealed to go',price: 'KWD 1.850'};
    }else if(this.productID==11){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/c65a51ec-97ad-4ca1-97ad-054b87d25bfa/640x422',name:'Matcha Bottle',desc:'Organic matcha tea with fresh milk and our Spanish sauce. All the bottles are readily prepared and sealed to go',price: 'KWD 2.000'};
    }else if(this.productID==12){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/3908135b-fc7e-48d9-a951-8ecfef72e685/640x422',name:'Cold Brew Pack',desc:'Brewed coffee steeped in a cold water for a minimum 12 hours extraction.Freshly brewed coffee. All the bottles are readily prepared and sealed to go',price: 'Price on Selection'};
    }else if(this.productID==13){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/4689b182-8f10-4cfe-8419-2ef8537d65d8/640x422',name:'Caffe Latte Pack',desc:'% Arabica blend espresso shot with fresh milk. All the bottles are readily prepared and sealed to go',price: 'Price on Selection'};
    }else if(this.productID==14){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/7b7ea776-a606-4258-ba60-b5216ab8193c/640x422',name:'Matcha Pack',desc:'Organic matcha tea with fresh milk and our Spanish sauce. All the bottles are readily prepared and sealed to go',price: 'Price on Selection'};
    }else if(this.productID==15){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/56425c73-8bfa-4324-9722-798a778deeef/640x422',name:'Turkey and Cheese Baguette',desc:'Freshly baked % Turkey with cheese and baby arugula baguette.',price: 'KWD 2.000'};
    }else if(this.productID==16){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/9dfd8159-5218-4489-93d8-bdd0630df1d1/640x422',name:'Zataar croissant',desc:'Freshly baked daily.',price: 'KWD 1.000'};
    }else if(this.productID==17){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/cb39cf15-ddd4-476b-8611-f0c38e2a3283/640x422',name:'Plain Croissant',desc:'Freshly baked daily',price: 'KWD 0.750'};
    }else if(this.productID==18){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/975ad611-00eb-4bf6-9eb6-397c0a6e7531/640x422 ',name:'Salted Fudgy Brownies',desc:'Freshly baked daily',price: 'KWD 1.000'};
    }else if(this.productID==19){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/ae49721d-f29b-4708-a3b3-b8adf2b5072d/640x422',name:'Berry Loaf',desc:'Freshly baked % Loaf',price: 'KWD 1.250'};
    }else if(this.productID==20){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/86d3a6e1-11cb-4712-b5bc-c4c14324f835/640x422',name:'Walnut Pumpkin Loaf',desc:'Freshly baked % Loaf',price: 'KWD 1.000'};
    }else if(this.productID==21){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/fced195b-0f20-4635-915f-9288f23a821f/640x422',name:'Pistachio Loaf',desc:'Freshly baked % Loaf',price: 'KWD 1.250'};
    }else if(this.productID==22){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/03aae98b-a6dc-4372-9cc7-ed3318244873/640x422',name:'Brazil #1',desc:'Dark chocolate with walnut flavors, has low acidity and a medium body',price: 'Price on Selection'};
    }else if(this.productID==23){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/03aae98b-a6dc-4372-9cc7-ed3318244873/640x422',name:'Brazil #2',desc:'Chocolate fudge, red cherries complexed tart with soft acidity and medium body',price: 'Price on Selection'};
    }else if(this.productID==24){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/8d466a32-8a1c-454e-ba88-8078db153841/640x422 ',name:'Ethiopia Guji Wolichu Wachu',desc:'Hint of Papaya with dried apricot medium body and high acidity',price: 'Price on Selection'};
    }else if(this.productID==25){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/014c26ee-27c0-429b-9961-991fb15b7740/640x422',name:'Purple',desc:'Beetroot, Apple, Celery, and Lemon',price: 'KWD 1.850'};
    }else if(this.productID==26){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/014c26ee-27c0-429b-9961-991fb15b7740/640x422',name:'Green',desc:'Spinach, Cucumber, and Apple',price: 'KWD 1.850'};
    }else if(this.productID==27){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/257019c9-1e72-4cf7-9236-3d407285737f/640x422',name:'Chocolate',desc:'Fresh milk with dark Valrhona chocolate',price: 'KWD 1.500'};
    }else if(this.productID==28){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/94027e74-084f-459d-aff7-44f96d933e97/640x422',name:'Milk',desc:'Fresh milk',price: 'KWD 1.250'};
    }else if(this.productID==29){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/94027e74-084f-459d-aff7-44f96d933e97/640x422',name:'Spanish',desc:'Fresh milk and Spanish sauce',price: 'KWD 1.500'};
    }else if(this.productID==30){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/b3a0b6b3-c9ea-466c-829a-68110eac8e79/640x422',name:'Still',desc:'',price: 'KWD 0.650'};
    }else if(this.productID==31){
      this.productData= {img:'https://dml32v1x15q41.cloudfront.net/v1/image/static/95f085b5-0688-4c09-8550-36097460c9af/640x422',name:'Sparkling',desc:'',price: 'KWD 0.750'};
    }
  
  setTimeout( ()=>{
    this.loading = ! this.loading; 
    }, 1000)

    this.status = !this.status; 
    return this.productData;
  }

  hidePlusStatus(){
    this.status = !this.status; 
    this.extraShot=1;
    return this.extraShot;
  }
  
  hideMinusStatus(){
    this.status = !this.status; 
    this.extraShot=0;
    return this.extraShot;
  }

}
