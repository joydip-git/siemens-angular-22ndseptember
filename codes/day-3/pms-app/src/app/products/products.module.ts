import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FilterProductPipe } from "./pipes/filter-product.pipe";
import { ProductsService } from "./services/products.service";

@NgModule({
  declarations: [
    ProductsListComponent, FilterProductPipe
  ],
  imports: [CommonModule, HttpClientModule],
  providers: [ProductsService],
  bootstrap: [],
  exports: [ProductsListComponent]
})
export class ProductsModule {
  constructor() {
    console.log('Products module created')
  }
}
