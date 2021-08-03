import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [],
})
export class HeaderComponent {
  @Output() changeTabFire = new EventEmitter<string>()
  collapsed = true;

  changeTab(tab :string) {
    console.log("Change to ==>", tab)
    this.changeTabFire.emit(tab)
  }
}
