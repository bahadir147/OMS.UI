import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { RequestOptions } from "@angular/http";

@Injectable()
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  Get(url: string, params?: HttpParams): Observable<any> {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("token")
    });
    return this.httpClient.get(url, { headers: headers });
  }

  Post(url: string, body: any): Observable<any> {
    return this.httpClient.post(url, body);
  }
}
