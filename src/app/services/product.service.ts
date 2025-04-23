import { Injectable } from '@angular/core';
import { Post, Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  deleteProduct(id: number) {
    throw new Error('Method not implemented.');
  }

  private products: Product[] = [
    { id: 1, name: 'Produto 1', price: 99.99, description: 'Descrição do Produto 1' },
    { id: 2, name: 'Produto 2', price: 149.99, description: 'Descrição do Produto 2' },
    { id: 3, name: 'Produto 3', price: 99.99, description: 'Descrição do Produto 3' },
    { id: 4, name: 'Produto 4', price: 149.99, description: 'Descrição do Produto 4' },
    { id: 5, name: 'Produto 5', price: 99.99, description: 'Descrição do Produto 5' },
    { id: 6, name: 'Produto 6', price: 149.99, description: 'Descrição do Produto 6' },
    { id: 7, name: 'Produto 7', price: 99.99, description: 'Descrição do Produto 7' },
    { id: 8, name: 'Produto 8', price: 149.99, description: 'Descrição do Produto 8' },
    { id: 9, name: 'Produto 9', price: 99.99, description: 'Descrição do Produto 9' },
    { id: 10, name: 'Produto 10', price: 149.99, description: 'Descrição do Produto 10' },
    { id: 11, name: 'Produto 11', price: 99.99, description: 'Descrição do Produto 11' },
    { id: 12, name: 'Produto 12', price: 149.99, description: 'Descrição do Produto 12' },
  ];

  private productsSubject = new BehaviorSubject<Product[]>(this.products);

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getProducts() {
    return this.productsSubject.asObservable();
  }

  addProduct(product: Product) {
    const newProduct = { ...product, id: this.products.length + 1 };
    this.products.push(newProduct);
    this.productsSubject.next([...this.products]);
  }

  updateProduct(updatedProduct: Product) {
    const index = this.products.findIndex(p => p.id === updatedProduct.id);
    if (index !== -1) {
      this.products[index] = updatedProduct;
      this.productsSubject.next([...this.products]);
    }
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }


}
