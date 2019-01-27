import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductServiceService } from '../product-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public prods:Products[];
  public filterd:Products[];

  manufacturer:string;
  storage:string;
  constructor(private productService:ProductServiceService,private ac:ActivatedRoute) { 
    this.productService.getProducts()
    .subscribe(p => this.filterd=this.prods=p);

    this.manufacturer = this.ac.snapshot.queryParamMap.get('manufacturer');
    this.storage = this.ac.snapshot.queryParamMap.get('storage');
  }

  ngOnInit() 
  { 
   this.filterd = (this.manufacturer)?
       this.prods.filter(f => f.manufacturer.toLowerCase().includes(this.manufacturer.toLowerCase())) :this.prods;
    if( this.storage)
    {
      this.filterd = this.prods.filter(f => f.storage.toString().includes(this.storage.toString()));
      
    }
  }
  // getProducts():void{
  //   this.productService.getProducts()
  //    .subscribe(pr=>this.prods=pr);
  // }

  filterQ(query: string){
    this.filterd = (query) ?
      this.prods.filter(f => f.name.toLowerCase().includes(query.toLowerCase())):
      this.prods;
  }

}
