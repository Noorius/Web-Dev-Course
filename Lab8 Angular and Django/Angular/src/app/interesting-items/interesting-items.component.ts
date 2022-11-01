import { Component, OnInit } from '@angular/core';

import { AmazonService } from '../amazon.service';
import { VariousListComponent } from '../various-list/various-list.component';
import { Product, items } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-interesting-items',
  templateUrl: './interesting-items.component.html',
  styleUrls: ['./interesting-items.component.css']
})
export class InterestingItemsComponent implements OnInit {
  products = items; //this.amazonService.getItems();;
  
  SelectedCategory = this.list.selectedCategory;

  constructor(
    private amazonService: AmazonService,
    private list: VariousListComponent,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    
  }

  delete(item: any){
      this.products.splice(this.products.indexOf(item), 1);
  }

  react(item:any, ev: any, lik: any, dis:any){
    let r = ev.target.innerText;
    if(r=="👍"){
      item.likes++;
    }else{
      item.likes--;
    }
    lik.style = "pointer-events: none";
    dis.style = "pointer-events: none";
  }
}
