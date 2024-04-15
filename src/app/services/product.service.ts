import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'http://localhost:3000/product';
  constructor(private Http: HttpClient) {}

  getAllProduct() {
    return this.Http.get<Product[]>(this.baseUrl);
  }
}
