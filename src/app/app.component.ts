import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idrip';

  public isCollapsed = true;
  public isMenuCollapsed = true;

}

// import {Component} from '@angular/core';

// @Component({
//   selector: 'ngbd-dropdown-basic',
//   templateUrl: './dropdown-basic.html'
// })
// export class NgbdDropdownBasic {
// }