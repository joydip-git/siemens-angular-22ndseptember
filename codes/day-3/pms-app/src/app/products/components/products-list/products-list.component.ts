import { Component } from '@angular/core';
import { Product } from 'src/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  //providers: [ProductsService]
})
export class ProductsListComponent {

  products: Product[];
  // private ps: ProductsService;

  constructor(private ps: ProductsService) {
    console.log('[PL] component created')
    this.products = this.ps.getRecords()
  }
}
