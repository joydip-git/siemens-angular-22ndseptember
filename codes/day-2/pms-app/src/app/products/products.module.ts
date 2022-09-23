import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsService } from "./services/products.service";

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [CommonModule],
  providers: [ProductsService],
  bootstrap: [],
  exports: [ProductsListComponent]
})
export class ProductsModule {
  constructor() {
    console.log('Products module created')
  }
}
