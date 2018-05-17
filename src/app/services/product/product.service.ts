import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { API_URL } from "../../../environments/environment";
import { ApiService } from "../api/api.service";

export class Customer {
  Name: string;
  Price: string;
  Unit: string;
  DiscountRate: string;
}
@Injectable()
export class ProductService {
  constructor(private apiService: ApiService) {}
  getProducts(): Observable<any> {
    return this.apiService.Get(API_URL + "Product/getproducts", null);
  }
}
