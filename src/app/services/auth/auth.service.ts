import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  constructor() {}
  public isAuthenticated(): boolean {
    const token = localStorage.getItem("token");
    if (token == null) return false;
    else return true;
  }
}
