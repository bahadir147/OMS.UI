import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ViewChild } from "@angular/core";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgHttpLoaderComponentsModule } from "ng-http-loader/components/ng-http-loader-components.module";
import { NgHttpLoaderServicesModule } from "ng-http-loader/services/ng-http-loader-services.module";
import { DataSource } from "@angular/cdk/table";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { RootComponent } from "./dashboard/root/root.component";
import { AuthService } from "./services/auth/auth.service";
import { SettingsService } from "./services/settings.service";
import { UserService } from "./services/user/user.service";
import { ApiService } from "./services/api/api.service";

import { UserComponent } from "./dashboard/user/user.component";
import { RegisterComponent } from "./page/register/register.component";
import { LoginComponent } from "./page/login/login.component";
import { HomeComponent } from "./dashboard/home/home.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FigurecardComponent } from "./shared/figurecard/figurecard.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { HeaderComponent } from "./shared/header/header.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { CookieService } from "ngx-cookie-service";
import { NgForm, FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { NotFoundComponent } from "./page/not-found/not-found.component";
import { routing } from "../routes/app.routes";
import { AuthGuard } from "../authGuard/auth.guard";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { DxDataGridModule } from "devextreme-angular";
import { ProductsComponent } from "./dashboard/products/products.component";
import { ProductService } from "./services/product/product.service";
import { CdkTableModule } from "@angular/cdk/table";

export function translateHttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: [
    ProductsComponent,
    AppComponent,
    SidebarComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RootComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    FigurecardComponent,
    NotFoundComponent
  ],
  imports: [
    DxDataGridModule,
    HttpClientModule,
    NgHttpLoaderServicesModule,
    NgHttpLoaderComponentsModule,
    BrowserModule,
    FormsModule,
    routing,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthGuard,
    AuthService,
    SettingsService,
    UserService,
    ProductService,
    ApiService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
