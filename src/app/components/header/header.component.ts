import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title: string = 'crash-angular';
  showAddTask?: boolean =true;
  subscription?: Subscription;
  constructor(private uiService: UiService) {
    this.subscription=this.uiService.onToggle().subscribe(value=>this.showAddTask=value);
  }

  ngOnInit(): void {}
  toggleAddTesk() {
    this.uiService.toggleAddTask();
  }
}
