import { Component, OnInit, OnDestroy } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css']
})
export class RootComponent implements OnInit, OnDestroy {
  public id: number;
  public backgroundColor: string;
  constructor(public settingService: SettingsService) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
