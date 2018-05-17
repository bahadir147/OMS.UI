/**
 * Created by wangdi on 26/5/17.
 */
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "../app/page/login/login.component";
import { RegisterComponent } from "../app/page/register/register.component";
import { RootComponent } from "../app/dashboard/root/root.component";
import { HomeComponent } from "../app/dashboard/home/home.component";
import { UserComponent } from "../app/dashboard/user/user.component";
import { NotFoundComponent } from "../app/page/not-found/not-found.component";
import { AuthGuard } from "../authGuard/auth.guard";
import { ProductsComponent } from "../app/dashboard/products/products.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "not-found", component: NotFoundComponent },
  {
    path: "",
    canActivate: [AuthGuard],
    component: RootComponent,
    children: [
      { path: "", component: HomeComponent, canActivate: [AuthGuard] },
      {
        path: "usersettings",
        component: UserComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "products",
        component: ProductsComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: "**", redirectTo: "/not-found" }
];

export const routing = RouterModule.forRoot(routes);
