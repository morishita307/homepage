import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit ,OnDestroy{

  public pageTitle: String = '';
  private subscription!: Subscription;

  constructor(private menu:MenuService) { }

  ngOnInit(): void {
    this.subscription = this.menu.sharedDataSource$.subscribe(
      msg => {
        this.pageTitle = msg;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
