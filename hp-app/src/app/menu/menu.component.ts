import { Component, OnInit } from '@angular/core';

import { MenuService } from './menu.service'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public list1: string = '管理本部'
  public list2: string = 'システム開発部'
  public list3: string = '第一システム開発部'
  public list4: string = '第二システム開発部'
  public list5: string = '社会基盤システム開発部'
  public list6: string = 'BC'
  public list7: string = 'DS'
  public list8: string = 'AIH'

  constructor(private menu: MenuService) { }

  ngOnInit(): void {
  }

  menuClicked(title:string) {
    this.menu.onNotifySharedDataChanged(title);
  }

}
