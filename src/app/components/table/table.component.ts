import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  products: Product[] = [];
  dataLoaded: boolean = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
    this.products = Array.from({ length: 3 }).map((_, i) => {
      return {
        code: '',
        name: '',
        category: '',
        quantity: '',
      };
    });
  }

  getProducts() {
    this.productService.getAllProduct().subscribe(
      (data: Product[]) => {
        this.products = data;
        this.dataLoaded = true;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
