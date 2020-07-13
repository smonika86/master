import { Injectable,EventEmitter  } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';    

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {


  invokeProductComponentFunction = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  onProductComponentButtonClick() {    
    this.invokeProductComponentFunction.emit();    
  }    
}
