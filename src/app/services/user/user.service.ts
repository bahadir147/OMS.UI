import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ApiService } from "../api/api.service";
import { API_URL } from "../../../environments/environment";
import { HttpParams } from "@angular/common/http";

@Injectable()
export class UserService {
  constructor(private apiService: ApiService) {}

  login(body: any): Observable<any> {
    return this.apiService.Post(API_URL + "token", body);
  }
  logout() {
    localStorage.removeItem("token");
  }
  register(body: any): Observable<any> {
    return this.apiService.Post(API_URL + "company/register", body);
  }

  tokenControl(): Observable<any> {
    return this.apiService.Get(API_URL + "token/control", null);
  }
}
