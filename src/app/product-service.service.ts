import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Products } from './products';
import { PRODS } from './mock_products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  public getProducts():Observable<Products[]>{
    return of(PRODS);
  }
  public getProduct(id):Products{
    return PRODS.find(p => p.id == id);
  }
}
