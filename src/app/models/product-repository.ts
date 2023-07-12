import { Product } from "./product";

export class ProductRepository {
    private products: Product [] = [
        {id:1,name:"Iphone 15",price:28000,isActive: true,imageUrl: "1.jpeg",description: 'iyi telefon', categoryId: 1},
        {id:2,name:"Iphone 16",price:33000,isActive: true,imageUrl: "2.jpeg",description: 'çok iyi telefon', categoryId: 2},
        {id:3,name:"Iphone 17",price:38000,isActive: true,imageUrl: "3.jpeg",description: 'çok çok iyi telefon', categoryId: 3},
        {id:4,name:"Iphone 18",price:58000,isActive: true,imageUrl: "1.jpeg",description: 'çok çok iyi telefon', categoryId: 2},
        {id:5,name:"Iphone 19",price:68000,isActive: true,imageUrl: "2.jpeg",description: 'çok çok iyi telefon', categoryId: 2},
        {id:6,name:"Iphone 20",price:78000,isActive: true,imageUrl: "3.jpeg",description: 'çok çok iyi telefon', categoryId: 3}
      
];
       
getProducts(): Product[] {
    return this.products.filter(p=>p.isActive); 
   }
  
   getProductById (id: number) {
    return this.products.find(p=>p.id== id);
   }

   getProductsByCategoryId(id :number): Product[] {
    return this.products.filter(p=>p.categoryId == id); 
   }
  
}