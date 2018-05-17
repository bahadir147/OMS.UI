import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { UserService } from "../../services/user/user.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}
  OnSubmit(loginForm: NgForm) {
    var body = {
      Email: loginForm.value.email,
      Password: loginForm.value.password,
      Name: loginForm.value.companyName,
      Address: loginForm.value.address,
      FirstName: loginForm.value.firstName,
      LastName: loginForm.value.lastName,
      PhoneNumber: loginForm.value.phoneNumber
    };
    
    this.userService.register(body).subscribe(
      data => {
        this.router.navigate([""]);
      },
      error => {
        console.log(error);
      }
    );
  }
}
