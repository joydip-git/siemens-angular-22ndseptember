import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from 'src/models/api-respnose.model';
import { Product } from 'src/models/product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  //providers: [ProductsService]
})
export class ProductsListComponent implements OnInit, OnChanges {

  products?: Product[] | null;
  loading = true
  erroMessage?= ''
  filterText = 'l'
  // private ps: ProductsService;

  constructor(private ps: ProductsService) {
    console.log('[PL] component created')
  }
  updateFilterText(updatedValue: string) {
    this.filterText = updatedValue
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('[PL] component changes happened')
  }
  ngOnInit(): void {
    console.log('[PL] component initiated')
    const obs: Observable<ApiResponseModel<Product[]>> = this.ps.getRecords()
    //pass an observer objevt to the subscribe method
    obs.subscribe({
      //executed when proper response has arrived
      next: (resp: ApiResponseModel<Product[]>) => {
        if (!resp.data) {
          this.erroMessage = resp.message
          this.products = undefined
          this.loading = false
        } else if (resp.data === null) {
          this.erroMessage = resp.message
          this.products = undefined
          this.loading = false
        } else if (resp.data.length === 0) {
          this.erroMessage = "no records found"
          this.products = undefined
          this.loading = false
        } else {
          this.erroMessage = ''
          this.products = resp.data
          this.loading = false
        }
      },
      //executed when error response has arrived
      error: (err) => {
        this.erroMessage = err.message
        this.products = undefined
        this.loading = false
      },
      //executed after prope response has arrived and you have processed it
      // complete: () => {

      // }
    })
    console.log('called service method')
  }
}
