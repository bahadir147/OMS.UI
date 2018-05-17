import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HttpParams } from "@angular/common/http";
import { UserService } from "../../services/user/user.service";
import { ToastMessage } from "../../shared/toast/toastmessage";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  isLoginError: boolean;
  email: string;
  password: string;
  rememberme: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit() {
    if (
      this.cookieService.get("r") != undefined &&
      this.cookieService.get("r")
    ) {
      this.email = this.cookieService.get("u");
      this.password = this.cookieService.get("p");
      this.rememberme = this.cookieService.get("r");
    }
    this.userService.logout();
  }

  OnSubmit(loginForm: NgForm) {
    let body = {
      Email: loginForm.value.email,
      Password: loginForm.value.password
    };

    this.userService.login(body).subscribe(
      data => {
        if (data.status == "0") {
          ToastMessage.getInstance().showToast(
            "bottom",
            "right",
            "info",
            "Hoşgeldiniz."
          );
          localStorage.setItem("token", data.token);
          localStorage.setItem("email", data.name);
          if (this.rememberme) {
            this.cookieService.set("u", this.email);
            this.cookieService.set("p", this.password);
            this.cookieService.set("r", this.rememberme);
          } else {
            this.cookieService.delete("u");
            this.cookieService.delete("p");
            this.cookieService.delete("r");
          }
          this.router.navigate([""]);
        } else {
          ToastMessage.getInstance().showToast(
            "bottom",
            "right",
            "info",
            "Kullanıcı adı şifre hatası."
          );
          this.isLoginError = true;
        }
      },
      error => {
        ToastMessage.getInstance().showToast(
          "bottom",
          "right",
          "info",
          "Bir şeyler oldu, çözmeye çalışıyoruz.."
        );
        this.isLoginError = true;
      }
    );
  }
  
}
