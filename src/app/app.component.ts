import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '12';
  data = 'Hello Coders';
  num = 100;
  getVal() {
    return 'code step by step';
  }
}
