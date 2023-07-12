import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductRepository } from '../models/product-repository';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {                 //any []

products: Product[];
//selectedProduct: Product | null;
productRepository: ProductRepository;


constructor(private route: ActivatedRoute) {
this.productRepository = new ProductRepository();
//this.products = this.productRepository.getProducts();
}

ngOnInit(): void {
  this.route.params.subscribe (params =>{
    debugger
    if(params["categoryId"]) {
      this.products = this.productRepository.getProductsByCategoryId(params["categoryId"]);
     } else {
      this.products = this.productRepository.getProducts();
      }
    }
  )};
}







/*
selectProduct(product: Product) {
  this.selectedProduct = product;
}

unselectedProduct() {
  this.selectedProduct = null;
}
 

}
/*
 getProducts () {
  return this.products.filter (p=>p.isActive);
 }
}
*/