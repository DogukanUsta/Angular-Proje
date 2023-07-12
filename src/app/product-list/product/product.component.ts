import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductRepository } from 'src/app/models/product-repository';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  product: Product | undefined;
  productRepository: ProductRepository;
  // @Input() prd: Product
  // @Output() unselectEvent= new EventEmitter<void>();




constructor(private route: ActivatedRoute) {
  this.productRepository = new ProductRepository(); 
}

ngOnInit(): void {
  this.route.params.subscribe (params => {
    const id = params["productId"];
    this.product = this.productRepository.getProductById(id); 
     //console.log(params["productId"]);
  });
}



// unselectedProduct() {
//   this.unselectEvent.emit();
//   }

  



}
