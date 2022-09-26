import { productsData } from "src/data/productrepository";

export class ProductsService {
    constructor() {
        console.log('service created')
    }
    getRecords() {
        return [...productsData]
    }
    getRecordById(id: number) {

    }
}