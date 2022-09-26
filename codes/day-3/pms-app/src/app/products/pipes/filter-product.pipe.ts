import { Pipe, PipeTransform } from "@angular/core";
import { Product } from "src/models/product.model";

@Pipe({
    name: 'productfilter'
})
export class FilterProductPipe implements PipeTransform {
    transform(value: Product[], ...args: string[]) {
        console.log(value)
        console.log(args)
        if (value && value !== null && value.length > 0 && args && args[0] && args[0]
            !== '') {
            const criteria = args[0].toLocaleLowerCase()
            const filteredArray = value.filter(
                (p: Product) => {
                    return p.productName.toLocaleLowerCase().indexOf(criteria) !== -1
                }
            )
            return filteredArray
        } else {
            return value
        }
    }
}