import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FilterProductPipe } from "./pipes/filter-product.pipe";
import { ProductsService } from "./services/products.service";
import { FilterComponent } from './components/filter/filter.component';
import { StarComponent } from "../common/star/star.component";

@NgModule({
  declarations: [
    ProductsListComponent, FilterProductPipe, FilterComponent, StarComponent
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
