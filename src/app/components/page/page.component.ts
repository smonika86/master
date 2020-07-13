import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';  

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  productID:any;
  productData:any;
  loading: boolean = true;
  constructor(
    private actroute:ActivatedRoute,
  ) {
   
   }

  ngOnInit() {
    
    this.productID = this.actroute.snapshot.paramMap.get('id')
    if(this.productID==1){
      this.productData= {name:'Espresso',desc:'Espresso shot',price: 'KWD 1.100'};
    }else if(this.productID==2){
      this.productData= {name:'Espresso Macchiato',desc:'Espresso shot with foamed milk.',price: 'KWD 1.350'};
    }else if(this.productID==3){
      this.productData= {name:'Hot Americano',desc:'Espresso shot with water. Freshly brewed coffee',price: 'KWD 1.250'};
    }else if(this.productID==4){
      this.productData= {name:'Iced Americano',desc:'Espresso shot with water. Freshly brewed coffee',price: 'KWD 1.350'};
    }else if(this.productID==5){
      this.productData= {name:'Cold Press',desc:'Brewed coffee bottle steeped in cold water for a minimum of 12 hours extraction. 270 ml',price: 'KWD 1.850'};
    }else if(this.productID==6){
      this.productData= {name:'Iced Cafe Latte',desc:'Espresso shot with fresh milk',price: 'KWD 1.850'};
    }else if(this.productID==7){
      this.productData= {name:'Chemex - 1 Cup',desc:'Manual method for brew coffee cup for 1',price: 'KWD 2.000'};
    }else if(this.productID==8){
      this.productData= {name:'Chemex - 2 Cup',desc:'Manual method for brew coffee cup for 2',price: 'KWD 3.250'};
    }else if(this.productID==9){
      this.productData= {name:'Cold Brew Bottle',desc:'Brewed coffee steeped in a cold water for a minimum 12 hours extraction.Freshly brewed coffee. All the bottles are readily',price: 'KWD 1.850'};
    }else if(this.productID==10){
      this.productData= {name:'Caffe Latte Bottle',desc:'% Arabica blend espresso shot with fresh milk. All the bottles are readily prepared and sealed to go',price: 'KWD 1.850'};
    }else if(this.productID==11){
      this.productData= {name:'Matcha Bottle',desc:'Organic matcha tea with fresh milk and our Spanish sauce. All the bottles are readily prepared and sealed to go',price: 'KWD 2.000'};
    }else if(this.productID==12){
      this.productData= {name:'Cold Brew Pack',desc:'Brewed coffee steeped in a cold water for a minimum 12 hours extraction.Freshly brewed coffee. All the bottles are readily prepared and sealed to go',price: 'Price on Selection'};
    }else if(this.productID==13){
      this.productData= {name:'Caffe Latte Pack',desc:'% Arabica blend espresso shot with fresh milk. All the bottles are readily prepared and sealed to go',price: 'Price on Selection'};
    }else if(this.productID==14){
      this.productData= {name:'Matcha Pack',desc:'Organic matcha tea with fresh milk and our Spanish sauce. All the bottles are readily prepared and sealed to go',price: 'Price on Selection'};
    }else if(this.productID==15){
      this.productData= {name:'Turkey and Cheese Baguette',desc:'Freshly baked % Turkey with cheese and baby arugula baguette.',price: 'KWD 2.000'};
    }else if(this.productID==16){
      this.productData= {name:'Zataar croissant',desc:'Freshly baked daily.',price: 'KWD 1.000'};
    }else if(this.productID==17){
      this.productData= {name:'Plain Croissant',desc:'Freshly baked daily',price: 'KWD 0.750'};
    }else if(this.productID==18){
      this.productData= {name:'Salted Fudgy Brownies',desc:'Freshly baked daily',price: 'KWD 1.000'};
    }else if(this.productID==19){
      this.productData= {name:'Berry Loaf',desc:'Freshly baked % Loaf',price: 'KWD 1.250'};
    }else if(this.productID==20){
      this.productData= {name:'Walnut Pumpkin Loaf',desc:'Freshly baked % Loaf',price: 'KWD 1.000'};
    }else if(this.productID==21){
      this.productData= {name:'Pistachio Loaf',desc:'Freshly baked % Loaf',price: 'KWD 1.250'};
    }else if(this.productID==22){
      this.productData= {name:'Brazil #1',desc:'Dark chocolate with walnut flavors, has low acidity and a medium body',price: 'Price on Selection'};
    }else if(this.productID==23){
      this.productData= {name:'Brazil #2',desc:'Chocolate fudge, red cherries complexed tart with soft acidity and medium body',price: 'Price on Selection'};
    }else if(this.productID==24){
      this.productData= {name:'Ethiopia Guji Wolichu Wachu',desc:'Hint of Papaya with dried apricot medium body and high acidity',price: 'Price on Selection'};
    }else if(this.productID==25){
      this.productData= {name:'Purple',desc:'Beetroot, Apple, Celery, and Lemon',price: 'KWD 1.850'};
    }else if(this.productID==26){
      this.productData= {name:'Green',desc:'Spinach, Cucumber, and Apple',price: 'KWD 1.850'};
    }else if(this.productID==27){
      this.productData= {name:'Chocolate',desc:'Fresh milk with dark Valrhona chocolate',price: 'KWD 1.500'};
    }else if(this.productID==28){
      this.productData= {name:'Milk',desc:'Fresh milk',price: 'KWD 1.250'};
    }else if(this.productID==29){
      this.productData= {name:'Spanish',desc:'Fresh milk and Spanish sauce',price: 'KWD 1.500'};
    }else if(this.productID==30){
      this.productData= {name:'Still',desc:'',price: 'KWD 0.650'};
    }else if(this.productID==31){
      this.productData= {name:'Sparkling',desc:'',price: 'KWD 0.750'};
    }
  
  
  
  

  setTimeout( ()=>{
    this.loading = ! this.loading; 
    }, 1000)
    return this.productData;
  }

}
