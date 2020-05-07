import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from './product.model';

interface GetResponse {
  _embedded: {
    products: Product[]
  };
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
  }

  getProductList(categoryId: number): Observable<Product[]> {
    return this.http.get<GetResponse>(`/api/products/search/findByCategoryId?id=${categoryId}`)
      .pipe(
        map(result => result._embedded.products)
      );
  }
}
