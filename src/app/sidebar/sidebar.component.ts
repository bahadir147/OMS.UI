import {AfterViewInit, Component, OnInit, OnDestroy} from '@angular/core';
import { SettingsService } from '../services/settings.service';
import { ROUTES } from './sidebar-routes.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {
  public color: string;
  public menuItems: object;
  public activeFontColor: string;
  public normalFontColor: string;
  public dividerBgColor: string;
  constructor(public settingsService: SettingsService) {
    this.menuItems = ROUTES;
  }

  ngOnInit() {
  
  }
  ngOnDestroy() {
   
  }

  ngAfterViewInit() {
  }
}
