import { productsData } from "src/data/productrepository";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "src/models/product.model";
import { Observable, map, catchError } from "rxjs";
import { ApiResponseModel } from "src/models/api-respnose.model";

@Injectable()
export class ProductsService {
    constructor(private http: HttpClient) {
        console.log('service created')
    }
    getRecords(): Observable<ApiResponseModel<Product[]>> {
        return this.http.get<ApiResponseModel<Product[]>>('http://127.0.0.1:3003/products/')
        //return [...productsData]
        /*
        var obs: Observable<Object> = this.http.get('http://127.0.0.1:3003/products/')

        var obsResp: Observable<ApiResponseModel<Product[]>> = obs.pipe(
            map(
                (actualResp: Object) => {
                    return <ApiResponseModel<Product[]>>actualResp
                }
            )
        )
        return obsResp
        */

    }
    getRecordById(id: number): Observable<ApiResponseModel<Product>> {
        return this.http.get<ApiResponseModel<Product>>('http://127.0.0.1:3003/products/' + id)
    }
    addRecord(productObj: Product): Observable<ApiResponseModel<Product[]>> {
        return this.http.post<ApiResponseModel<Product[]>>('http://127.0.0.1:3003/products/', productObj)
    }
    updateRecord(productObj: Product): Observable<ApiResponseModel<Product[]>> {
        return this.http.put<ApiResponseModel<Product[]>>('http://127.0.0.1:3003/products/' + productObj.productId, productObj)
    }
    deleteRecord(id: number): Observable<ApiResponseModel<Product[]>> {
        return this.http.delete<ApiResponseModel<Product[]>>('http://127.0.0.1:3003/products/' + id)
    }
}