import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() title: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

  menuClick() {
    document.getElementById('main-panel').style.marginRight = '2px';
  }
  logOut() {
    this.userService.logout();
    this.router.navigate(["login"]);
  }

  dashboardClick(){
    this.router.navigate(["/"]);
  }
}
