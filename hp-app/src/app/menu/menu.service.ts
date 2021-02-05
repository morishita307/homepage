import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private sharedDataSource = new Subject<string>();
  public sharedDataSource$ = this.sharedDataSource.asObservable();

  constructor() {}

  public onNotifySharedDataChanged(updateed: string) {
    this.sharedDataSource.next(updateed);
  }
}