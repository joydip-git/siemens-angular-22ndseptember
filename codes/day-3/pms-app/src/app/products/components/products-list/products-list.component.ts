import { Component, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
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
  searchText = ''
  erroMessage?= ''
  // private ps: ProductsService;

  constructor(private ps: ProductsService) {
    console.log('[PL] component created')
  }
  updateStarRating(newRating: number, id: number) {
    if (this.products) {
      const found = this.products.find(
        (p: Product) => {
          return p.productId === id
        }
      )
      if (found) {
        found.starRating = newRating
        this.ps.updateRecord(found).subscribe({
          next: (resp: ApiResponseModel<Product[]>) => {
            this.products = resp.data
            this.erroMessage = ''
            this.loading = false
          },
          error: (err) => {
            this.products = undefined
            this.erroMessage = err.message
            this.loading = false
          }
        })
      }
    }
  }
  updateSearchText(updatedSearchText: string) {
    console.log(updatedSearchText)
    this.searchText = updatedSearchText
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
