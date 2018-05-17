import { Component } from "@angular/core";
import { Spinkit } from "ng-http-loader/spinkits";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(private translateService: TranslateService) {
    translateService.setDefaultLang("tr");
  }
  public spinkit = Spinkit;
  title = "app";
}
